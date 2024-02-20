document.addEventListener("DOMContentLoaded", function(){
    let input = document.querySelector("#tasks");
    let submit = document.querySelector("#submit");
    submit.disabled = true;
    submit.style.opacity = ".2"
    input.onkeyup = function(){
        if (input.value.length > 6){
            submit.disabled = false;
            submit.style.opacity = "1"
        } else{
            submit.disabled = true;
            submit.style.opacity = ".2"
        }
    }
    document.querySelector("#form").onsubmit = function(){
        let text = input.value;
        
        let myElement = document.createElement("div");
        let todoText = document.createElement("h3");
        let btn = document.createElement("button");
        btn.id = "btn";
        btn.textContent = "Remove";
        todoText.append(text);
        myElement.appendChild(todoText);
        myElement.appendChild(btn)

        document.body.querySelector("ul").append(myElement);
        saveData()
        btn.addEventListener("click",function(){
            btn.parentElement.remove()
            saveData()
        })
        
        document.querySelector("#tasks").value = '';
        saveData()
        
        submit.disabled = true;
        
        return false
    }
    
})
function saveData(){
    localStorage.setItem("data", document.body.querySelector(".list-conteriner").innerHTML);
}
function showData(){
    document.body.querySelector(".list-conteriner").innerHTML = localStorage.getItem("data")
    btn.addEventListener("click",function(){
        btn.parentElement.remove()
        saveData()
    })
}
showData()

