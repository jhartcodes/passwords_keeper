$(() => {
  $.ajax({
    method: "GET",
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
    }
  });;
});

