var qualityArray = ["swill", "plausible", "genius"];
var descendingIdeas = false;

function indexLookup(quality){
  return qualityArray.indexOf(quality);
}

function toggleDescending(){
  if (descendingIdeas === false){
    descendingIdeas = true;
    return "descending";
  }
  else {
    descendingIdeas = false;
    return "ascending";
  }
}

$( document ).ready(function() {

  function descendingSort(direction){
    var $ideas = $('.idea');
    var sorted = $ideas.sort(function(a, b) {
        var aQuality = a.querySelector('#quality').textContent;
        var bQuality = b.querySelector('#quality').textContent;
        if (direction === "descending") {
          return indexLookup(bQuality) - indexLookup(aQuality);
        } else {
          return indexLookup(aQuality) - indexLookup(bQuality);
        }
    });
    displayInOrder(sorted);
  }


  function displayInOrder(sortedIdeas){
    sortedIds = sortedIdeas.map(function(index, idea){
      $("#table-body").append($(idea));
    });
  }

  $("html").on('click', '#quality-sort', function(){
    $("#table-body").val("");
    var order = toggleDescending();
    descendingSort(order);
  });

});
