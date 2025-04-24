// Product gallery thumbnail click to swap main image
function setupProductGallery() {
    const gallery = document.querySelector('.ftm-product-gallery');
    if (!gallery) return;
    const mainImg = gallery.querySelector('.main-img');
    const thumbs = gallery.querySelectorAll('.thumb');
    thumbs.forEach(thumb => {
        thumb.addEventListener('click', function() {
            mainImg.src = this.src;
            mainImg.alt = this.alt;
            thumbs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

document.addEventListener('DOMContentLoaded', setupProductGallery);
