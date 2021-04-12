
$(() => {


  $.ajax({
    method: "GET",
    url: "/My Password/social"
  }).done((res) => {
    const $passwordtable=$('#passwordtable')
    console.log("res",res)
    for( social of res.social) {

      const $password = $('<td>').addClass('social_password').text(social.password)
      const $encrypted_password= $('<td>').addClass('social_encrypted_password').text(social.encrypted_password)

      const $url = $('<td>').addClass('social.url').text(social.url)

      $passwordtable.prepend($social)
      $social.append($password,$encrypted_password,$url)

    }
  });


});

