document.getElementById("loginForm").addEventListener("submit", function (event) {

    event.preventDefault();

    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;

    var errorMessage = document.getElementById("errorMessage");

    errorMessage.textContent = "";


    // Validasi input
    if (email === "") {
        errorMessage.textContent = "Email wajib diisi.";
        return;
    }

    if (password === "") {
        errorMessage.textContent = "Password wajib diisi.";
        return;
    }


    // Cari user
    var pengguna = dataPengguna.find(function (user) {
        return user.email === email &&
               user.password === password;
    });


    // User tidak ditemukan
    if (!pengguna) {
        errorMessage.textContent = "Email atau password salah.";
        return;
    }


    // Login berhasil
    console.log("LOGIN BERHASIL");
    console.log(pengguna);


    // Simpan data user
    localStorage.setItem(
        "userLogin",
        JSON.stringify(pengguna)
    );


    // Pindah ke dashboard
    window.location.href = "dashboard.html";

});

var togglePassword =
    document.getElementById("togglePassword");

var password =
    document.getElementById("password");


togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");


    } else {

        password.type = "password";

        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");

    }

});

//dialog forgot password
var forgotPassword =
    document.getElementById("forgotPassword");

var forgotPasswordModal =
    document.getElementById("forgotPasswordModal");

var closeForgotPassword =
    document.getElementById("closeForgotPassword");


forgotPassword.addEventListener("click", function (event) {

    event.preventDefault();

    forgotPasswordModal.classList.add("show");

});

closeForgotPassword.addEventListener("click", function () {

    forgotPasswordModal.classList.remove("show");

});

forgotPasswordModal.addEventListener("click", function (event) {

    if (event.target === forgotPasswordModal) {

        forgotPasswordModal.classList.remove("show");

    }

});

//dialog register
var showRegister=
    document.getElementById("showRegister");

var showRegisterModal =
    document.getElementById("showRegisterModal");

var closeRegisterModal =
    document.getElementById("closeRegisterModal");


showRegister.addEventListener("click", function (event) {

    event.preventDefault();

    showRegisterModal.classList.add("show");

});

closeRegisterModal.addEventListener("click", function () {

    showRegisterModal.classList.remove("show");

});

showRegisterModal.addEventListener("click", function (event) {

    if (event.target === showRegisterModal) {

        showRegisterModal.classList.remove("show");

    }

});


