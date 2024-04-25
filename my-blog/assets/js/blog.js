//darkMode.onclick = function myFunction() {
    darkMode.onclick = () => {
    let element = document.body;
    element.classList.toggle("dark-mode");
  }
console.log(localStorage)
 for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    //let value = localStorage.getItem(key); 
    let obj = localStorage.getItem(key)
    let jsonObj = JSON.parse(obj)
    console.log(obj)
    console.log(jsonObj)
    //console.log(value[0])
    userDiv=document.createElement("div")
    titleDiv=document.createElement("div")
    contentDiv=document.createElement("div")
    
    blogPostDiv=document.createElement("div")

   // let values = value.split(",")
    userDiv.innerHTML=key
    // titleDiv.innerHTML=values[0]
    // contentDiv.innerHTML=values[1]
    titleDiv.innerHTML=jsonObj["title"]
    contentDiv.innerHTML=jsonObj["content"]

    // document.getElementById("lsOutput").append(userDiv)
    // document.getElementById("lsOutput").append(titleDiv)
    // document.getElementById("lsOutput").append(contentDiv)
    blogPostDiv.append(userDiv)
    blogPostDiv.append(titleDiv)
    blogPostDiv.append(contentDiv)
    
    blogPostDiv.setAttribute("class", "blogBoxes")
    
    document.getElementById("lsOutput").append(blogPostDiv)



 }

