$(".button").click(function(){
    let srcImg = ($('.zdj').attr("src") === "przed.png")
                ? "po.png" 
                : "przed.png";
    let info = ($(".info").html() === "Przed")
                ? "Po" 
                : "Przed";
$(".photo").toggleClass("yellow-background") ;
$(".info").html(info)               
 $(".zdj").attr('src',srcImg )  ; 
})