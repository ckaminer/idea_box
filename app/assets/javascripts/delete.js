$( document ).ready(function() {

  $("#table-body").on('click', '#delete-button', function(){
    var tableRow = this.closest('tr');
    var ideaId = $(tableRow).data('id');
    $.ajax({
      method: "DELETE",
      url: "/ideas/" + ideaId,
      data: { id: ideaId},
      success: function(){
        tableRow.remove();
      }
    });
  });

});
