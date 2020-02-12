let box = document.querySelectorAll("input")
let btn = document.querySelector(".btn")
let table = document.querySelector(".table tbody")

btn.addEventListener("click", function (e) {
    e.preventDefault()
    if (box[0].value == "" || box[1].value == "" || box[2].value == "") {
        alert('Please Enter Your Name and Email')
    } else {
        let tr = table.insertRow();
        let name = tr.insertCell(0)
        let price = tr.insertCell(1)
        let images = tr.insertCell(2)
        let action = tr.insertCell(3)
        let ed = document.createElement("button")
        ed.addEventListener("click",function(){
            alert("You Clicked Edit Button")
        })
        ed.className = "btn btn-warning"
        ed.innerText = "Edit"
        let del = document.createElement("button")
        del.addEventListener("click",function(e){
            e.target.parentNode.parentNode.parentNode.removeChild(tr)
        })
        del.className = "btn btn-danger"
        del.innerText = "Delete"

        // ============================================
        name.innerText = box[0].value
        price.innerText = `$${box[1].value}`

        action.appendChild(ed)
        action.appendChild(del)
        let test = box[2].value;
        let ss = test.split("\\")
        let imgvalue = `<img src="./img/${ss[2]}" width='100px' alt="image_not_found">`
        images.innerHTML = imgvalue
        for (let i = 0; i < box.length; i++) {
            box[i].value = ""
        }
    }
})
