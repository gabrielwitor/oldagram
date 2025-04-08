const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

posts.forEach(post => {
    document.getElementById("posts").innerHTML+=
    `
    <div class="container">
        <section id="post-${posts.indexOf(post)}" class="post">
            <div class="user-info">
                <img src="${post.avatar}" alt="" class="profile-picture">
                <div class="text-content">
                    <h2 class="big-text bold-text">${post.name}</h2>
                    <p class="small-text">${post.location}</p>
                </div>
            </div>
            <img src="${post.post}" alt="" class="post-image">
            <div class="post-info">
                <ul>
                    <li><button onclick="like('post-${posts.indexOf(post)}-likes')" class="icon-btn"><img src="images/icon-heart.png" alt="" class="icon"></button></li>
                    <li><img src="images/icon-comment.png" alt="" class="icon"></li>
                    <li><img src="images/icon-dm.png" alt="" class="icon"></li>
                </ul>
                <h3 class="bold-text big-text" id="post-${posts.indexOf(post)}-likes">${post.likes} likes</h3>
                <p class="small-text"><span class="bold-text">${post.username}</span> ${post.comment}</p>
            </div>
        </section>
    </div>`
});

function like(id, likes){
    document.getElementById(id).textContent = (Number(document.getElementById(id).textContent.split(' ')[0]) + 1 + " likes");
}