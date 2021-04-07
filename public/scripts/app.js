$(() => {
  $.ajax({
    method: "GET",
<<<<<<< HEAD
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
=======
    url: "/api/users"
  }).done((res) => {
    for(user of res.users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;
});

$(() => {
  $.ajax({
    method: "POST",
    url: "/api/employees"
  }).done((res) => {
    for(user of users.users) {
      console.log(user)
      $("<div>").text(user).appendTo($("body"));
    }
  });
});


//on.click() post will hit
//helper function to get the users.
//call the get
//append to 'class name'
$(() => {
  $.ajax({
    method: "POST",
    url: "/api/users"
  }).done((users) => {
    //get request to get all the passwords.
    //render them
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
>>>>>>> joel
    }
  });





  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
});

<<<<<<< HEAD


});




=======
>>>>>>> joel
