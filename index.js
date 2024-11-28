fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
        let html = ""
        for (let post of postsArr) {
            html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
                `
        }
        document.getElementById("blog-list").innerHTML = html
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
        .then(data =>  {
            document.querySelector('#blog-list').innerHTML += `
                <h3>${data.title}</h3>
                <p>${data.body}</p>
                <hr />
                `
            const titleInput = document.querySelector('#post-title');
            titleInput.value = ''
            const bodyInput = document.querySelector('#post-body');
            bodyInput.value = ''
        })
})