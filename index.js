let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
// fetching data from localStorage
// localStorage.clear()
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// checking if data in localStorage exist
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}


// Save button function
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)

    // Clear out the input field
    inputEl.value = ""

    // Save myleads into local storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
   
    renderLeads()
})

//  Show saved leads
function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>"
    }
    ulEl.innerHTML = listItems  
}