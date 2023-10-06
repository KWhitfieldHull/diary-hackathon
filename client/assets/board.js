function createPostElement(data) {
    const post = document.createElement("div");
    post.className = "post";

    const header = document.createElement("h2");
    header.textContent = data["name"];
    post.appendChild(header);

    const content = document.createElement("p");
    content.textContent = data["text"];
    post.appendChild(content);
    const date = document.createElement("p");
    const datedb = data["date"].substring(0, 10)
    date.textContent = `Date: ` + datedb;
    post.appendChild(date);
    const category = document.createElement("p");
    category.textContent = `Category: ` + data["category"];
    post.appendChild(category);

    return post;
}

document.getElementById("post-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: form.get("title"),
            text: form.get("content"),
            date: form.get("date"),
            category: form.get("category")
        })
    }

    const result = await fetch("http://localhost:3000/diary", options);
    console.log(result)
    if (result.status == 200) {
        window.location.reload();
    }
})

async function loadPosts() {

    const options = {
        headers: {
            Authorisation: localStorage.getItem("token")
        }
    }
    const response = await fetch("http://localhost:3000/diary");

    if (response.status == 200) {
        const posts = await response.json();

        const container = document.getElementById("posts");

        posts.forEach(p => {
            const elem = createPostElement(p);
            container.appendChild(elem);
        })
    } else {
        window.location.assign("./index.html");
    }

}

loadPosts();
