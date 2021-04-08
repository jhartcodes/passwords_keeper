// const {checkPasswordStrength} = require('./password-strength.js');
//example from tweeter to be updated that will render data from the db to the business page.\




//ajax requests
// const createEmployeeElement = (data) => {
//   let newHtml =`<tr>
//   <td class="cell100 column1">${data.first}</td>
//   <td class="cell100 column2">${data.last}</td>
//   <td class="cell100 column3">${data.department}</td>
//   <td class="cell100 column4">${moment(data.start_date).format('LL')}</td>
//   <td class="cell100 column5">${data.email}</td>
//   <td class="cell100 column6">${data.password}</td>
//   <td class="cell100 column7">${data.secure_pass}</td>
//   <td class="cell100 column8">${data.active}</td>
// </tr>`
// return newHtml;

// };


// const renderEmployees = function(employees) {
//   $(".employees").empty();
//   for (const employee of employees) {
//     let $temp = createEmployeeElement(employee);
//     $(".employees").prepend($temp);
//   }
// };


//request to get all employees
// function getAllEmployees() {
//   let url = "/employees/all";
//   return $.ajax({
//     url,
//   })
//   .then(data => {
//     renderEmployees(data.employees)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// }

// const delteEmployee = function(data) {
//   return $.ajax({
//     method: "DELETE",
//     url: "/employees",
//     data,
//   });
// }





$(() => {
  // $('.errors').hide();
  console.log('documents ready!')

  const addEmployee = function(data) {
    return $.ajax({
      method: "POST",
      url: "/employees",
      data,
    });
  }


  $('#password').keyup(function(event) {
    let password = $('#password').val();
    console.log('password', password)
    checkPasswordStrength(password);

  });


  $.ajax({
    method: "GET",
    url: "/employees/all"
  }).done((res) => {
    console.log("^^")
    const $employeetable=$('#employeetable')
    console.log("res",res)
    for( employee of res.employees) {
      console.log(employee)
      const $employee = $('<tr>').addClass('employee')
      const $id = $('<td>').addClass('employee_id').text(employee.id)
      const $deparment = $('<td>').addClass('employee_department').text(employee.department)
      const $first = $('<td>').addClass('employee_firstname').text(employee.first)
      const $last = $('<td>').addClass('employee_lastname').text(employee.last)
      const $password = $('<td>').addClass('employee_password').text(employee.password)
      const $startDate= $('<td>').addClass('employee_startDate').text(moment(employee.start_date).format('LL'))
      $employeetable.append($employee)
      $employee.append($id,$deparment,$first,$last,$password,$startDate)
      // $("<div>").text(JSON.stringify(employee)).appendTo($("body"))

    }
  });



  getAllEmployees()
});




//for ajax function to show users.