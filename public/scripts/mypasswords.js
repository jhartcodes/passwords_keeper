$(() => {
  // $('.errors').hide();
  console.log('documents ready!')


  const addpasswords = function(data) {
    return $.ajax({
      method: "POST",
      url: "/mypasswords",
      data,
    });
  }
})
