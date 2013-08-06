$(document).ready(function(){
  var peg1 = []
  var peg2 = []
  var peg3 = []

  var source
  var destination

  var selecting = true;
  

  var initialize = function(){
    peg1 = [1, 2, 3, 4]
    peg2 = []
    peg3 = []
    selection = true;
    draw_values();
  }

  $('body').on("click", function(event){
    tower = event.target.id.toString();
    if (selecting){ 
      if (tower == "peg_1"){
        source = peg1;
      } else if (tower == "peg_2"){
        source = peg2;
      } else if (tower == "peg_3"){
        source = peg3;
      } else {
        //return;
      }
      selecting = !selecting;
      console.log("Taking from" + source)
      $('#selected').empty().append(source[source.length-1])

    } else { 
      if (tower == "peg_1"){
        destination = peg1;
      } else if (tower == "peg_2"){
        destination = peg2;
      } else if (tower == "peg_3"){
        destination = peg3;
      } else {
        //;
      }

      if (source[source.length-1] > destination[destination.length-1] || destination.length == 0){
        console.log("Swapping");
        destination.push(source.pop());
        draw_values();
      }
      $('#selected').empty();
      selecting = !selecting;
    }
    
  });



  var draw_values = function(){
      $('#peg_1').empty();
      $('#peg_2').empty();
      $('#peg_3').empty();
      console.log(peg2);

    for (var i = 0; i < peg1.length ; ++i){
      $('#peg_1').prepend(peg1[i])
      $('#peg_1').prepend(',')
    }
    for (var i = 0; i < peg2.length; ++i){
      $('#peg_2').prepend(peg2[i])
      $('#peg_2').prepend(',')
    }
    for (var i = 0; i < peg3.length; ++i){
      $('#peg_3').prepend(peg3[i])
      $('#peg_3').prepend(',')
    }
  }


  initialize();
})
