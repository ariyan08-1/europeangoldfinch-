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

    document.getElementById("messageTitle").value = "";
    document.getElementById("messageAuthor").value = "";
    document.getElementById("messageText").value = "";
}
