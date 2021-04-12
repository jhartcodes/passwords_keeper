




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
    checkPasswordStrength(password);

  });

  function deleteEmployee (id) {
    return new Promise((resolve, reject)=>{
      $.ajax({
        type: "POST",
        url: `/employees/delete/${id}`,
        success: function(res){
          resolve(res)
        },
        error: function(a,b){
          reject()
        }
      });
    })
    //make request to delete handler and then remove table row// done on 116-118?
  }




  $.ajax({
    method: "GET",
    url: "/employees/all"
  }).done((res) => {
    const $employeetable=$('#employeetable')
    for( employee of res.employees) {
      const $employee = $('<tr>').addClass('employee')
      // const $id = $('<td>').addClass('employee_id').text(employee.id)
      const $deparment = $('<td>').addClass('employee_department').text(employee.department)
      const $first = $('<td>').addClass('employee_firstname').text(employee.first)
      const $last = $('<td>').addClass('employee_lastname').text(employee.last)
      const $password = $('<td>').addClass('employee_password').text(employee.password)
      const $startDate= $('<td>').addClass('employee_startDate').text(moment(employee.start_date).format('LL'))
      const $organization = $('<td>').addClass('employee_organization').text(employee.organization_name)
      const $email = $('<td>').addClass('employee_email').text(employee.email)
      const $delete = $('<td>')
      const $deleteButton = $('<button>').addClass('delete_button').text('delete').on("click",function(event){
        deleteEmployee(employee.id)
        .then(()=> {
          $employee.remove()
        })
        .catch((error) => {
          throw error;
        });

      });

      $delete.append($deleteButton)
      $employeetable.prepend($employee)
      $employee.append($last,$first,$email,$password,$deparment,$organization,$startDate,$delete)


    }
  });





});

