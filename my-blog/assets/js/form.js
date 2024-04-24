const usernameBox = document.getElementById("usernameBox");
const titleBox = document.getElementById("titleBox");
const contentbox = document.getElementById("contentbox");
const submitButton = document.getElementById("submitButton");

submitButton.onclick = function() {
    const username = usernameBox.value;
    const title = titleBox.value;
    const content = contentBox.value;

    console.log(username);
    console.log(title);
    console.log(content);

    if (username && title){
        localStorage.setItem(username, title);
        
       
    }
}