const postsEl = document.getElementById("posts");

async function getPosts() {
  const postResponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts/"
  );
  const posts = await postResponse.json();
  const filteredPosts = posts.filter((post) => post.userId == 1);

  //console.log(posts);
  //console.log(filteredPosts);
  filteredPosts.forEach((post) => {
    const div = document.createElement("div");
    console.log(div);
    div.setAttribute("class", "post");
    div.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
    //lägger till den på sidan index.html
    postsEl.appendChild(div);
  })
}

console.log(getPosts());
