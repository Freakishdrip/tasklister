document.addEventListener("DOMContentLoaded", () => {

document.querySelector("form").addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(e)
    console.log(e.target)
    addNewToDo(e.target["new-task-description"].value)
});

function addNewToDo(form){
    let p = document.createElement('p')
    p.textContent = form
    document.querySelector('#tasks').appendChild(p)
}
    
})




//take user input and add it to a unordered list with append child to the second div
// text = form.getElementById('#new-task-description').value;
//     console.log(text);
//     form = document.createElement("ul")
//     form.appendChild(form);
//     document.getElementById("#tasks").appendChild(form);