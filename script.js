function saveMessage() {

    const title = document.getElementById("messageTitle").value.trim();
    const author = document.getElementById("messageAuthor").value.trim();
    const text = document.getElementById("messageText").value.trim();

    if (title === "" || text === "") {
        alert("Please enter a title and a message.");
        return;
    }

    const message = {
        title: title,
        author: author || "Anonymous",
        text: text,
        date: new Date().toLocaleDateString()
    };

    let messages =
        JSON.parse(localStorage.getItem("goldfinchMessages")) || [];

    messages.push(message);

    localStorage.setItem(
        "goldfinchMessages",
        JSON.stringify(messages)
    );

    alert("Message saved!");

    window.location.href = "index.html";
}


function showMessages() {

    const list = document.getElementById("messageList");

    if (!list) {
        return;
    }

    const messages =
        JSON.parse(localStorage.getItem("goldfinchMessages")) || [];

    if (messages.length === 0) {
        return;
    }

    list.innerHTML = "";

    messages.forEach(function(message) {

        const item = document.createElement("div");

        item.className = "message";

        item.innerHTML = `
            <div>
                <a href="#" onclick="showFullMessage(${messages.indexOf(message)}); return false;">
                    ${message.title}
                </a>

                <small>
                    Written by ${message.author} • ${message.date}
                </small>
            </div>

            <span>🐦</span>
        `;

        list.appendChild(item);
    });
}


function showFullMessage(index) {

    const messages =
        JSON.parse(localStorage.getItem("goldfinchMessages")) || [];

    const message = messages[index];

    if (!message) {
        return;
    }

    alert(
        message.title +
        "\n\n" +
        "By: " + message.author +
        "\n\n" +
        message.text
    );
}


showMessages();
