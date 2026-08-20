// ========================================
// PASSWORD SERENITYMIND
// ========================================

// TUKAR PASSWORD DI SINI
const correctPassword = "SERENITY2026";


// ========================================
// SEMAK PASSWORD
// ========================================

function checkPassword() {

    const password =
        document.getElementById("passwordInput").value;

    const error =
        document.getElementById("passwordError");


    if (password === correctPassword) {

        // Sembunyikan skrin password
        document.getElementById(
            "passwordScreen"
        ).style.display = "none";


        // Paparkan laman SerenityMind
        document.getElementById(
            "websiteContent"
        ).style.display = "block";


        // Simpan akses untuk sesi semasa
        sessionStorage.setItem(
            "serenityMindAccess",
            "granted"
        );


    } else {

        error.textContent =
            "❌ Kata laluan tidak betul. Sila cuba lagi.";

        document.getElementById(
            "passwordInput"
        ).value = "";

    }

}


// ========================================
// TEKAN ENTER UNTUK LOGIN
// ========================================

document
    .getElementById("passwordInput")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            checkPassword();

        }

    });


// ========================================
// SEMAK AKSES SEBELUM INI
// ========================================

window.addEventListener("load", function() {

    const access =
        sessionStorage.getItem(
            "serenityMindAccess"
        );


    if (access === "granted") {

        document.getElementById(
            "passwordScreen"
        ).style.display = "none";


        document.getElementById(
            "websiteContent"
        ).style.display = "block";

    }

});


// ========================================
// BUTANG MULAKAN SESI
// ========================================

function startSession() {

    document.getElementById(
        "hipnoterapi"
    ).scrollIntoView({
        behavior: "smooth"
    });

}
function startSession() {
    alert("Selamat datang ke SerenityMind 🌿\nSemoga sesi relaksasi anda memberi ketenangan dan kesejahteraan.");
}
