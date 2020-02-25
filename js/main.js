const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');
    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    $nav1 = $('.nav1');
    $toggleCollapse1 = $('.toggle-collapse1');
    /** click event on toggle menu */
    $toggleCollapse1.click(function () {
        $nav1.toggleClass('collapse1');
    })

    
    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 2500,
        dots: true,
        nav: false,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

    // click to scroll top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();

});

//OTHER CODE FOR EFFECTS IN MODAL
// document.getElementById('modalBtn').addEventListener('click', function () {
//     document.querySelector('.modal').style.display = 'block';
// });

// document.querySelector('.closeBtn').addEventListener('click', function () {
//     document.querySelector('.modal').style.display = 'none';
// });

// document.querySelector('.closeBtn').addEventListener('click', function () {
//     document.querySelector('.modal').style.display = 'none';
// });


var modal = document.getElementsByClassName('modal')[0];
var modalBtn = document.getElementsByClassName('post-btn')[0];
var closeBtn = document.getElementsByClassName('closeBtn')[0];

var modal1 = document.getElementsByClassName('modal')[1];
var modalBtn1 = document.getElementsByClassName('post-btn')[1];
var closeBtn1 = document.getElementsByClassName('closeBtn')[1];

var modal2 = document.getElementsByClassName('modal')[2];
var modalBtn2 = document.getElementsByClassName('post-btn')[2];
var closeBtn2 = document.getElementsByClassName('closeBtn')[2];

var modal3 = document.getElementsByClassName('modal')[3];
var modalBtn3 = document.getElementsByClassName('post-btn')[3];
var closeBtn3 = document.getElementsByClassName('closeBtn')[3];


modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

modalBtn1.addEventListener('click', openModal1);
closeBtn1.addEventListener('click', closeModal1);
window.addEventListener('click', outsideClick1);

modalBtn2.addEventListener('click', openModal2);
closeBtn2.addEventListener('click', closeModal2);
window.addEventListener('click', outsideClick2);

modalBtn3.addEventListener('click', openModal3);
closeBtn3.addEventListener('click', closeModal3);
window.addEventListener('click', outsideClick3);


function openModal() {
    modal.style.display = 'block';
}
// Close
function closeModal() {
    modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}
/////////////////////////////////////////////
function openModal1() {
    modal1.style.display = 'block';
}
// Close
function closeModal1() {
    modal1.style.display = 'none';
}
// Close If Outside Click
function outsideClick1(e) {
    if (e.target == modal1) {
        modal1.style.display = 'none';
    }
}
/////////////////////////////////////////////
function openModal2() {
    modal2.style.display = 'block';
}
// Close
function closeModal2() {
    modal2.style.display = 'none';
}
// Close If Outside Click
function outsideClick2(e) {
    if (e.target == modal2) {
        modal2.style.display = 'none';
    }
}

/////////////////////////////////////////////
function openModal3() {
    modal3.style.display = 'block';
}

// Close
function closeModal3() {
    modal3.style.display = 'none';
}
// Close If Outside Click
function outsideClick3(e) {
    if (e.target == modal3) {
        modal3.style.display = 'none';
    }
}

