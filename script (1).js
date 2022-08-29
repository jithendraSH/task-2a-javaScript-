function formValidation() {
    var fname = document.registration.FULLNAME;
    var empemail = document.registration.EMAIL;
    var erole = document.registration.PHONENUMBER;
    var msex = document.registration.opt1;
    var fsex = document.registration.opt2;
    var other = document.registration.opt3;
    var empsubmit = document.registration.submit;
        if (alphabet(fname)) {
                if (ValidateEmail(empemail)) {
                    if (emprole(erole)) {
                                if (validsex(msex,fsex,other)) {
                                    if (sub(empsubmit)){

                                    }
                                }
                            }
                        }
            }

    return false;
}
function alphabet(fname) {
    var letters = /^[A-Za-z]+$/;
    if (fname.value.match(letters)) {
        return true;
    }
    else {
        alert('Name should not be empty');
        fname.focus();
        return false;
    }
}

function ValidateEmail(empemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (empemail.value.match(mailformat)) {
        return true;
    }
    else {
        alert("Invalid email address");
        empemail.focus();
        return false;
    }
}

function emprole(erole) {
    var numbers =(/^[0-9]+$/);
    if (role.value.match(numbers)) {
        return true;
    }
    else {
        alert('phone no should not be empty');
        role.focus();
        return false;
    }
}
function validsex(msex,fsex,other) {
    x = 0;

    if (msex.checked) {
        x++;
    } if(fsex.checked) {
        x++;
    }
    
    if (x == 0) {
        alert('Select Male/Female');
        msex.focus();
        return false;
    }
    else {
        console.log(eid);
        window.location.reload()
        return true;
}
}


