
//example from tweeter to be updated that will render data from the db to the business page.\



//ajax requests
const createEmployeeElement = (data) => {
  let newHtml =`<tr>
  <td class="cell100 column1">${data.first}</td>
  <td class="cell100 column2">${data.first}</td>
  <td class="cell100 column3">${data.first}</td>
  <td class="cell100 column4">${data.first}</td>
  <td class="cell100 column5">${data.first}</td>
  <td class="cell100 column6">${data.first}</td>
  <td class="cell100 column7">${data.first}</td>
  <td class="cell100 column8">${data.first}</td>
  <td class="cell100 column8">${data.first}</td>
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
    console.log('test......', data)
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
