
//example from tweeter to be updated that will render data from the db to the business page.\

//ajax requests

function getAllEmployees() {
  let url = "/api/business/";
  return $.ajax({
    url,
  });
}

const addEmployee = function(data) {
  return $.ajax({
    method: "POST",
    url: "/api/business",
    data,
  });
}


//for ajax function for users.
function getMyDetails() {
  console.log("getMyDetails");
  return $.ajax({
    url: "/users/me",
  });
}
