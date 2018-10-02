// A $( document ).ready() block.
$( document ).ready(function() {
    $(".check").hide()
    $("img.icon").hide()

    $("#eggplant").click(()=>{
      // click event
      console.log("click")
       $(".ingredient").toggle()
      $(".check").hide()
        $("img.icon").toggle()
       $("#eggplant").hide()
      // $(this).flip()
    })
   $("img.icon").click(()=>{
      // click event
      console.log("click")
       $(".ingredient").toggle()
      $(".check").hide()
     $("#eggplant").toggle()
     $("img.icon").hide()
      // $(this).flip()
    })
    $(".ingredient#eggplant").click(()=>{
      // click event
      console.log("click")
       $(".check#check1").toggle()
      // $(this).flip()
    })
$(".ingredient#chili").click(()=>{
      // click event
      console.log("click")
         $(".check#check2").toggle()
    
})
$(".ingredient#garlic").click(()=>{
// click event
console.log("click")
   $(".check#check3").toggle()
})

});
