
$(() => {
  // $('.errors').hide();
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
    //make request to delete handler and then remove table row// done on 116-118?
  }




  $.ajax({
    method: "GET",
    url: "/organization/peach"
  }).done((res) => {
    const $peachtable=$('#peachtable')
    console.log("res",res)
    for( peach of res.peach) {
      const $peach = $('<tr>').addClass('peach')
      // const $id = $('<td>').addClass('peach_id').text(peach.id)
      const $department = $('<td>').addClass('peach_department').text(peach.department)
      const $name = $('<td>').addClass('peach_name').text(peach.name)
      const $password = $('<td>').addClass('peach_password').text(peach.password)
      const $startDate= $('<td>').addClass('peach_startDate').text(moment(peach.start_date).format('LL'))

      const $email = $('<td>').addClass('peach_email').text(peach.email)
      const $delete = $('<td>')
      const $deleteButton = $('<button>').addClass('delete_button').text('delete').on("click",function(event){
        deleteEmployee(employee.id)
        .then(()=> {
          $peach.remove()
        })
        .catch((error) => {
          throw error;
        });

      });

      $delete.append($deleteButton)
      $peachtable.prepend($peach)
      $peach.append($name,$email,$password,$department,$startDate,$delete)

    }
  });






});

