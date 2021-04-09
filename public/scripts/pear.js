
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
    url: "/organization/pear"
  }).done((res) => {
    const $peartable=$('#peartable')
    console.log("res",res)
    for( pear of res.pear) {
      const $pear = $('<tr>').addClass('pear')
      const $department = $('<td>').addClass('pear_department').text(pear.department)
      const $name = $('<td>').addClass('pear_name').text(pear.name)
      const $password = $('<td>').addClass('pear_password').text(pear.password)
      const $startDate= $('<td>').addClass('pear_startDate').text(moment(pear.start_date).format('LL'))

      const $email = $('<td>').addClass('pear_email').text(pear.email)
      const $delete = $('<td>')
      const $deleteButton = $('<button>').addClass('delete_button').text('delete').on("click",function(event){
        deleteEmployee(employee.id)
        .then(()=> {
          $pear.remove()
        })
        .catch((error) => {
          throw error;
        });

      });
      $delete.append($deleteButton)
      $peartable.prepend($pear)
      $pear.append($name,$email,$password,$department,$startDate,$delete)

    }
  });

  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
  });

});

