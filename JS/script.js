$(document).ready(function () {
    // Fungsi untuk memuat konten halaman
    function loadPage(page) {
        $("#content").load(page);
    }

    // Navigasi
    $(".nav-link").on("click", function (e) {
        e.preventDefault();
        // Sesuaikan dengan nama file HTML yang sesuai dengan nama section di navigasi
        var targetPage = $(this).attr("href").substring(1) + ".html";
        loadPage(targetPage);
    });


    // Tambahkan event listener untuk tombol "Selengkapnya"
    $(".selengkapnya-btn").on("click", function (e) {
        e.preventDefault();
        console.log("Tombol Selengkapnya diklik");
        // Ambil ID dari data-id atribut
        var sertifikatId = $(this).data("id");
        // Muat konten sertifikat sesuai dengan ID
        loadPage(sertifikatId + ".html");
    });
    
    $(".kembali-btn").on("click", function (e) {
        e.preventDefault();
        console.log("Tombol Kembali diklik");
        // Kembali ke halaman keahlian
        loadPage("skills.html");
    });

    // Muat halaman home saat pertama kali membuka situs
    loadPage("home.html");
});

// Fungsi untuk menampilkan atau menyembunyikan konten selengkapnya
function toggleDetails(cardId) {
    var detailsElement = document.getElementById(cardId + '-details');
    detailsElement.classList.toggle('d-none');
}

