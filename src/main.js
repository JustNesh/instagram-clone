const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "./src/images/avatar-vangogh.jpg",
        post: "./src/images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "./src/images/avatar-courbet.jpg",
        post: "./src/images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "./src/images/avatar-ducreux.jpg",
        post: "./src/images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainEl = document.querySelector("main");

const post = {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "./src/images/avatar-vangogh.jpg",
    post: "./src/images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21
}

const displayPost = (post) =>{
  let newPost = `
    <section class="container post">
        <header class="post-header">
          <img class="poster-profile-pic" alt="" src="${post.avatar}"/>
          <div class="column inner-post-header">
            <h2>${post.name}</h2>
            <h3>${post.location}</h3>
          </div>
        </header>
        <img class="post-img" alt="User Post" src="${post.post}"/>
        <div class="actions">
          <img role="button" tabindex="0" class="like" src="./src/images/heart-icon-2.svg" class="icon"/>
          <img role="button" tabindex="0" class="comment" src="./src//images/icon-comment.png" class="icon"/>
          <img role="button" tabindex="0" class="message" src="./src/images/icon-dm.png" class="icon"/>
        </div>
        <div class="post-info">
          <h4 class="likes"><span>${post.likes}</span> likes</h4>
          <div class="inner-post-container">
            <h4 class="username">${post.username}</h4>
            <p>${post.comment}</p>
          </div>
        </div>
      </section>
  `
  mainEl.innerHTML+=newPost;
}

for (let i=0; i<posts.length; i++){
  displayPost(posts[i])
}