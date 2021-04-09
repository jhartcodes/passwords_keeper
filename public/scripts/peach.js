// const {checkPasswordStrength} = require('./password-strength.js');
//example from tweeter to be updated that will render data from the db to the business page.\





//ajax requests
// const createpeachElement = (data) => {
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


// const renderpeachs = function(peachs) {
//   $(".peachs").empty();
//   for (const peach of peachs) {
//     let $temp = createpeachElement(peach);
//     $(".peachs").prepend($temp);
//   }
// };


//request to get all peachs
// function getAllpeachs() {
//   let url = "/peachs/all";
//   return $.ajax({
//     url,
//   })
//   .then(data => {
//     renderpeachs(data.peachs)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// }

// const deletepeach = function(data) {
//   return $.ajax({
//     method: "DELETE",
//     url: "/peachs",
//     data,
//   });
// }





$(() => {
  // $('.errors').hide();
  console.log('documents ready!')


  // //form handler to
  // $("form").on("submit",function(event) {
  // event.preventDefault();
  // if ($(".password").val() = ^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*/g)  ) {
  //   $(".errors").html('Ooops! the Password must be atleast 8 characters long with 1 capital and 1 special character ');
  //   return $('.errors').hide().slideDown(400);
  // }
  // else {
  //   getAllpeachs()
  // }

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
    url: "/peach/sth"
  }).done((res) => {
    const $peachtable=$('#peachtable')
    console.log("res",res)
    for( peach of res.peach) {
      console.log("^^^^^^^",peach)
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
      // $("<div>").text(JSON.stringify(peach)).appendTo($("body"))

    }
  });



  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
  });


});

