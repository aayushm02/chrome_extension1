//the input button 
//the input button 
let mytext = []
const inputEl = document.getElementById("inp-el")
const saveBtn = document.getElementById("savebtn")
const ulel = document.getElementById("ul-el")
let leadsfromlocalsto = JSON.parse(localStorage.getItem("mytext"))
if(leadsfromlocalsto)
    {
        mytext = leadsfromlocalsto
        render()
    }
saveBtn.addEventListener("click", function(){
    mytext.push(inputEl.value)
    console.log(ulel)
    inputEl.value= ""
    localStorage.setItem("mytext",JSON.stringify(mytext))
    render()
}) 
function render(){
    let listitems = ""
    for(let i =0; i<mytext.length; i++) {
            listitems += "<li>"+ mytext[i] + "</li>"
         }
    ulel.innerHTML = listitems
}

