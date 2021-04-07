// const {checkPasswordStrength} = require('./password-strength.js');
//example from tweeter to be updated that will render data from the db to the business page.\



//ajax requests
const createEmployeeElement = (data) => {
  let newHtml =`<tr>
  <td class="cell100 column1">${data.first}</td>
  <td class="cell100 column2">${data.last}</td>
  <td class="cell100 column3">${data.department}</td>
  <td class="cell100 column4">${moment(data.start_date).format('LL')}</td>
  <td class="cell100 column5">${data.email}</td>
  <td class="cell100 column6">${data.password}</td>
  <td class="cell100 column7">${data.secure_pass}</td>
  <td class="cell100 column8">${data.active}</td>
</tr>`
return newHtml;

};


const renderEmployees = function(employees) {
  $(".employees").empty();
  for (const employee of employees) {
    let $temp = createEmployeeElement(employee);
    $(".employees").prepend($temp);
  }
};


//request to get all employees
function getAllEmployees() {
  let url = "/employees/all";
  return $.ajax({
    url,
  })
  .then(data => {
    renderEmployees(data.employees)
  })
  .catch((err) => {
    console.log(err)
  })
}

// const delteEmployee = function(data) {
//   return $.ajax({
//     method: "DELETE",
//     url: "/employees",
//     data,
//   });
// }

const addEmployee = function(data) {
  return $.ajax({
    method: "POST",
    url: "/api/employees",
    data,
  });
}

$(document).ready(function() {
  // $('.errors').hide();
  console.log('documents ready!')

  $('#password').keyup(function(event) {
    let password = $('#password').val();
    console.log('password', password)
    checkPasswordStrength(password);

  });
// // //form handler
// $("form").on("submit",function(event) {
//   event.preventDefault();
//   if ($(".password").val() = (^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$ {
//     $(".errors").html('Ooops! the Password must be atleast 8 characters long with 1 capital and 1 special character ');
//     return $('.errors').hide().slideDown(400);
//   } else



  getAllEmployees()
});




//for ajax function to show users.
