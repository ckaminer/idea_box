$( document ).ready(function() {

  function addToTable(ideas){
    ideas.forEach(function(idea){
      $("#table-body").prepend("<tr>" +
      "<td>" + idea.title + "</td>"  +
      "<td>" + idea.body + "</td>" +
      "<td>" + idea.quality + "</td>" + "</tr>");
    });
  }

  $.ajax({
    url: "/ideas",
    verb: "GET",
    dataType: "JSON",
    success: function(ideas){
      addToTable(ideas);
    },
    error: function(){
      alert("Ideas unable to load, please refresh to try again");
    }
  });

});
