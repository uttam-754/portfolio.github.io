
$(document).ready(function(){

    $(window).scroll(function(){
        if(this.scrollY >40){
            $(".navbar").addClass("sticky");
            $('.goto').fadeIn();
        }else{
            $(".navbar").removeClass("sticky");
            $('.goto').fadeOut();
        }
    })

$(".toggler").click(function(){
   $(this).toggleClass("active")
   $(".menu").toggleClass("active")
})

var typed = new Typed(".typing", {
    strings: ["Developer", "Programmer", "Cyberpunk", "Systems Analyst", "Freelancer", "Tester" ],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true
});
$('.goto').click(function(){
    $('html, body').animate({scrollTop: 0}, 800);
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        
    }
})


})