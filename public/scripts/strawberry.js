
$(() => {
  console.log('documents ready!')
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
  }

  $.ajax({
    method: "GET",
    url: "/organization/strawberry"
  }).done((res) => {
    const $strawberrytable=$('#strawberrytable')
    for( strawberry of res.strawberry) {
      const $strawberry = $('<tr>').addClass('strawberry')
      const $department = $('<td>').addClass('strawberry_department').text(strawberry.department)
      const $name = $('<td>').addClass('strawberry_name').text(strawberry.name)
      const $password = $('<td>').addClass('strawberry_password').text(strawberry.password)
      const $startDate= $('<td>').addClass('strawberry_startDate').text(moment(strawberry.start_date).format('LL'))

      const $email = $('<td>').addClass('strawberry_email').text(strawberry.email)
      const $delete = $('<td>')
      const $deleteButton = $('<button>').addClass('delete_button').text('delete').on("click",function(event){
        deleteEmployee(employee.id)
        .then(()=> {
          $strawberry.remove()
        })
        .catch((error) => {
          throw error;
        });

      });

      $delete.append($deleteButton)
      $strawberrytable.prepend($strawberry)
      $strawberry.append($name,$email,$password,$department,$startDate,$delete)

    }
  });

  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
  });

});

