$(".v").hide();
$(".mv").hide();
$(".o").hide();
$(".E").hide();
$(".S").hide();
$(".shadow").hide();
$(".egg_man").hide();

$(" .sonic ").click(function() {
$(" .mario ").hide();
$("p").toggle();    
$(".mv").hide();
$(".o").hide();
$(".c").hide();    

$(".v").toggle();
   
});


$(" .mario ").click(function() {
$(" .sonic ").hide();
$("p").toggle();
$("o").toggle();
$("mv").toggle();    
$(".c").hide();
$(".E").hide();
$(".S").hide();    
$(".v").toggle();
});

$(".S").click(function(){
$(".E").hide();
$(".v").hide();  
$(".S").hide();    
$(".shadow").toggle();    
});  


$(".E").click(function(){
$(".S").hide();
$(".v").hide();  
$(".E").hide();    
$(".egg_man").toggle();    
});    