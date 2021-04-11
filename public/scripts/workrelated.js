
$(() => {


  $.ajax({
    method: "GET",
    url: "/My Password/workrelated"
  }).done((res) => {
    const $passwordtable1=$('#passwordtable1')
    console.log("res",res)
    for( workrelated of res.workrelated) {

      const $password = $('<td>').addClass('workrelated_password').text(workrelated.password)
      const $encrypted_password= $('<td>').addClass('workrelated_encrypted_password').text(workrelated.encrypted_password)

      const $url = $('<td>').addClass('workrelated.url').text(workrelated.url)

      $passwordtable1.prepend($workrelated)
      $workrelated.append($password,$encrypted_password,$url)

    }
  });


});
