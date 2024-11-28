let postsArray = []
const titleInput = document.querySelector('#post-title')
const bodyInput = document.querySelector('#post-body')

const renderPosts = () => {
    let html = ""
    for (let post of postsArray) {
        html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr />
            `
    }
    document.getElementById("blog-list").innerHTML = html
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        postsArray = data.slice(0, 5)
        renderPosts()
    })

const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = new FormData(form);
    const formDataObject = {
            title: data.get("post-title"),
            body: data.get("post-body"),
        };

    const options = {
        method: "POST",
        body: JSON.stringify(formDataObject),
        headers: {
            "Content-Type": "application/json"
        }
    }
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(res => res.json())
        .then(post =>  {
            postsArray.unshift(post)
            renderPosts()
            titleInput.value = ''
            bodyInput.value = ''
        })
})