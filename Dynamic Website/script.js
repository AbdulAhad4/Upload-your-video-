function upload() {
    thumbail = prompt("Enter the link of the thumbail image");
    tittle = prompt("enter the tittle of the video");
    cName = prompt("Enter the channel name");
    let views = Math.random() * 10;
    views = Math.floor(views);
    if (views >= 1){
        views = views + "M";
    }
    let post = Math.random() * 10;
    post = Math.floor(post);
    if (post > 1){
        post = post + "months";
    }
    else{
        post = "just now"
    }

    let html = `<div class="vid">  
    <img src="${thumbail}" alt="media not available">
    <div class="text">
        <h1>${tittle}</h1>
        <p>${cName} . ${views} views . ${post} ago</p>
    </div>
</div>`;
    document.querySelector(".container").innerHTML += html;
}