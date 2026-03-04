let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
// fetching data from localStorage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// checking if data in localStorage exist
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// save tab button
// tabBtn.addEventListener("click", function() {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     myLeads.push(tabs[0].url)
//     localStorage.setItem("myLeads", JSON.stringify(myLeads))
//     render(myLeads)
//     })   
// })

// tabBtn.addEventListener("click", function(){    
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//         myLeads.push(tabs[0].url)
//         localStorage.setItem("myLeads", JSON.stringify(myLeads) )
//         render(myLeads)
//     })
// })

tabBtn.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length === 0) return
        
        const currentTab = tabs[0]
        myLeads.push(currentTab.url)

        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

//  Show saved leads
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}

// Save button function
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    // Clear out the input field
    inputEl.value = ""
    // Save myleads into local storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

// Delete button function
deleteBtn.addEventListener("dblclick", function() {
    // clear out the local storage
    localStorage.clear()
    // clear out my leads array
    myLeads = []
    render(myLeads)
})

