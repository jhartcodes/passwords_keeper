$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users/users"
  }).done((users) => {
    const $passwordtable = $('#passwordtable')
    $passwordtable.empty()
    for (user of users.users) {

      const $passwords = $('<tr>').addClass('passwords')
      const $password = $('<td>').addClass('password').text(user.password)
      const $username = $('<td>').addClass('encrypted_password').text(user.username)
      const $type = $('<td>').addClass('encrypted_password').text(user.type)
      const $url = $('<a>').attr("href", `https://${user.url}`).addClass('url').text(user.url)
      $passwordtable.prepend($passwords)
      $passwords.append($username, $password, $url, $type)
    }
  });







});




