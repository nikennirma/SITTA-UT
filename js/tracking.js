// ==============================
// CEK LOGIN
// ==============================

var userLogin = localStorage.getItem("userLogin");

if (!userLogin) {
    window.location.href = "index.html";
}

var pengguna = JSON.parse(userLogin);


// ==============================
// DATA USER
// ==============================

document.getElementById("userName").textContent = pengguna.nama;

document.getElementById("userRole").textContent = pengguna.role;

document.getElementById("userAvatar").textContent =
    pengguna.nama.charAt(0).toUpperCase();


// ==============================
// CARI TRACKING
// ==============================

document.getElementById("btnCari").addEventListener("click", function () {

    cariTracking();

});


document.getElementById("nomorDO").addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        cariTracking();

    }

});


function cariTracking() {

    var nomorDO = document
        .getElementById("nomorDO")
        .value
        .trim();


    var error = document.getElementById("searchError");

    var result = document.getElementById("trackingResult");


    error.textContent = "";

    result.style.display = "none";


    if (nomorDO === "") {

        error.textContent =
            "Nomor Delivery Order wajib diisi.";

        return;

    }


    // Cari data berdasarkan nomor DO
    var data = dataTracking[nomorDO];


    if (!data) {

        error.textContent =
            "Data Delivery Order tidak ditemukan.";

        return;

    }


    // Tampilkan hasil
    tampilkanTracking(data);

}


// ==============================
// TAMPILKAN DATA
// ==============================

function tampilkanTracking(data) {

    document.getElementById("trackingResult").style.display =
        "block";


    document.getElementById("resultNomorDO").textContent =
        data.nomorDO;


    document.getElementById("resultNama").textContent =
        data.nama;


    document.getElementById("resultEkspedisi").textContent =
        data.ekspedisi;


    document.getElementById("resultTanggal").textContent =
        formatTanggal(data.tanggalKirim);


    document.getElementById("resultPaket").textContent =
        data.paket;


    document.getElementById("resultTotal").textContent =
        data.total;


    // Status
    var statusBadge =
        document.getElementById("statusBadge");

    statusBadge.textContent =
        data.status;


    setStatusProgress(data.status);


    // History
    tampilkanHistory(data.perjalanan);

}


// ==============================
// PROGRESS STATUS
// ==============================

function setStatusProgress(status) {

    var progressBar =
        document.getElementById("progressBar");


    var steps = [
        document.getElementById("step1"),
        document.getElementById("step2"),
        document.getElementById("step3"),
        document.getElementById("step4")
    ];


    // Reset
    steps.forEach(function (step) {

        step.classList.remove("completed");
        step.classList.remove("current");

    });


    var progress = 0;
    var currentStep = 0;


    if (status === "Diproses") {

        progress = 0;
        currentStep = 0;

    } else if (status === "Dikirim") {

        progress = 33;
        currentStep = 1;

    } else if (status === "Dalam Perjalanan") {

        progress = 66;
        currentStep = 2;

    } else if (status === "Selesai") {

        progress = 100;
        currentStep = 3;

    }


    progressBar.style.width = progress + "%";


    steps.forEach(function (step, index) {

        if (index < currentStep) {

            step.classList.add("completed");

        }

        if (index === currentStep) {

            step.classList.add("current");

        }

    });

}


// ==============================
// HISTORY
// ==============================

function tampilkanHistory(perjalanan) {

    var container =
        document.getElementById("trackingHistory");


    container.innerHTML = "";


    perjalanan.forEach(function (item, index) {

        var historyItem =
            document.createElement("div");

        historyItem.className =
            "history-item";


        historyItem.innerHTML = `

            <div class="history-dot">
                <i class="fa-solid fa-location-dot"></i>
            </div>

            <div class="history-content">

                <strong>
                    ${item.keterangan}
                </strong>

                <span>
                    ${item.waktu}
                </span>

            </div>

        `;


        container.appendChild(historyItem);

    });

}


// ==============================
// FORMAT TANGGAL
// ==============================

function formatTanggal(tanggal) {

    var date = new Date(tanggal);


    return date.toLocaleDateString("id-ID", {

        day: "2-digit",
        month: "long",
        year: "numeric"

    });

}


// ==============================
// LOGOUT
// ==============================

document
    .getElementById("logoutButton")
    .addEventListener("click", function () {

        localStorage.removeItem("userLogin");

        window.location.href = "index.html";

    });