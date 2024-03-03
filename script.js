const menu = document.getElementById("menu");
const menuia = document.getElementById("menu-icons")
const menuid = document.getElementById("menu-icons2")

menuia.onclick = () => {
    menu.style.display = "block"
    menu.style.display = "flex"
    menuia.style.display = "none"
}

menuid.onclick = () => {
    menu.style.display = "none"
    menuia.style.display = "block"
}

const names = document.getElementById("name");
const emaili = document.getElementById("email")
const mess = document.getElementById("mess")
const ername = document.getElementById("ername")
const eremail = document.getElementById("eremail");
const ermes = document.getElementById("ermes");



function nameVal() {
    if(names.value != "") {
        ername.style.display = "none"
        console.log(names.value)
        alert("Դուք արդեն գրանցվեցիք❤️❤️")
    }
    else {
        ername.style.display = "block"
        ername.style.display = "flex"
        alert("Խնդրումենք թարմացնել էջը գրանցվելու համար💜💜")
    }
}

function messVal() {
    if(mess.value != "") {
        ername.style.display = "none"
        console.log(mess.value)
    }
    else {
        ermes.style.display = "block"
        ermes.style.display = "flex"
    }
}

function emailVal() {
    var emailaRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var email = emaili.value;

    if(emailaRegex.test(email)){
        console.log(email)
    }
    else{
        eremail.style.display = "block"
        eremail.style.display = "flex"
    }
}