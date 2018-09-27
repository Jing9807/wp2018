// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    $(".check").hide()
    $(".ingredient#eggplant").click(()=>{
      // click event
      console.log("click")
      $(".check").toggle()
    })
});
