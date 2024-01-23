let list_Home=$(".optionBox ").outerWidth();
$(document).ready(function(){
    $('.optionBox').animate({left:`-${list_Home}`},10,function(){
    $('#loading').fadeOut(1000 ,()=>{
        $('body').css("overflow","auto")
       });
    $(window).scrollTop(0) ;
    });
    
   
})
let about=$('#about').offset().top;
$('#ToggleBtn').click(function(){
     $('.optionBox ').animate({left:`0px`},1000); 
     $('#ToggleBtn,.home-info   ').animate({marginLeft:`${list_Home}`},1000)
})
$('#closebtn').click(function(){
    $('.optionBox').animate({left:`-${list_Home}`},1000);
    $('#ToggleBtn ,.home-info').animate({marginLeft:`0px`},1000)
})
$(window).scroll( function(){
    let Wscroll=$(window).scrollTop();
    if(Wscroll>about+10){
    $(".optionBox ").css("backgroundColor","rgba(0, 0, 0, 0.3)");
 }
 else{
    $(".optionBox ").css("backgroundColor","black");
 }
    
})
$('.singer').click(function(){
    $('#one, .paragraph').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
})

 let counter= (  "21 january 2025 11:56:00");
let counter2=setInterval( function counterdown( ){
let countDate=new Date(counter);
countDate=(countDate.getTime());
let countHere=new Date().getTime();
countchages=(countDate-countHere);
let day=Math.floor(countchages/(1000*24*60*60));
let hour=Math.floor((countchages%(1000*(24*60*60)))/(1000*3600));
let min=Math.floor((countchages %(1000*3600))/(1000*60));
let sec=Math.floor((countchages%(1000*60))/1000);
$('.day').html(`${day}`);
$('.hour').html(`${hour}`);
$('.min').html(`${min}`);
$('.sec').html(`${sec}`);
if(countchages<=0){
    $("#count").html('<h1 class=" text-danger text-center">Timed out</h1>')
}
},1000)
let v=100;
$('textarea').keyup(function(){
    let cout=$(this).val().length;
let massage=v-cout;
if(massage<=0){
$('#Massage2').html(`<span class=" text-danger ">your available character finished</span>`)}
else{$('#Massag').text(massage)}
})