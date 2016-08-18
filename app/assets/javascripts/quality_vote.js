$( document ).ready(function() {
  var qualityLookup = ["swill", "plausible", "genius"];

  function updateQuality(id, newQuality){
    $.ajax({
      method: "PATCH",
      url: "/ideas/" + id,
      data: { id: id, idea: {quality: newQuality} },
      success: function(){
        var id = this.success.arguments[0].id;
        $("#idea-" + id + " #quality").text(newQuality);
        this.closest('tr').querySelector("#quality").text(newQuality);
      }
    });
  }

  $("#table-body").on('click', '#upvote-button', function(){
    var tableRow = this.closest('tr');
    var ideaId = $(tableRow).data('id');
    var qualityString =  this.closest('tr').querySelector("#quality").textContent;
    var qualityIndex = qualityLookup.indexOf(qualityString);
    if (qualityIndex !== qualityLookup.length - 1) {
      var newQuality = qualityLookup[qualityIndex + 1];
      updateQuality(ideaId, newQuality);
    }
  });

  $("#table-body").on('click', '#downvote-button', function(){
    var tableRow = this.closest('tr');
    var ideaId = $(tableRow).data('id');
    var qualityString =  this.closest('tr').querySelector("#quality").textContent;
    var qualityIndex = qualityLookup.indexOf(qualityString);
    if (qualityIndex !== 0) {
      var newQuality = qualityLookup[qualityIndex - 1];
      updateQuality(ideaId, newQuality);
    }
  });

});
