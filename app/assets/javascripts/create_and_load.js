$( document ).ready(function() {

  function prependIdea(idea){
    var id = idea.id;
      $("#table-body").prepend("<tr class='idea' id='" + id + "'" + ">" +
        "<td class='idea-title' contenteditable='true'>" + idea.title + "</td>"  +
        "<td class='idea-body' contenteditable='true'>" + idea.body + "</td>" +
        "<td id='quality'>" + idea.quality + "</td>" +
        "<td><button class='btn btn-default' id='delete-button'>Delete</button></td>" +
        "<td><button class='btn btn-default' id='upvote-button'>Cash</button></td>" +
        "<td><button class='btn btn-default' id='downvote-button'>Beat</button></td>" +
      "</tr>" );
      $("#new-idea-title").val("");
      $("#new-idea-body").val("");
  }

  $.ajax({
    url: "/ideas",
    verb: "GET",
    dataType: "JSON",
    success: function(ideas){
      $("#table-body").html("");
      $(ideas).each(function(index, idea){
        prependIdea(idea);
      });
    },
    error: function(){
      alert("Ideas unable to load, please refresh to try again");
    }
  });

  $("#create-idea").on('click', function(){
    var ideaTitle = $("#new-idea-title").val();
    var ideaBody = $("#new-idea-body").val();
    $.ajax({
      method: "POST",
      url: "/ideas",
      dataType: "JSON",
      data: { idea: {title: ideaTitle, body: ideaBody} },
      success: prependIdea
    });
  });

});
