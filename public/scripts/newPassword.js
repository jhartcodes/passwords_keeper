$(() => {

  $("#passwordgenerate").fadeOut()

  $("#usersPassword").blur(function(){
    $("#passwordgenerate").fadeOut()
  })
  $("#usersPassword").focus(function() {
    $("#passwordgenerate").fadeIn()
  })
  $('#generate').click(function() {
    $("#passwordgenerate").fadeIn()
    $("#usersPassword").focus()
  })

});
