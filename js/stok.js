// ==============================
// CEK LOGIN
// ==============================

var userLogin = localStorage.getItem("userLogin");

if (!userLogin) {

    window.location.href = "index.html";

}

var pengguna = JSON.parse(userLogin);


// ==============================
// USER
// ==============================

document.getElementById("userName").textContent =
    pengguna.nama;

document.getElementById("userRole").textContent =
    pengguna.role;

document.getElementById("userAvatar").textContent =
    pengguna.nama.charAt(0).toUpperCase();


// ==============================
// ELEMENT
// ==============================

var tableBody =
    document.getElementById("stokTableBody");

var totalData =
    document.getElementById("totalData");

var formStok =
    document.getElementById("formStok");

var btnTambahStok =
    document.getElementById("btnTambahStok");

var btnTutupForm =
    document.getElementById("btnTutupForm");

var btnBatal =
    document.getElementById("btnBatal");

var formTambahStok =
    document.getElementById("formTambahStok");


// ==============================
// TAMPILKAN DATA
// ==============================

function tampilkanDataStok() {

    // Kosongkan tabel
    tableBody.innerHTML = "";


    // Loop dataBahanAjar
    dataBahanAjar.forEach(function (item, index) {

        var row =
            document.createElement("tr");


        // Nomor
        var cellNo =
            document.createElement("td");

        cellNo.textContent =
            index + 1;

        //sampul
        var cellCover =
            document.createElement("td");
         var image = document.createElement("img");

        image.src = item.cover;
        image.alt = item.namaBarang;
        image.className = "book-cover";
        cellCover.appendChild(image);

        // Kode lokasi
        var cellLokasi =
            document.createElement("td");

        cellLokasi.textContent =
            item.kodeLokasi;


        // Kode barang
        var cellKode =
            document.createElement("td");

        cellKode.textContent =
            item.kodeBarang;


        // Nama barang
        var cellNama =
            document.createElement("td");

        cellNama.textContent =
            item.namaBarang;


        // Jenis
        var cellJenis =
            document.createElement("td");

        cellJenis.textContent =
            item.jenisBarang;


        // Edisi
        var cellEdisi =
            document.createElement("td");

        cellEdisi.textContent =
            item.edisi;


        // Stok
        var cellStok =
            document.createElement("td");

        cellStok.textContent =
            item.stok;


        // Masukkan cell ke row
        row.appendChild(cellNo);

        row.appendChild(cellCover);

        row.appendChild(cellLokasi);

        row.appendChild(cellKode);

        row.appendChild(cellNama);

        row.appendChild(cellJenis);

        row.appendChild(cellEdisi);

        row.appendChild(cellStok);


        // Masukkan row ke tabel
        tableBody.appendChild(row);

    });


    // Update total data
    totalData.textContent =
        dataBahanAjar.length;

}


// Jalankan saat halaman dibuka
tampilkanDataStok();


// ==============================
// BUKA FORM
// ==============================

btnTambahStok.addEventListener("click", function () {

    formStok.style.display = "block";

    document.getElementById("kodeLokasi").focus();

});


// ==============================
// TUTUP FORM
// ==============================

function tutupForm() {

    formStok.style.display = "none";

    formTambahStok.reset();

}


btnTutupForm.addEventListener(
    "click",
    tutupForm
);


btnBatal.addEventListener(
    "click",
    tutupForm
);


// ==============================
// TAMBAH DATA
// ==============================

formTambahStok.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        // Ambil nilai form
        var kodeLokasi =
            document.getElementById("kodeLokasi").value.trim();

        var kodeBarang =
            document.getElementById("kodeBarang").value.trim();

        var namaBarang =
            document.getElementById("namaBarang").value.trim();

        var jenisBarang =
            document.getElementById("jenisBarang").value;

        var edisi =
            document.getElementById("edisi").value.trim();

        var stok =
            parseInt(
                document.getElementById("stok").value
            );
        
        var fileCover = document.getElementById("cover").files[0];

        if (!fileCover) {
            alert("Sampul bahan ajar wajib dipilih.");
            return;
        }

        var coverUrl = URL.createObjectURL(fileCover);


        // Buat object baru
        var dataBaru = {

            kodeLokasi: kodeLokasi,

            kodeBarang: kodeBarang,

            namaBarang: namaBarang,

            jenisBarang: jenisBarang,

            edisi: edisi,

            stok: stok,

            cover: coverUrl

        };


        // Masukkan ke dataBahanAjar
        dataBahanAjar.push(dataBaru);


        // Tampilkan ulang tabel
        tampilkanDataStok();


        // Tutup form
        tutupForm();

    }
);


// ==============================
// LOGOUT
// ==============================

document
    .getElementById("logoutButton")
    .addEventListener(
        "click",
        function () {

            localStorage.removeItem(
                "userLogin"
            );

            window.location.href =
                "index.html";

        }
    );