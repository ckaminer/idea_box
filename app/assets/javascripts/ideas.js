$( document ).ready(function() {

  function prependIdea(idea){
      $("#table-body").prepend("<tr>" +
      "<td>" + idea.title + "</td>"  +
      "<td>" + idea.body + "</td>" +
      "<td>" + idea.quality + "</td>" + "</tr>");
      $("#idea-title").val("");
      $("#idea-body").val("");
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
    var ideaTitle = $("#idea-title").val();
    var ideaBody = $("#idea-body").val();
    $.ajax({
      method: "POST",
      url: "/ideas",
      dataType: "JSON",
      data: { idea: {title: ideaTitle, body: ideaBody} },
      success: prependIdea
    });
  });

});
