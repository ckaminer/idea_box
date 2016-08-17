$( document ).ready(function() {

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

});
