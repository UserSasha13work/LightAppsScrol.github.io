jQuery(function($) {
    window.addEventListener('load', () => { 
    $('#preloader').fadeOut(2000);
  })

    

    hover_btn2($('.f_lot'),$('.t_lot'))
    

function hover_btn2(f_lot, t_lot) {

$(document).ready(function(){
$(".btn_sec2").hover(function(){
 console.log("tut");

 f_lot.css("display", "none");
 t_lot.css("display", "block");
}, function(){
    f_lot.css("display", "block");
    t_lot.css("display", "none");
});
});



} 
});