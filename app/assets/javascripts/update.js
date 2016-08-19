$( document ).ready(function() {

  function updateIdea(id, params){
    $.ajax({
      method: "PATCH",
      url: "/ideas/" + id,
      data: { id: id, idea: params },
      success: function(){console.log("idea updated");}
    });
  }

  $("#table-body").on('blur', '.idea-title', function(){
    var tableRow = this.closest('tr');
    var ideaId = $(tableRow).data('id');
    var updatedTitle = $(this).text();
    updateIdea(ideaId, { title: updatedTitle });
  });

  $("#table-body").on('blur', '.idea-body', function(){
    var tableRow = this.closest('tr');
    var ideaId = $(tableRow).data('id');
    var updatedBody = $(this).text();
    updateIdea(ideaId, { body: updatedBody });
  });

});
