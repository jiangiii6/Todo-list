

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => 
        // console.log(json);
        display(json))

function display(res){
    for(let i =0; i<res.length; i++){
        const section = document.querySelector("section");
        const div = document.createElement("div");
        const id = document.createElement("p");
        const title = document.createElement("p");
        const status = document.createElement("p");
        
        console.log(res);
        
        id.textContent = `Id: ${res[i].id}`;
        console.log(res.id);
        title.textContent =`Title: ${res[i].title}`;
        status.textContent = `Completed status: ${res[i].completed}`;
        div.appendChild(id);
        div.appendChild(title);
        div.appendChild(status);
        section.appendChild(div);
}
}