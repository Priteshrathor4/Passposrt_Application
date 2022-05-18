function verifyAnswer() {
    verifyAnswer3();
    document.getElementById("validity1").disabled = true;
    document.getElementById("Exhaustion").disabled = true;
    document.getElementById("ValidityE").disabled = true;
    document.getElementById("PersonalP").disabled = true;
    document.getElementById("Damaged").disabled = true;
    document.getElementById("LostP").disabled = true;

    document.getElementById("ppad1").disabled = true;
    document.getElementById("ppad2").disabled = true;
    document.getElementById("ppad3").disabled = true;
    document.getElementById("ppad4").disabled = true;
    document.getElementById("yes6.2").disabled = true;
    document.getElementById("no6.2").disabled = true;


    var rad = document.getElementById("fresh").value;
    if (rad == true) {
        document.getElementById("validity1").disabled = false;
        document.getElementById("Exhaustion").disabled = false;
        document.getElementById("ValidityE").disabled = false;
        document.getElementById("PersonalP").disabled = false;
        document.getElementById("Damaged").disabled = false;
        document.getElementById("LostP").disabled = false;

        document.getElementById("ppad1").disabled = false;
        document.getElementById("ppad2").disabled = false;
        document.getElementById("ppad3").disabled = false;
        document.getElementById("ppad4").disabled = false;
        document.getElementById("yes6.2").disabled = false;
        document.getElementById("no6.2").disabled = false;
    }
}
function verifyAnswer2() {
    document.getElementById("validity1").disabled = false;
    document.getElementById("Exhaustion").disabled = false;
    document.getElementById("ValidityE").disabled = false;
    document.getElementById("PersonalP").disabled = false;
    document.getElementById("Damaged").disabled = false;
    document.getElementById("LostP").disabled = false;

    document.getElementById("ppad1").disabled = false;
    document.getElementById("ppad2").disabled = false;
    document.getElementById("ppad3").disabled = false;
    document.getElementById("ppad4").disabled = false;
    document.getElementById("yes6.2").disabled = false;
    document.getElementById("no6.2").disabled = false;

    var rad2 = document.getElementById("Re_issue").value;

    if (rad2.checked == true) {
        document.getElementById("validity1").disabled = true;
        document.getElementById("Exhaustion").disabled = true;
        document.getElementById("ValidityE").disabled = true;
        document.getElementById("PersonalP").disabled = true;
        document.getElementById("Damaged").disabled = true;
        document.getElementById("LostP").disabled = true;

        document.getElementById("ppad1").disabled = true;
        document.getElementById("ppad2").disabled = true;
        document.getElementById("ppad3").disabled = true;
        document.getElementById("ppad4").disabled = true;
        document.getElementById("yes6.2").disabled = true;
        document.getElementById("no6.2").disabled = true;
    }
}
function verifyAnswer3() {
    document.getElementById("Appearance").disabled = true;
    document.getElementById("Signature").disabled = true;
    document.getElementById("Name1.3").disabled = true;
    document.getElementById("Surname1.3").disabled = true;
    document.getElementById("Date1.3").disabled = true;
    document.getElementById("Spouse1.3").disabled = true;
    document.getElementById("Address1.3").disabled = true;
    document.getElementById("Delete").disabled = true;
    document.getElementById("Others1.3").disabled = true;

    var rad3 = document.getElementById("validity1").value;
    var rad4 = document.getElementById("Exhaustion").value;
    var rad5 = document.getElementById("ValidityE").value;
    var rad6 = document.getElementById("LostP").value;
    var rad8 = document.getElementById("Damaged").value;
    if (rad3 == true || rad4 == true || rad5 == true || rad6 == true || rad8 == true) {
        document.getElementById("Appearance").disabled = false;
        document.getElementById("Signature").disabled = false;
        document.getElementById("Name1.3").disabled = false;
        document.getElementById("Surname1.3").disabled = false;
        document.getElementById("Date1.3").disabled = false;
        document.getElementById("Spouse1.3").disabled = false;
        document.getElementById("Address1.3").disabled = false;
        document.getElementById("Delete").disabled = false;
        document.getElementById("Others1.3").disabled = false
    }
}
function verifyAnswer4() {
    document.getElementById("Appearance").disabled = false;
    document.getElementById("Signature").disabled = false;
    document.getElementById("Name1.3").disabled = false;
    document.getElementById("Surname1.3").disabled = false;
    document.getElementById("Date1.3").disabled = false;
    document.getElementById("Spouse1.3").disabled = false;
    document.getElementById("Address1.3").disabled = false;
    document.getElementById("Delete").disabled = false;
    document.getElementById("Others1.3").disabled = false
    var rad7 = document.getElementById("PersonalP").value;
    if (rad7 == true) {
        document.getElementById("Appearance").disabled = true;
        document.getElementById("Signature").disabled = true;
        document.getElementById("Name1.3").disabled = true;
        document.getElementById("Surname1.3").disabled = true;
        document.getElementById("Date1.3").disabled = true;
        document.getElementById("Spouse1.3").disabled = true;
        document.getElementById("Address1.3").disabled = true;
        document.getElementById("Delete").disabled = true;
        document.getElementById("Others1.3").disabled = true;
    }
}

function forother(){
    // document.getElementById("Please1.3").disabled = false;

    var dev = document.getElementById("Others1.3").checked;
    if (dev == true) {
        //enable all the radio button
            document.getElementById("Please1.3").disabled = false;
            document.getElementById("Please1.3").focus();
}
}
function myclickp() {

    document.getElementById("pecd1").disabled = false;
    document.getElementById("pecd2").disabled = false;
    document.getElementById("pecd3").disabled = false;
    document.getElementById("pecd4").disabled = false;
    if (pra10.checked == true) {
        document.getElementById("pecd1").disabled = true;
        document.getElementById("pecd2").disabled = true;
        document.getElementById("pecd3").disabled = true;
        document.getElementById("pecd4").disabled = true;
    }
}

function myclickp2() {
    document.getElementById("ppad5").disabled = false;
    document.getElementById("ppad6").disabled = false;
    document.getElementById("ppad7").disabled = false;
    if (od2.checked == true) {
        document.getElementById("ppad5").disabled = true;
        document.getElementById("ppad6").disabled = true;
        document.getElementById("ppad7").disabled = true;
    }

}
// function myclickp4() {
//     document.getElementById("ppad5").disabled = true;
//     document.getElementById("ppad6").disabled = true;
//     document.getElementById("ppad7").disabled = true;
//     if (od2.checked == true) {
//         document.getElementById("ppad5").disabled = false;
//         document.getElementById("ppad6").disabled = false;
//         document.getElementById("ppad7").disabled = fal;
//     }

// }
function myclickp3() {
    document.getElementById("pecd1").disabled = true;
    document.getElementById("pecd2").disabled = true;
    document.getElementById("pecd3").disabled = true;
    document.getElementById("pecd4").disabled = true;
if (od2.checked == true) {
        document.getElementById("pecd1").disabled = false;
        document.getElementById("pecd2").disabled = false;
        document.getElementById("pecd3").disabled = false;
        document.getElementById("pecd4").disabled = false;
    }

}
function allowAlphaNumericSpace(e) {
    var code = ('charCode' in e) ? e.charCode : e.keyCode;
    if (!(code == 45) && // dase
        !(code == 32) && // space
        !(code == 44) && // coma
        !(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        e.preventDefault();
    }
}