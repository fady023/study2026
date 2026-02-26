/* 
var span = document.querySelector("span"); */


// var icon = document.querySelector(".fa-eye-slash");
// var icon2 = document.querySelector(".hide");

// var pass = document.querySelector("input[type=password]");


// var el = document.createElement("h1");

// el.innerText = "Welcome to Germany"; 

// el.style.cssText = "color:red;font-szie:33px;background-color:lightblue";

/* div.appendChild(el); */


/* div.insertBefore(el,div.children[3]); */

/* div.insertAdjacentElement("afterend",el); */


// icon.addEventListener("click",()=>{
//     pass.type="text";
//   /*   icon.style.display = "none"; */
//     icon.classList.add("hide");
//     icon2.classList.remove("hide");

// });



// icon2.addEventListener("click",()=>{
//     pass.type = "password";
//     icon2.classList.add("hide");
//     icon.classList.remove("hide");
// })



var form = document.querySelector("form");
var sub = document.querySelector("input[type=submit]");

var inp_name = document.querySelector("input[name=nm]");
var inp_email = document.querySelector("input[name=mail]");
var inp_pass = document.querySelector("input[name=pass]");
var inp_pass2 = document.querySelector("input[name=pass2]");

var inputs = document.querySelectorAll("input:not([type=submit])")

const reSimple = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

sub.addEventListener("click", function (e) {
    e.preventDefault();

    for (var x of inputs) {
        if (x.value == "") {
            x.nextElementSibling.innerHTML = `${x.name} is required`;
            x.style.border="1px solid red";
        }
    }

    if(reSimple.test(inp_email.value)== false){

        inp_email.nextElementSibling.innerHTML ="email is incorrect";

    }

    if(inp_pass.value != inp_pass2.value ){
        inp_pass.nextElementSibling.innerHTML = "password isnt matched";
    }
})