
//example from tweeter to be updated that will render data from the db to the business page.\

//ajax requests
const createUsersElement = (data) => {
  let newHtml = ` <article class="tweet">
  <header>
    <div class="user">
      <img
        src="${escape(data.user.avatars)}"
        alt="">
    <p>${escape(data.user.name)}</p>
    </div>
    <h4>${escape(data.user.handle)}</h4>
  </header>
  <p>${escape(data.content.text)}</p>
  <footer>
  <span>${moment(data.created_at).fromNow()}</span>
    <div class="littleicon">
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </div>
  </footer>
</article>`;

  return newHtml;
};
