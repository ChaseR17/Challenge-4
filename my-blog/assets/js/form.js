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
        
        //localStorage.setItem(username, [title, content]);
        responseObject = {
            title: title,
            content: content,
        };
        localStorage.setItem(username, JSON.stringify(responseObject))
        location.href="blog.html"
    } else {
        showAlert();
    }
    
    function showAlert() {
        alert("Please fill out all the info!");
    }
}

// Step 1 add a prompt that tells me that i need to fill out all of the info if i hit submit without filling out boxes