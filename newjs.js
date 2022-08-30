function myfunc() {
    document.getElementById("popup").style.top = "4rem";
    document.getElementById("popupback").style.top = "4rem";
    document.getElementById("popup").style.visibility = "visible";
    document.getElementById("popupback").style.visibility = "hidden";
}

function myfunc2() {
    document.getElementById("popup").style.top = "-20rem";
}

function flip() {
    document.getElementById("popup").style.visibility = "hidden";
    document.getElementById("popupback").style.visibility = "visible";
}

const Name = document.getElementById('Name');
const Email = document.getElementById('Email');
const Password = document.getElementById('Password');
const ConfirmPassword = document.getElementById('ConfirmPassword');
const register = document.getElementById('signup');

ConfirmPassword.addEventListener('input', (e)=>{

    if(Password.value != ConfirmPassword.value) {

        register.disabled = true;
    }
    else {

        register.disabled = false;
    }
});

register.addEventListener('click', (e)=>{

    e.preventDefault();

    fetch('http://www.localhost:2000/api/auth/register', {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Name: Name.value,
            Email: Email.value,
            Password: Password.value,
            ConfirmPassword: ConfirmPassword.value
        })
    }).then(data=>data.json()).then((token)=>{

        localStorage.setItem('authToken', token.authToken);
    }).catch((e)=>{

        console.log(e);
    });
});

