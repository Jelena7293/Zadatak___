
document.getElementById("email").addEventListener("keyup", function() {
    var eMail = document.getElementById('email').value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(eMail)){
        document.getElementById("email").style.borderColor = "green";
    } else {
        document.getElementById("email").style.borderColor = "red";
    }
});

document.getElementById("companyName").addEventListener("keyup", function() {
    var companyName = document.getElementById('companyName').value;
    var letters = /^[0-9a-zA-Z]+$/;
    if (companyName == "" || companyName.length > 60 || !companyName.match(letters)) {
        document.getElementById("companyName").style.borderColor = "red";
    } else {
        document.getElementById("companyName").style.borderColor = "green";
    }
});

document.getElementById("username").addEventListener("keyup", function() {
    var username = document.getElementById('username').value;
    if (username == "") {
        document.getElementById("username").style.borderColor = "red";
    } else {
        document.getElementById("username").style.borderColor = "green";
    }
});

document.getElementById("password").addEventListener("keyup", function() {
    var password = document.getElementById('password').value;
    var pass=  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,16}$/;
    if (password == "" || !password.match(pass)) {
        document.getElementById("password").style.borderColor = "red";
    } else {
        document.getElementById("password").style.borderColor = "green";
    }
});

document.getElementById("companyUrl").addEventListener("keyup", function() {
    var companyUrl = document.getElementById('companyUrl').value;
    var spec = /^(?=.*[!@#$%^&*"])/;
    if (companyUrl == "" || companyUrl.match(spec)) {
        document.getElementById("companyUrl").style.borderColor = "red";
    } else {
        document.getElementById("companyUrl").style.borderColor = "green";
    }
});

$("input[type='text'], input[type='password']").on("keyup", function(){
    var email = document.forms["myForm"]["email"].value;
    var companyName = document.forms["myForm"]["companyName"].value;
    var usrName = document.forms["myForm"]["username"].value;
    var pswrd = document.forms["myForm"]["password"].value;
    var companyUrl = document.forms["myForm"]["companyUrl"].value;

    var letters = /^[0-9a-zA-Z]+$/;
    var pass=  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    var spec = /^(?=.*[!@#$%^&*"])/;

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && companyName != "" && companyName.length < 60 && companyName.match(letters) && usrName != "" && pswrd != "" && pswrd.match(pass) && companyUrl != "" && !companyUrl.match(spec))
    {
        document.getElementById('btnReady').removeAttribute("disabled");
    }
    else {
        document.getElementById('btnReady').setAttribute("disabled", "disabled");
    }

});

document.getElementById("btnReady").addEventListener("click", function () {
    var email = document.forms["myForm"]["email"].value;
    var companyName = document.forms["myForm"]["companyName"].value;
    var usrName = document.forms["myForm"]["username"].value;
    var pswrd = document.forms["myForm"]["password"].value;
    var companyUrl = document.forms["myForm"]["companyUrl"].value + ".company.com";
    var info = "Email: " + email + "\n" + "Company name: " + companyName + "\n" + "Username: " + usrName + "\n" + "Password: " + pswrd + "\n" + "Company url: " + companyUrl;

    console.log(info);
    clearInputField();
    document.getElementById('btnReady').setAttribute("disabled", "disabled");
});

function clearInputField() {
    document.getElementById("email").value = "";
    document.getElementById("companyName").value = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("companyUrl").value = "";
}