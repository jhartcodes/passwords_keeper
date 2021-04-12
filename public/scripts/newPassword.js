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


  $('#create').on('click',function() {

      const warning = $('<i>').addClass('fas fa-exclamation-triangle').text('Whooops!!! something wrong!')
      $('#warning').empty();
      $('#warning').append(warning).fadeIn();
      $('#warning').append(warning).fadeOut(5000)

  })




});
