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

document.getElementById("greetingName").textContent =
    "Selamat datang, " + pengguna.nama + "!";


// Avatar mengambil huruf pertama nama
document.getElementById("userAvatar").textContent =
    pengguna.nama.charAt(0).toUpperCase();


// ==============================
// GREETING BERDASARKAN WAKTU
// ==============================

var sekarang = new Date();
var jam = sekarang.getHours();

var greeting;

if (jam >= 5 && jam < 12) {
    greeting = "Selamat pagi";
} else if (jam >= 12 && jam < 15) {
    greeting = "Selamat siang";
} else if (jam >= 15 && jam < 18) {
    greeting = "Selamat sore";
} else {
    greeting = "Selamat malam";
}

document.getElementById("greetingTime").textContent = greeting;


// ==============================
// LOGOUT
// ==============================

document.getElementById("logoutButton").addEventListener("click", function () {

    localStorage.removeItem("userLogin");

    window.location.href = "index.html";

});