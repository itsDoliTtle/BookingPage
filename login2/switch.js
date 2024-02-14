// let loginBtn = document.getElementById("loginBtn");
// let registerBtn = document.getElementById("registerBtn");
// let nameField = document.getElementById("nameField");
// let title = document.getElementById("title");

// registerBtn.onclick = function(){
//     nameField.style.maxHeight = "0";
// }


/*####For the Tabs (Student and Superiors) Starts ### */
let tablinks = document.getElementsByClassName("tab-links")
let forms = document.getElementsByClassName("form")

function opentab(tabname) {
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(form of forms){
        form.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}
/* ####For the Tabs (Student and Superiors) Ends ### */