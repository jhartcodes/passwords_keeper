
//example from tweeter to be updated that will render data from the db to the business page.\



//ajax requests
const createEmployeeElement = (data) => {
  let newHtml =`<tr>
  <td class="cell100 column1">${data.first}</td>
  <td class="cell100 column2">Green</td>
  <td class="cell100 column3">Engineering</td>
  <td class="cell100 column4">16 Nov 2012</td>
  <td class="cell100 column5">1 April 2021</td>
  <td class="cell100 column6">brandon94@axine.com</td>
  <td class="cell100 column7">Password!</td>
  <td class="cell100 column8">Secure_pass</td>
  <td class="cell100 column8">true</td>
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
    console.log('test', data)
    renderEmployees(data.employees)
  })
  .catch((err) => {
    console.log(err)
  })
}

// const addEmployee = function(data) {
//   return $.ajax({
//     method: "POST",
//     url: "/api/employees",
//     data,
//   });
// }

$(document).ready(function() {
  console.log('documents ready!')
  getAllEmployees()
});

//for ajax function to show users.
