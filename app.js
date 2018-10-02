// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    $(".check").hide()
       $("#eggplant").click(()=>{
      // click event
      console.log("click")
       $(".ingredient").toggle(
            $(".check").hide())
      // $(this).flip()
    })
       $(".icon").click(()=>{
      // click event
      console.log("click")
       $(".ingredient").toggle(
            $(".check").hide())
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
