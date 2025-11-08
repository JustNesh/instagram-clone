let posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "/images/avatar-vangogh.jpg",
        post: "/images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        userLiked: false,
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "/images/avatar-courbet.jpg",
        post: "/images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        userLiked: false,
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "/images/avatar-ducreux.jpg",
        post: "/images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        userLiked: false,
    },
        {
        name: "Benjamin Franklin",
        username: "Penjamin420",
        location: "idk somewhere over the rainbow or something",
        avatar: "https://tse3.mm.bing.net/th/id/OIP.50IRKlbiu8svY_jD1zC85gAAAA?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        post: "https://nails.newsela.com/s3/newsela-media/article_media/2016/12/primary-source-ben-franklin-kite-electricity-d21c2b12.jpg?crop=0,18,1366,787&height=498&horizontal_focal_point=center&vertical_focal_point=center&width=885",
        comment: "I seem to have casted Lightning Bolt",
        likes: 102,
        userLiked: false,
    }
]

const mainEl = document.querySelector("main");


const displayPost = () =>{ 
  for (let i=0; i<posts.length; i++){
    let newPost = `
      <section class="container post">
          <header class="post-header">
            <img class="poster-profile-pic" alt="" src="${posts[i].avatar}"/>
            <div class="column inner-post-header">
              <h2>${posts[i].name}</h2>
              <h3>${posts[i].location}</h3>
            </div>
          </header>
          <img class="post-img" id="post-img-${i}" alt="User Post" src="${posts[i].post}"/>
          <div class="actions">
            <div class="like drop-shadow" id="like-button-${i}"></div>
            <img role="button" tabindex="0" class="comment drop-shadow" src="/images/icon-comment.png" class="icon"/>
            <img role="button" tabindex="0" class="message drop-shadow" src="/images/icon-dm.png" class="icon"/>
          </div>
          <div class="post-info">
            <h4 class="likes"><span id="posts-likes-${i}">${posts[i].likes}</span> likes</h4>
              <h4 class="username">${posts[i].username} <span class="comment">${posts[i].comment}</span></h4>
          </div>
        </section>
    `
    mainEl.innerHTML+=newPost;
  }
}

const isPostLiked = (i) => posts[i].userLiked;

const handleLikeButton = (i) =>{
  const likesCountEl =document.getElementById(`posts-likes-${i}`);
  const likeButtonEl = document.getElementById(`like-button-${i}`);
  posts[i].userLiked = !posts[i].userLiked;

  // Styling options in this prevents any weird CSS side effects that cause the
  // image to be out of place.
  if(isPostLiked(i) === true){
    likeButtonEl.style.backgroundImage = "url(/images/red-heart-icon2.svg)"
      likeButtonEl.style.width = "45px";
      likeButtonEl.style.height = "45px";
      likeButtonEl.style.marginLeft = "0px";
      likeButtonEl.style.marginRight = "9px";
      likeButtonEl.parentElement.style.marginLeft = "-6.5px";    
    posts[i].likes+=1;
  } else {
        likeButtonEl.style.backgroundImage = "url(/images/icon-heart.png)"
      likeButtonEl.style.width = "33px";
      likeButtonEl.style.height = "33px";
      likeButtonEl.style.marginLeft = "0px";
      likeButtonEl.style.marginRight = "15px";    
      likeButtonEl.parentElement.style.marginLeft = "0px";
    posts[i].likes-=1;
  }
  likesCountEl.textContent = posts[i].likes;
}

const addEventListenerToPosts = () =>{
  for(let i=0; i<posts.length; i++){

    //Allows user to click the heart to like the post!
    const likeButtonEl = document.getElementById(`like-button-${i}`);
    likeButtonEl.addEventListener("click", () =>{
      handleLikeButton(i);
    })

    //Allows user to double click the post to like the post!
    const postImgEl = document.getElementById(`post-img-${i}`);
    postImgEl.addEventListener("dblclick", ()=>{
      handleLikeButton(i);
    })
  }
}

displayPost()
addEventListenerToPosts()