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

    // Muat halaman home saat pertama kali membuka situs
    loadPage("home.html");
});

// Fungsi untuk menampilkan atau menyembunyikan konten selengkapnya
function toggleDetails(cardId) {
    var detailsElement = document.getElementById(cardId + '-details');
    detailsElement.classList.toggle('d-none');
}