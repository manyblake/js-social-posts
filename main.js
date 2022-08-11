const likedPosts = [];

const posts = [
  {
    id: 1,
    content: `Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.`,
    media: `https://unsplash.it/600/300?image=171`,
    author: {
      name: `Phil Mangione`,
      image: `https://unsplash.it/300/300?image=15`,
    },
    likes: 80,
    created: `2021-06-25`,
  },
  {
    id: 2,
    content: `Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.`,
    media: `https://unsplash.it/600/400?image=112`,
    author: {
      name: `Sofia Perlari`,
      image: `https://unsplash.it/300/300?image=10`,
    },
    likes: 120,
    created: `2021-09-03`,
  },
  {
    id: 3,
    content: `Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.`,
    media: `https://unsplash.it/600/400?image=234`,
    author: {
      name: `Chiara Passaro`,
      image: `https://unsplash.it/300/300?image=20`,
    },
    likes: 78,
    created: `2021-05-15`,
  },
  {
    id: 4,
    content: `Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.`,
    media: `https://unsplash.it/600/400?image=24`,
    author: {
      name: `Luca Formicola`,
      image: null,
    },
    likes: 56,
    created: `2021-04-03`,
  },
  {
    id: 5,
    content: `Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.`,
    media: `https://unsplash.it/600/400?image=534`,
    author: {
      name: `Alessandro Sainato`,
      image: `https://unsplash.it/300/300?image=29`,
    },
    likes: 95,
    created: `2021-03-05`,
  },
];

const postsList = document.querySelector(`.posts-list`);

for (let i = 0; i < posts.length; i++) {
  const post = document.createElement(`div`);
  post.className = `post`;
  postsList.appendChild(post);

  const postHeader = document.createElement(`div`);
  postHeader.className = `post__header`;
  post.appendChild(postHeader);

  const postMeta = document.createElement(`div`);
  postMeta.className = `post-meta`;
  postHeader.appendChild(postMeta);

  const postMetaIcon = document.createElement(`div`);
  postMetaIcon.className = `post-meta__icon`;
  postMeta.appendChild(postMetaIcon);

  const profilePic = document.createElement(`img`);
  profilePic.className = `profile-pic`;
  profilePic.src = posts[i].author.image;
  profilePic.alt = posts[i].author.name;
  if (posts[i].author.image === null)
    profilePic.src = `https://i0.wp.com/www.baytekent.com/wp-content/uploads/2016/12/facebook-default-no-profile-pic1.jpg?ssl=1`;
  postMetaIcon.appendChild(profilePic);

  const postMetaData = document.createElement(`div`);
  postMetaData.className = `post-meta__data`;
  postMeta.appendChild(postMetaData);

  const postMetaAuthor = document.createElement(`div`);
  postMetaAuthor.className = `post-meta__author`;
  postMetaAuthor.innerHTML = posts[i].author.name;
  postMetaData.appendChild(postMetaAuthor);

  const postMetaTime = document.createElement(`div`);
  postMetaTime.className = `post-meta__time`;
  const date = posts[i].created.split(`-`).reverse();
  postMetaTime.innerHTML = `${date[0]} / ${date[1]} / ${date[2]}`;
  postMetaData.appendChild(postMetaTime);

  const postText = document.createElement(`div`);
  postText.className = `post__text`;
  postText.innerHTML = posts[i].content;
  post.appendChild(postText);

  const postImage = document.createElement(`div`);
  postImage.className = `post__image`;
  post.appendChild(postImage);

  const img = document.createElement(`img`);
  img.src = posts[i].media;
  postImage.appendChild(img);

  const postFooter = document.createElement(`div`);
  postFooter.className = `post__footer`;
  post.appendChild(postFooter);

  const likes = document.createElement(`div`);
  likes.className = `likes`;
  likes.classList.add(`js-likes`);
  postFooter.appendChild(likes);

  const likesCTA = document.createElement(`div`);
  likesCTA.className = `likes__cta`;
  likes.appendChild(likesCTA);

  const likeButton = document.createElement(`a`);
  likeButton.className = `like-button`;
  likeButton.classList.add(`js-like-button`);
  likeButton.setAttribute(`data-postid`, [i + 1]);
  likesCTA.appendChild(likeButton);
  likeButton.addEventListener(`click`, like);

  const likeButtonIcon = document.createElement(`i`);
  likeButtonIcon.className = `like-button__icon`;
  likeButtonIcon.classList.add(`fas`, `fa-thumbs-up`);
  likeButtonIcon.ariaHidden = `true`;
  likeButton.appendChild(likeButtonIcon);

  const likeButtonLabel = document.createElement(`span`);
  likeButtonLabel.className = `like-button__label`;
  likeButtonLabel.innerHTML = ` Mi Piace`;
  likeButton.appendChild(likeButtonLabel);

  const likesCounter = document.createElement(`div`);
  likesCounter.className = `likes__counter`;
  likesCounter.innerHTML = `Piace a `;
  likes.appendChild(likesCounter);

  const likeCounter = document.createElement(`b`);
  likeCounter.setAttribute(`id`, `like-counter-${i + 1}`);
  likeCounter.className = `js-likes-counter`;
  likeCounter.innerHTML = posts[i].likes;
  likesCounter.appendChild(likeCounter);
  likesCounter.innerHTML += ` persone`;
}

function like() {
  this.classList.toggle(`like-button--liked`);
  const arrayPosition = this.dataset.postid - 1;
  if (this.classList.contains(`like-button--liked`)) {
    posts[arrayPosition].likes++;
  } else {
    posts[arrayPosition].likes--;
  }
  const likes = document.getElementById(`like-counter-${arrayPosition + 1}`);
  likes.innerHTML = posts[arrayPosition].likes;
  likedPosts.push(arrayPosition + 1);
}
