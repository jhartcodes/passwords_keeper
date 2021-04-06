$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users/users"
  }).done((users) => {
    console.log(users)
    const $passwordtable=$('#passwordtable')
    $passwordtable.empty()
    for(user of users.users) {

      console.log(user)
      const $passwords = $('<tr>').addClass('passwords')
      const $password = $('<td>').addClass('password').text(user.password)
      const $encrypted_password = $('<td>').addClass('encrypted_password').text(user.encrypted_password)
      const $url = $('<a>').attr("href",`https://${user.url}`).addClass('url').text(user.url)
      $passwordtable.append($passwords)
      $passwords.append($password,$encrypted_password,$url)
    }
  });





  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
});



});




