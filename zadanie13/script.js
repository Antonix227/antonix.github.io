$(".button").click(function(){
    let srcImg = ($('.zdj').attr("src") === "przed.png")
                ? "po.png" 
                : "przed.png";
$(".photo").toggleClass("yellow-background") ;               
 $(".zdj").attr('src',srcImg )  ; 
})