$( document ).ready(function() {
  var qualityLookup = ["swill", "plausible", "genius"];

  function prependIdea(idea){
    var id = idea.id;
      $("#table-body").prepend("<tr id='" + id + "'" + ">" +
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

  $("#table-body").on('click', '#delete-button', function(){
    var tableRow = this.closest('tr');
    $.ajax({
      method: "DELETE",
      url: "/ideas/" + tableRow.id,
      data: { id: tableRow.id},
      success: function(){
        tableRow.remove();
      }
    });
  });

  $("#table-body").on('click', '#upvote-button', function(){
    var tableRow = this.closest('tr');
    var qualityString =  this.closest('tr').querySelector("#quality").textContent;
    var qualityIndex = qualityLookup.indexOf(qualityString);
    if (qualityIndex !== qualityLookup.length - 1) {
      var newQuality = qualityLookup[qualityIndex + 1];
      $.ajax({
        method: "PATCH",
        url: "/ideas/" + tableRow.id,
        data: { id: tableRow.id, idea: {quality: newQuality} },
        success: function(){
          var id = this.success.arguments[0].id;
          $("#" + id + " #quality").text(newQuality);
          this.closest('tr').querySelector("#quality").text(newQuality);
        }
      });
    }
  });

  $("#table-body").on('click', '#downvote-button', function(){
    var tableRow = this.closest('tr');
    var qualityString =  this.closest('tr').querySelector("#quality").textContent;
    var qualityIndex = qualityLookup.indexOf(qualityString);
    if (qualityIndex !== 0) {
      var newQuality = qualityLookup[qualityIndex - 1];
      $.ajax({
        method: "PATCH",
        url: "/ideas/" + tableRow.id,
        data: { id: tableRow.id, idea: {quality: newQuality} },
        success: function(){
          var id = this.success.arguments[0].id;
          $("#" + id + " #quality").text(newQuality);
          this.closest('tr').querySelector("#quality").text(newQuality);
        }
      });
    }
  });

  $("#table-body").on('blur', '.idea-title', function(){
    var tableRow = this.closest('tr');
    var updatedTitle = $(this).text();
    $.ajax({
      method: "PATCH",
      url: "/ideas/" + tableRow.id,
      data: { id: tableRow.id, idea: { title: updatedTitle } },
      success: function(){console.log("title updated");}
    });
  });

  $("#table-body").on('blur', '.idea-body', function(){
    var tableRow = this.closest('tr');
    var updatedBody = $(this).text();
    $.ajax({
      method: "PATCH",
      url: "/ideas/" + tableRow.id,
      data: { id: tableRow.id, idea: { body: updatedBody } },
      success: function(){console.log("body updated");}
    });
  });

});
