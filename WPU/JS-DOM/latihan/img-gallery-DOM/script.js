const heroImg = document.querySelector('.hero-img');
const thumbs = document.querySelectorAll('.thumb');
const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
    // cek apkh yg di klik adlah thumb
    if(e.target.className == 'thumb') {
        
        heroImg.src = e.target.src;
        heroImg.classList.add('fade');

        setTimeout(function() {
            heroImg.classList.remove('fade');
        }, 500);

        thumbs.forEach(function(thumb) {
            // if(thumb.classList.contains('active')){
            //     thumb.classList.remove('active');
            // }

            thumb.className ='thumb';
        });
    
        e.target.classList.add('active');
    }

});