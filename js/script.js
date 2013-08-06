$(document).ready(function(){
  var pegs = [[], [], []];
  var source = [];
  var destination = [];
  var selecting = true;

  var initialize = function(){
    pegs = [[1, 2, 3, 4], [], []];
    selection = true;
    draw_values();
  }

  $('body').on("click", function(event){
    tower = event.target.id.toString();
    if (tower == "peg_0"){
      selecting ? source = pegs[0] : destination = pegs[0];
    } else if (tower == "peg_1"){
      selecting ? source = pegs[1] : destination = pegs[1];
    } else if (tower == "peg_2"){
      selecting ? source = pegs[2] : destination = pegs[2];
    } else {
      //return;
    }

    if (!selecting) { 
      if (source[source.length-1] > destination[destination.length-1] || destination.length == 0) {
        destination.push(source.pop());
        draw_values();
      }
      $('#selected').empty();
    } else {
      $('#selected').empty().append(source[source.length-1]);
    }
    selecting = !selecting;
  });


  var draw_values = function(){
    for (var j = 0; j < pegs.length; ++j){
      $('#peg_'+j).empty();
      for (var i = 0; i < pegs[j].length; ++i){
        $('#peg_'+j).prepend(pegs[j][i]);
        $('#peg_'+j).prepend('<br>');
      }
    }
  }


  initialize();
});
