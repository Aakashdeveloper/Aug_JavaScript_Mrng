const validatefname = () => {
    var name = document.getElementById('fname').value;
    if(name==' '||name==""){
        document.getElementById('fout').innerText="Please enter first name"
    }else{
        document.getElementById('fout').innerText=""
    }
}

const validatepwd = () => {
    var pwd = document.getElementById('pwd').value;
    if(pwd.length<15){
        if(pwd.length<8){
            document.getElementById('pout').innerText="Min length of password is 8"
            document.getElementById('ppout').style.background="red";
            document.getElementById('ppout').style.visibility="visible";
        }else if(pwd.length<10){
            document.getElementById('pout').innerText=""
            document.getElementById('ppout').style.background="orange";
            document.getElementById('ppout').style.visibility="visible";
        }
     
    }else{
        document.getElementById('pout').innerText="";
        document.getElementById('ppout').style.background="green";
        document.getElementById('ppout').style.visibility="visible";
    }
}

function validatecpwd(){
    var pwd = document.getElementById('pwd').value;
    var cpwd = document.getElementById('cpwd').value;
    if(pwd !== cpwd){
        document.getElementById('cout').innerText="password does not match";
    }else{
        document.getElementById('cout').innerText="";
    }
}

function validateemail(){
    var email = document.getElementById('email').value;
    if(email==' '||email==""){
        document.getElementById('eout').innerText="Please enter email";
    }else{
        if(email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$") == null){
           document.getElementById('eout').innerText="Please enter valid email";
        }else{
            document.getElementById('eout').innerText="";
        }
    }
}

const experince = () => {
    var exp = document.getElementById('exp').value;
    document.getElementById('expout').innerText=`Year of exp is ${exp}`;
}