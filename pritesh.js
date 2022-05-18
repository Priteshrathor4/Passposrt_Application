
function clearErrors() {
errors = document.getElementsByClassName('formerror');
for (let item of errors) {
item.innerHTML = "";
}
}
function seterror(id, error) {
//sets error inside tag of id 
element = document.getElementById(id);
element.getElementsByClassName('formerror')[0].innerHTML = error;
}
function validateForm() {
clearErrors();
var returnval = true;
// // perform validation and if validation fails, set the value of returnval to false
var file = document.getElementById('f-input').value;

if (file.length == 0) {
seterror("file", "**0.1Please Enter File Number");
returnval = false;
}
else if (!file.match(/^[A-Z]{4}[0-9]{8}$/)) {
seterror("file", "**0.1Please Enter valid input");
returnval = false;
}
else {
seterror("file", " ");
}
var btnb = document.getElementById('fresh');
    var btnb2 = document.getElementById('Re_issue');
    // filed 1.2
    var btnb3 = document.getElementById('validity1');
    var btnb4 = document.getElementById('Exhaustion');
    var btnb5 = document.getElementById('ValidityE');
    var btnb6 = document.getElementById('LostP');
    var btnb7 = document.getElementById('PersonalP');
    var btnb8 = document.getElementById('Damaged');
    // filed 1.3
    var btnb1i = document.getElementById('Appearance');
    var btnb2i = document.getElementById('Signature');
    var btnb3i = document.getElementById('Name1.3');
    var btnb4i = document.getElementById('Surname1.3');
    var btnb5i = document.getElementById('Date1.3');
    var btnb6i = document.getElementById('Spouse1.3');
    var btnb7i = document.getElementById('Address1.3');
    var btnb8i = document.getElementById('Delete');
    var btnb9i = document.getElementById('Others1.3');
    // ifelse for 1.1
    if (btnb.checked == true || btnb2.checked == true) {
        document.getElementById("radio_error").innerHTML = "";
    }
    else {
        seterror("radio_error", "**1.1 Please select any one");
        returnval = false;
    }
    // ifelse for1.2 
    if (btnb.checked == true || btnb3.checked == true || btnb4.checked == true
        || btnb5.checked == true || btnb6.checked == true ||
        btnb7.checked == true || btnb8.checked == true) {
        document.getElementById("radio_error2").innerHTML = "";
    }
    else {
        seterror("radio_error2", "**1.2 Please select re-issue, specify reason(s) (any one)");
        returnval = false;
    }
    // ifelse for1.3 
    if (btnb.checked == true || btnb3.checked == true || btnb4.checked == true || btnb5.checked == true || btnb6.checked == true ||
        btnb8.checked == true || btnb1i.checked == true || btnb2i.checked == true || btnb3i.checked == true || btnb4i.checked == true ||
        btnb5i.checked == true || btnb6i.checked == true || btnb7i.checked == true || btnb8i.checked == true || btnb9i.checked == true) {
        document.getElementById("radio_error3").innerHTML = "";
    }
    else {
        seterror("radio_error3", "**1.3 Please select If change in existing personal particulars, specify reason(s) (any one)");
        returnval = false;
    }
     // this for 1.4
     var btnba = document.getElementById('normal1.4');
     var btnbc = document.getElementById('Tatkaal1.4');
     if (btnba.checked == true || btnbc.checked == true) {
         document.getElementById("radio_error4").innerHTML = "";
     }
     else {
         seterror("radio_error4", "**1.4 Please select Type of Application");
         returnval = false;
     }
     //  this is for 1.5
     var btnbd = document.getElementById('page36');
     var btnbe = document.getElementById('page60');
     if (btnbd.checked == true || btnbe.checked == true) {
         document.getElementById("radio_error5").innerHTML = "";
     }
     else {
         seterror("radio_error5", "**1.5	Please select Type of Passport Booklet");
         returnval = false;
     }
     // this is for 1.6
 
     var btnbf = document.getElementById('year10');
     var btnbg = document.getElementById('year18');
     if (btnbf.checked == true || btnbg.checked == true) {
         document.getElementById("radio_error6").innerHTML = "";
     }
     else {
         seterror("radio_error6", "**1.6 Please select Validity Required");
         returnval = false;
     }
        // this is for second page 
    var Aname = document.forms['myForm']["fileb"].value;
    if (Aname.length == 0) {
        seterror("file2", "**2.1(A) Please enter Applicant's Given Name");
        returnval = false;
    }
    else if (!Aname.match(/^[A-Z]{4,10}$/)) {
        seterror("file2", "**2.1(A) Please enter valid input");
        returnval = false;
    }
    else {
        document.getElementById('file2').innerHTML = "";
    }

    var rname = document.forms['myForm']["filec"].value;
    if (rname.length == 0) {
        seterror("file3", "**2.1(B) Please enter Applicant's Given Name");
        returnval = false;
    }
    else if (!rname.match(/^[A-Z]{4,10}/)) {
        document.getElementById('file3').innerHTML = "";
        returnval = false;
    }
    else {
        seterror("file3", "**2.1(B) Please enter valid input");
    }

    //thsi is for 2.2 radio btn's 
    var btnp1 = document.getElementById('yes2.2');
    var btnp2 = document.getElementById('no2.2');
    if (btnp1.checked == true || btnp2.checked == true) {
        document.getElementById("radio_error7").innerHTML = "";
    }
    else {
        seterror("radio_error7", "**2.2 Please select Are you known by any other names (aliases)?");
        returnval = false;
    }
    //this is for 2.3 radio btn 
    var btnp3 = document.getElementById('yes2.3');
    var btnp4 = document.getElementById('no2.3');
    if (btnp3.checked == true || btnp4.checked == true) {
        document.getElementById("radio_error8").innerHTML = "";
    }
    else {
        seterror("radio_error8", "**2.3 Please select Have you ever changed your name?");
        returnval = false;
    }
    var currentdate = new Date();
    var dob = document.forms['myForm']["filed"].value;
    var daten2 = new Date(dob)
    if (dob.length == 0) {
        seterror("file4", "**2.4 Please select Date of Birth");
        returnval = false;
    }
    else if (daten2 >= currentdate) {
        seterror("file4", "2.4 future date can not be allowed")
    }

    // this is 2.5 (A)
    var place2a = document.forms['myForm']["filee"].value;
    if (place2a.length == 0) {
        seterror("file5", "**2.5(A) Please Enter Place of Birth ");
        returnval = false;
    }
    else if (!place2a.match(/^[A-Z]{4,10}$/)) {
        seterror("file5", "**2.5(A) Please enter valid input");
        returnval = false;
    }
    else {
        document.getElementById('file5').innerHTML = "";
    }

    var place2b = document.forms['myForm']["filef"].value;
    if (place2b.length == 0) {
        seterror("file6", "**2.5(B) District (If born in India)");
        returnval = false;
    }
    else if (!place2b.match(/^[A-Z]{4,10}$/)) {
        seterror("file6", "**2.5(B) Please enter valid district");
        returnval = false;
    }
    else {
        document.getElementById('file6').innerHTML = "";
    }
    var place2c = document.forms['myForm']["fileg"].value;
    if (place2c.length == 0) {
        seterror("file7", "**2.5(C) Please Enter State/ UT ");
        returnval = false;
    }
    else if (!place2c.match(/^[A-Z]{4,10}$/)) {
        seterror("file7", "**2.5(C) Please enter valid input");
        returnval = false;
    }
    else {
        document.getElementById('file7').innerHTML = "";
    }

    var place2d = document.forms['myForm']["fileh"].value;
    if (place2d.length == 0) {
        seterror("file8", "**2.5(D) Please Enter Region/Country ");
        returnval = false;
    }
    else if (!place2d.match(/^[A-Za-z]{4,10}$/)) {
        seterror("file8", "**2.5(D) Please enter valid input");
        returnval = false;
    }

    else if (place2d == "india" || place2d == "India" || place2d == "INDIA") {
        document.getElementById('file8').innerHTML = "";
    }
    else {
        seterror("file8", "**2.5(D) Accept only india");
        returnval = false;
    }

    var place2e = document.forms['myForm']["filei"].value;
    if (place2e.length == "null" || place2e.length == "") {
        returnval = false;
    }
    else if (!place2e.match(/^[A-Z0-9]{10}$/)) {
        seterror("file9", "**2.6 Please Enter Valid PAN Number");
        returnval = false;
    }
    else {
        document.getElementById('file9').innerHTML = "";
    }
    var place2f = document.forms['myForm']["filej"].value;
    if (place2f == "null" || place2f == "") {
        // seterror("file10", "**2.7 Please Enter vaid Voter ID Number");
        returnval = false;
        // console.log(place2f +"this is voter id");
    }
    else if (!place2f.match(/^[A-Z0-9]{10}$/)) {
        seterror("file10", "**2.7 Please Enter  valid Voter ID Number");
        returnval = false;
    }
    else {
        document.getElementById('file10').innerHTML = "";
    }
    var btnp5 = document.getElementById('lab28');
    var btnp6 = document.getElementById('lab29');
    var btnp7 = document.getElementById('lab30');
    if (btnp5.checked == true || btnp6.checked == true || btnp7.checked == true) {
        document.getElementById("radio_error9").innerHTML = "";
    }
    else {
        seterror("radio_error9", "**2.8 Please Select Citizenship of India by");
        returnval = false;
    }
    var btnp8 = document.getElementById('male');
    var btnp9 = document.getElementById('female');
    var btnp10 = document.getElementById('transgender');
    if (btnp8.checked == true || btnp9.checked == true || btnp10.checked == true) {
        document.getElementById("radio_error9").innerHTML = "";
    }
    else {
        seterror("radio_error10", "**2.9 Please Select Gender");
        returnval = false;
    }
    var btnp11 = document.getElementById('Single');
    var btnp12 = document.getElementById('Married');
    var btnp13 = document.getElementById('window');
    var btnp14 = document.getElementById('Divorced');
    var btnp15 = document.getElementById('Separated');
    if (btnp11.checked == true || btnp12.checked == true || btnp13.checked == true || btnp14.checked == true || btnp15.checked == true) {
        document.getElementById("radio_error9").innerHTML = "";
    }
    else {
        seterror("radio_error11", "**2.10 Please Select Marital Status");
        returnval = false;
    }
    var btnp16 = document.getElementById('PSU');
    var btnp17 = document.getElementById('PSU2');
    var btnp18 = document.getElementById('PSU3');
    var btnp19 = document.getElementById('PSU4');
    var btnp20 = document.getElementById('PSU5');
    var btnp21 = document.getElementById('PSU6');
    var btnp22 = document.getElementById('PSU7');
    var btnp23 = document.getElementById('PSU8');
    var btnp24 = document.getElementById('PSU9');
    var btnp25 = document.getElementById('PSU1');
    var btnp26 = document.getElementById('PS');
    var btnp27 = document.getElementById('PSB');
    if (btnp16.checked == true || btnp17.checked == true || btnp18.checked == true || btnp19.checked == true
        || btnp20.checked == true || btnp21.checked == true || btnp22.checked == true || btnp23.checked == true
        || btnp24.checked == true || btnp25.checked == true || btnp26.checked == true || btnp27.checked == true) {
        document.getElementById("radio_error9").innerHTML = "";
    }
    else {
        seterror("radio_error12", "**2.11 Please Select Employment Type");
        returnval = false;
    }

    var psu = document.forms['myForm']["filek"].value;
    if (psu.length == 0) {
        seterror("file11", "**2.12 Please Enter If employed in Government/ Statutory Body/ PSU, specify organization name");
        returnval = false;
    }
    else if (!psu.match(/^[A-Za-z0-9]{10,60}$/)) {
        seterror("file11", "**2.12 Please Enter '<b>**Valid**</b>'If employed in Government/ Statutory Body/ PSU, specify organization namer");
        returnval = false;
    }
    else {
        document.getElementById('file11').innerHTML = "";
    }

    var btnp28 = document.getElementById('yes2.13');
    var btnp29 = document.getElementById('no2.13');
    if (btnp28.checked == true || btnp29.checked == true) {
        document.getElementById("radio_error13").innerHTML = "";
    }
    else {
        seterror("radio_error13", "**2.13 Please Select Is either of your parent (in case of minor)/ spouse, a government servant?");
        returnval = false;
    }
    var btnp30 = document.getElementById('7th');
    var btnp31 = document.getElementById('9th');
    var btnp32 = document.getElementById('10th');
    var btnp33 = document.getElementById('15th');
    if (btnp30.checked == true || btnp31.checked == true || btnp32.checked == true || btnp33.checked == true) {
        document.getElementById("radio_error14").innerHTML = "";
    }
    else {
        seterror("radio_error14", "**2.14 Please Select Educational Qualification");
        returnval = false;
    }
    var btnp34 = document.getElementById('yes2.15');
    var btnp35 = document.getElementById('no2.15');
    if (btnp34.checked == true || btnp35.checked == true) {
        document.getElementById("radio_error15").innerHTML = "";
    }
    else {
        seterror("radio_error15", "**2.15 Please Select Are you eligible for Non-ECR category?");
        returnval = false;
    }

    var vdm = document.forms['myForm']["filem"].value;
    if (vdm.length == 0) {
        seterror("file13", "**2.16 Please Enter Visible Distinguishing Mark");
        returnval = false;
    }
    // else if(input[name='select']){

    //     $("")
    // }

    var aadh = document.forms['myForm']["filel"].value;
    if (aadh.length == 0) {
        seterror("file12", "**2.17 Please Enter Aadhaar Number");
        returnval = false;
    }
    else if (!aadh.match(/^[0-9]{12}$/)) {
        seterror("file12", "**2.17 Please Enter valid Aadhaar Number");
        returnval = false;
    }
    else {
        document.getElementById('file12').innerHTML = "";
    }
        // this is for 3rd page 

        var inoutf = document.forms['myForm']["fd1"].value;
        if (inoutf.length == 0) {
            seterror("fd1b", "**3.1(A) Please Enter father's Given Name");
            returnval = false;
        }
        else if (!inoutf.match(/^[A-Z]{3,500}$/)) {
            seterror("fd1b", "**3.1(A) Please Enter valid input");
            returnval = false;
        }
        else {
            document.getElementById('fd1b').innerHTML = "";
        }
    
        var inoutf2 = document.forms['myForm']["fd2b"].value;
        if (inoutf2.length == 0) {
            seterror("fd2b", "**3.1(B) Please Enter Father's Given Name");
            returnval = false;
        }
        else if (!inoutf2.match(/^[A-Z]{3,500}$/)) {
            seterror("fd2b", "**3.1(B) Please Enter valid input");
            returnval = false;
        }
        else {
            document.getElementById('fd2b').innerHTML = "";
        }
        var inoutf3 = document.forms['myForm']["fd3"].value;
        if (inoutf3.length == 0) {
            seterror("fd3b", "**3.2(A) Please Enter Mother's Given Name");
            returnval = false;
        }
        else if (!inoutf3.match(/^[A-Z]{3,500}$/)) {
            seterror("fd3b", "**3.2(A) Please Enter valid input");
            returnval = false;
        }
        else {
            document.getElementById('fd3b').innerHTML = "";
        }
        var inoutf4 = document.forms['myForm']["fd4"].value;
        if (inoutf4.length == 0) {
            seterror("fd4b", "**3.2(B) Please Enter Mother's Given Name");
            returnval = false;
        }
        else if (!inoutf4.match(/^[A-Z]{3,500}$/)) {
            seterror("fd3b", "**3.2(B) Please Enter valid input");
            returnval = false;
        }
        else {
            document.getElementById('fd4b').innerHTML = "";
        }
        var inoutf5 = document.forms['myForm']["fd5"].value;
        if (inoutf5.length == 0) {
            seterror("fd5b", "**3.3(A) Please Enter Legal Guardian's Given Name ");
            returnval = false;
        }
        else if (!inoutf5.match(/^[A-Z]{3,500}$/)) {
            seterror("fd5b", "**3.3(A) Please Enter valid input");
            returnval = false;
        }
        else {
            document.getElementById('fd5b').innerHTML = "";
        }
        var inoutf6 = document.forms['myForm']["fd6"].value;
        if (inoutf6.length == 0) {
            seterror("fd6b", "**3.3(B) Please Enter Legal Guardian's Given Name ");
            returnval = false;
        }
        else if (!inoutf6.match(/^[A-Z]{3,500}$/)) {
            seterror("fd6b", "**3.3(B) Please Enter valid input");
            returnval = false;
        }
        else {
            document.getElementById('fd6b').innerHTML = "";
        }
        var inoutf7 = document.forms['myForm']["fd7"].value;
        if (inoutf7.length == 0) {
            seterror("fd7b", "**3.4(A) Please Enter Spouse's Given Name");
            returnval = false;
        }
        else if (!inoutf.match(/^[A-Z]{3,500}$/)) {
            seterror("fd7b", "**3.4(A) Please Enter valid input");
            returnval = false;
        }
        else {
            document.getElementById('fd7b').innerHTML = "";
        }
        var inoutf8 = document.forms['myForm']["fd8"].value;
        if (inoutf8.length == 0) {
            seterror("fd8b", "**3.4(B) Please Enter Spouse's Given Name");
            returnval = false;
        }
        else if (!inoutf8.match(/^[A-Z]{3,500}$/)) {
            seterror("fd8b", "**3.4(B) Please Enter valid input");
            returnval = false;
        }
        else {
            document.getElementById('fd8b').innerHTML = "";
        }
        var inoutf9 = document.forms['myForm']["fd9"].value;
        if (inoutf9.length == 0) {
            seterror("fd9b", "**3.5(A) Please Enter Father/ Legal Guardian's File/ Passport Number");
            returnval = false;
        }
        else if (!inoutf9.match(/^[0-9]{10,12}$/)) {
            seterror("fd9b", "**3.5(A) Please Enter valid input( File/ Passport Number)");
            returnval = false;
        }
        else {
            document.getElementById('fd9b').innerHTML = "";
        }
    
        var inoutf10 = document.forms['myForm']["fd10"].value;
        if (inoutf10.length == 0) {
            seterror("fd10b", "**3.5(B) Please Enter Father/ Legal Guardian's Nationality, if not Indian");
            returnval = false;
        }
        else if (!inoutf10.match(/^[A-Z]{3,15}$/)) {
            seterror("fd10b", "**3.5(B) Please Enter valid input");
            returnval = false;
        }
        else {
            document.getElementById('fd10b').innerHTML = "";
        }
        var inoutf11 = document.forms['myForm']["fd11"].value;
        if (inoutf11.length == 0) {
            seterror("fd11b", "**3.5(C) Please Enter Mother/ Legal Guardian's Nationality, if not Indian");
            returnval = false;
        }
        else if (!inoutf11.match(/^[A-Z]{3,15}$/)) {
            seterror("fd11b", "**3.5(C) Please Enter valid input");
            returnval = false;
        }
        else {
            document.getElementById('fd11b').innerHTML = "";
        }
        var inoutf12 = document.forms['myForm']["fd12"].value;
        if (inoutf12.length == 0) {
            seterror("fd12b", "**3.5(D) Please EnterMother/ Legal Guardian's File/ Passport Numbe");
            returnval = false;
        }
        else if (!inoutf12.match(/^[0-9]{10,12}$/)) {
            seterror("fd12b", "**3.5(D) Please Enter valid input( File/ Passport Number)");
            returnval = false;
        }
        else {
            document.getElementById('fd12b').innerHTML = "";
        }
         // this is for 4
    var pra1 = document.forms['myForm']["wapr1"].value;
    if (pra1.length == 0) {
        seterror("PRAD1", "**4.A Please Enter House No. & Street Name");
        returnval = false;
    }
    else if (!pra1.match(/^[a-zA-Z0-9\s\,\''\-]{10,500}$/)) {
        seterror("PRAD1", "4.A Please Enter valid House No. & Street Name ");
    }
    else {
        seterror("PRAD1", "")
    }

    var pra2 = document.forms['myForm']["wapr2"].value;
    if (pra2.length == 0) {
        seterror("PRAD2", "**.B Please Enter PIN");
        returnval = false;
    }
    else if (!pra2.match(/^[0-9]{6,8}$/)) {
        seterror("PRAD1", "4.A Please Enter valid House No. & Street Name ");
    }
    else {
        seterror("PRAD1", "")
    }
    var pra3 = document.forms['myForm']["wapr3"].value;
    if (pra3.length == 0) {
        seterror("PRAD3", "**.C Please Enter State/UT");
        returnval = false;
    }
    else if (!pra3.match(/^[A-Z]{10,15}$/)) {
        seterror("PRAD3", "**.(C) Please Enter valid input");
        returnval = false;
    }
    else {
        document.getElementById('PRAD3').innerHTML = "";
    }
    var pra4 = document.forms['myForm']["wapr4"].value;
    if (pra4.length == 0) {
        seterror("PRAD4", "**.D Please Enter Village/City ");
        returnval = false;
    }
    else if (!pra4.match(/^[A-Z]{10,500}$/)) {
        seterror("PRAD4", "**.(D) Please Enter valid city");
        returnval = false;
    }
    else {
        document.getElementById('PRAD4').innerHTML = "";
    }

    var pra5 = document.forms['myForm']["wapr5"].value;
    if (pra5.length == 0) {
        seterror("PRAD5", "**.E Please Enter District");
        returnval = false;
    }
    else if (!pra5.match(/^[A-Z]{10,15}$/)) {
        seterror("PRAD5", "**.(E) Please Enter valid District");
        returnval = false;
    }
    else {
        document.getElementById('PRAD5').innerHTML = "";
    }

    var pra6 = document.forms['myForm']["wapr6"].value;
    if (pra6.length == 0) {
        seterror("PRAD6", "**.F Please Enter Police Station");
        returnval = false;
    }
    else if (!pra6.match(/^[A-Z]{10,15}$/)) {
        seterror("PRAD6", "**.(F) Please Enter valid District");
        returnval = false;
    }
    else {
        document.getElementById('PRAD6').innerHTML = "";
    }

    var pra7 = document.forms['myForm']["wapr7"].value;
    if (pra7.length == 0) {
        seterror("PRAD7", "**.G Please Enter E-mail ID");
        returnval = false;
    }
    else if (!pra7.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        seterror("PRAD7", ".G Please Enter valid E-mail IDs ");
    }
    else {
        seterror("PRAD7", "")
    }
    var pra8 = document.forms['myForm']["wapr8"].value;
    if (pra8.length == 0) {
        seterror("PRAD8", "**.H Please Enter Mobile Number");
        returnval = false;
    }
    else if (!pra8.match(/^[6-9]\d{9}$/)) {
        seterror("PRAD8", ".H Please Enter valid Mobile Number");
    }
    else {
        seterror("PRAD8", "")
    }
    var pra9 = document.getElementById('yes4.2');
    var pra10 = document.getElementById('no4.2');
    if (pra9.checked == true || pra10.checked == true) {
        document.getElementById("PRAD9").innerHTML = "";
    }
    else {
        seterror("PRAD9", "**4.2 Please Enter permanent address same as present address?	");
        returnval = false;
    }
     //this is for 5th

    var ecd1 = document.forms['myForm']["Pwec1"].value;
    if (ecd1.length == 0) {
        seterror("ECD1", "**5.A Please Enter Name and Address");
        returnval = false;
    }
    var ecd2 = document.forms['myForm']["Pwec2"].value;
    if (ecd2.length == 0) {
        seterror("ECD2", "**5.B Please Enter E-mail ID");
        returnval = false;
    }
    else if (!ecd2.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        seterror("ECD2", "**5.B Please Enter valid E-mail ID ");
    }
    else {
        seterror("ECD2", "")
    }
    var ecd3 = document.forms['myForm']["Pwec3"].value;
    if (ecd3.length == 0) {
        seterror("ECD3", "**5.C Please Enter Mobile No");
        returnval = false;
    }
    else if (!ecd3.match(/^[6-9]\d{9}$/)) {
        seterror("ECD3", "5.C Please Enter valid Mobile No");
    }
    else {
        seterror("ECD3", "")
    }
    var ecd4 = document.forms['myForm']["Pwec4"].value;
    if (ecd4.length == 0) {
        seterror("ECD4", "**5.D Please EnterTelephone No");
        returnval = false;
    }
    else if (!ecd4.match(/^[6-9]\d{9}$/)) {
        seterror("ECD4", "5.D Please valid EnterTelephone No");
    }
    else {
        seterror("ECD4", "")
    }
    // //this is for 6th 

    var pd1 = document.forms['myForm']["NPPADP1"].value;
    if (pd1.length == 0) {
        seterror("PPAD1", "**6.1(A) Please Enter Passport/Identity Certificate Number");
        returnval = false;
    }
    else if (!pd1.match(/^[0-9]{10}$/)) {
        seterror("PPAD1", "6.1(A) Please Enter **valid Passport/Identity Certificate Number");
    }
    else {
        seterror("PPAD1", "")
    }
    var pd2 = document.forms['myForm']["PPADP2"].value;
    if (pd2.length == 0) {
        seterror("PPAD2", "**6.1(B) Please Enter Place of Issue");
        returnval = false;
    }
    else if (!pd2.match(/^[A-Z]{3,15}$/)) {
        seterror("PPAD2", "**6.1(B) Please Enter **valid Place of Issue");
        returnval = false;
    }
    else {
        seterror("PRAD2", "");
    }
    //  thsi is issue date 

    var pd3 = document.forms['myForm']["PPADP3"].value;
    var daten = new Date(pd3);
    if (pd3.length == 0) {
        seterror("PPAD3", "**6.1(C) Please Select Date of Issue (DD-MM-YYYY)");
        returnval = false;
    }
    else if (daten >= currentdate) {
        seterror("PPAD3", "6.1(C)future date can not be allowed");
        returnval = false;
    }
    // expiry date 
    var pd4 = document.forms['myForm']["PPADP4"].value;
    var expiryn = new Date(pd4);
    if (pd4.length == 0) {
        seterror("PPAD4", "**6.1(D) Please Select Date of Expiry (DD-MM-YYYY)");
        returnval = false;
    }
    else if (daten >= expiryn) {
        seterror("PPAD4", "6.1(D) Expity Date not less then date of issue");
        returnval = false;
    }
    var pd5 = document.forms['myForm']["PPADP5"].value;
    if (pd5.length == 0) {
        seterror("PPAD5", "**6.2(A) Please Enter File Number");
        returnval = false;
    }
    var pd6 = document.forms['myForm']["PPADP6"].value;
    if (pd6.length == 0) {
        seterror("PPAD6", "**6.2(B) Please Enter Month and Year of applying");
        returnval = false;
    }
    var pd7 = document.forms['myForm']["PPADP7"].value;
    if (pd7.length == 0) {
        seterror("PPAD7", "**6.2(C) Please Enter Name of passport office where applied");
        returnval = false;
    }
    var PD9 = document.getElementById('yes6.2');
    var PD10 = document.getElementById('no6.2');
    if (PD9.checked == true || PD10.checked == true) {
        document.getElementById("PPAD8").innerHTML = "";
    }
    else {
        seterror("PPAD8", "**6.2 Please Enter Have you ever applied for passport, but not issued ?	");
        returnval = false;
    }
     // this is for 7th

     var od1 = document.getElementById('yes7.1.1');
     var od2 = document.getElementById('no7.1.1');
     if (od1.checked == true || od2.checked == true) {
         document.getElementById("OOD1").innerHTML = "";
     }
     else {
         seterror("OOD1", "**7.1.1 Please Select");
         returnval = false;
     }
     var od3 = document.getElementById('yes7.1.2');
     var od4 = document.getElementById('no7.1.2');
     if (od3.checked == true || od4.checked == true) {
         document.getElementById("OOD2").innerHTML = "";
     }
     else {
         seterror("OOD2", "**7.1.2 Please Select ");
         returnval = false;
     }
     var od6 = document.getElementById('yes7.1.3');
     var od5 = document.getElementById('no7.1.3');
     if (od6.checked == true || od5.checked == true) {
         document.getElementById("OOD3").innerHTML = "";
     }
     else {
         seterror("OOD3", "**7.1.3 Please Select");
         returnval = false;
     }
     var od7 = document.getElementById('yes7.1.4');
     var od8 = document.getElementById('no7.1.4');
     if (od7.checked == true || od8.checked == true) {
         document.getElementById("OOD4").innerHTML = "";
     }
     else {
         seterror("OOD4", "**7.1.4 Please Select");
         returnval = false;
     }
     var od9 = document.getElementById('yes7.2.1');
     var od10 = document.getElementById('no7.2.1');
     if (od9.checked == true || od10.checked == true) {
         document.getElementById("OOD6").innerHTML = "";
     }
     else {
         seterror("OOD6", "**7.2.1 Please Select");
         returnval = false;
     }
     var od11 = document.getElementById('yes7.3.1');
     var od12 = document.getElementById('no7.3.1');
     if (od11.checked == true || od12.checked == true) {
         document.getElementById("OOD7").innerHTML = "";
     }
     else {
         seterror("OOD7", "**7.3.1 Please Select");
         returnval = false;
     }
     var od13 = document.getElementById('yes7.3.2');
     var od14 = document.getElementById('no7.3.2');
     if (od13.checked == true || od14.checked == true) {
         document.getElementById("OOD8").innerHTML = "";
     }
     else {
         seterror("OOD8", "**7.3.2 Please Select");
         returnval = false;
     }
     var od16 = document.getElementById('yes7.3.3');
     var od15 = document.getElementById('no7.3.3');
     if (od16.checked == true || od15.checked == true) {
         document.getElementById("OOD9").innerHTML = "";
     }
     else {
         seterror("OOD9", "**7.3.3 Please Select");
         returnval = false;
     }
     var od17 = document.getElementById('yes7.4.1');
     var od18 = document.getElementById('no7.4.1');
     if (od17.checked == true || od18.checked == true) {
         document.getElementById("OOD10").innerHTML = "";
     }
     else {
         seterror("OOD10", "**7.4.1 Please Select");
         returnval = false;
     }
 
     var od19 = document.getElementById('yes7.4.2');
     var od20 = document.getElementById('no7.4.2');
     if (od19.checked == true || od20.checked == true) {
         document.getElementById("OOD11").innerHTML = "";
     }
     else {
         seterror("OOD11", "**7.4.2 Please Select");
         returnval = false;
     }
     var od21 = document.getElementById('yes7.4.3');
     var od22 = document.getElementById('no7.4.3');
     if (od21.checked == true || od22.checked == true) {
         document.getElementById("OOD12").innerHTML = "";
     }
     else {
         seterror("OOD12", "**7.4.3 Please Select");
         returnval = false;
     }
     var od23 = document.getElementById('yes7.4.4');
     var od24 = document.getElementById('no7.4.4');
     if (od23.checked == true || od24.checked == true) {
         document.getElementById("OOD13").innerHTML = "";
     }
     else {
         seterror("OOD13", "**7.4.4 Please Select");
         returnval = false;
     }
     var od25 = document.getElementById('yes7.5.1');
     var od26 = document.getElementById('no7.5.1');
     if (od25.checked == true || od26.checked == true) {
         document.getElementById("OOD14").innerHTML = "";
     }
     else {
         seterror("OOD14", "**7.5.1 Please Select");
         returnval = false;
     }
     var od27 = document.getElementById('yes7.5.2');
     var od28 = document.getElementById('no7.5.2');
     if (od27.checked == true || od28.checked == true) {
         document.getElementById("OOD15").innerHTML = "";
     }
     else {
         seterror("OOD15", "**7.5.2 Please Select");
         returnval = false;
     }
     var od29 = document.getElementById('yes7.5.2');
     var od30 = document.getElementById('no7.5.2');
     if (od29.checked == true || od30.checked == true) {
         document.getElementById("OOD16").innerHTML = "";
     }
     else {
         seterror("OOD16", "**7.5.2 Please Select");
         returnval = false;
     }
    // this is for 8th 
    var psk1 = document.forms['myForm']["feea"].value;
    if (psk1.length == 0) {
        seterror("PSK1", "**8.1(A) Fee amount in (Rs)");
        returnval = false;
    }
    else if (!psk1.match(/^[0-9]{10}$/)) {
        seterror("PSK1", "8.1(A) Please Fee amount valiid inpurt for (Rs)");
    }
    else {
        seterror("PSK1", "")
    }
    var psk2 = document.forms['myForm']["feed"].value;
    if (psk2.length == 0) {
        seterror("PSK2", "**8.1(B) DD Number");
        returnval = false;
    }
    else if (!psk2.match(/^\d+\.\d{0,2}$/)) {
        seterror("PSK2", "**8.1(B)Please Ente valid DD Number");
        returnval = false;
    }
    //  this is for date of expiry and 

    var psk3 = document.forms['myForm']["ddissue"].value;
    var date123 = new Date(psk3);
    if (psk3.length == 0) {
        seterror("PSK3", "**8.1(C) DD Issue Date (DD-MM-YYYY)");
        returnval = false;
    }
    else if (date123 >= currentdate) {
        seterror("PSK3", "8.1(C)future date can not be allowed");
        returnval = false;
    }
    // for date of issue 
    var psk4 = document.forms['myForm']["ddexpir"].value;
    var expiry = new Date(psk4);
    if (psk4.length == 0) {
        seterror("PSK4", "**8.1(D) DD Expiry Date (DD-MM-YYYY)");
        returnval = false;
    }
    else if (date123 >= expiry) {
        seterror("PSK4", "8.1(D) Expity Date not less then date of issue");
        returnval = false;
    }
    var psk5 = document.forms['myForm']["bname"].value;
    if (psk5.length == 0) {
        seterror("PSK5", "**8.1(E) Branch Name");
        returnval = false;
    }


       // this is for 9th
    var ec1 = document.forms['myForm']["Enclosures1"].value;
    if (ec1.length == 0) {
        seterror("enc1", "**9.(A)Enclosures");
        returnval = false;
    }
    var ec2 = document.forms['myForm']["Enclosures2"].value;
    if (ec2.length == 0) {
        seterror("enc2", "**9.(B)Enclosures");
        returnval = false;
    }
    var ec3 = document.forms['myForm']["Enclosures3"].value;
    if (ec3.length == 0) {
        seterror("enc3", "**9.(C)Enclosures");
        returnval = false;
    }
    var ec4 = document.forms['myForm']["Enclosures4"].value;
    if (ec4.length == 0) {
        seterror("enc4", "**9.(D)Enclosures");
        returnval = false;
    }
    var ec5 = document.forms['myForm']["Enclosures5"].value;
    if (ec5.length == 0) {
        seterror("enc5", "**9.(E)Enclosures");
        returnval = false;
    }
    var ecs1 = document.forms['myForm']["Enclosures6"].value;
    if (ecs1.length == 0) {
        seterror("enc6", "**9.(F)Enclosures");
        returnval = false;
    }
    var ecs2 = document.forms['myForm']["Enclosures7"].value;
    if (ecs2.length == 0) {
        seterror("enc7", "**9.(G)Enclosures");
        returnval = false;
    }
    var ecs3 = document.forms['myForm']["Enclosures8"].value;
    if (ecs3.length == 0) {
        seterror("enc8", "**9.(H)Enclosures");
        returnval = false;
    }
    var ecs4 = document.forms['myForm']["Enclosures9"].value;
    if (ecs4.length == 0) {
        seterror("enc9", "**9.(I)Enclosures");
        returnval = false;
    }
    var ecs5 = document.forms['myForm']["Enclosures10"].value;
    if (ecs5.length == 0) {
        seterror("enc10", "**9.(J)Enclosures");
        returnval = false;
    }

    var SD1 = document.forms['myForm']["placeL1"].value;
    if (SD1.length == 0) {
        seterror("nnL1", "**10(A) Please Enter Place Name");
        returnval = false;
    }
    else if (!SD1.match(/^[A-Z]{5,15}$/)) {
        seterror("nnL1", "**.10(A) Please Enter valid Place Name");
        returnval = false;
    }
    else {
        document.getElementById('nnL1').innerHTML = "";
    }
    var SD2 = document.forms['myForm']["placeL2"].value;
    if (SD2.length == 0) {
        seterror("nnL2", "**10(B) Please Enter Date-");
        returnval = false;
    }



    //     var fileimg = document.forms['myform']['filno1'].value;
    //     if (fileimg.length == 0) {
    //     seterror('forimg2','Please upload your img');
    //     returnval = false;
    //     }
    //     else if(!fileimg.match(/^\w+\.(png|jpg|jpeg)$/)){
    //         seterror('forsign2','Please upload your img');
    //         returnval = false;
    //     }
    //     else {

    //     }

    //     var filesig = document.forms['myform']['filno2'].value;
    //     if (filesig.length == 0) {
    //         seterror('forsign2', 'Please signSignature/ Left Hand Thumb  your img');
    //         returnval = false;
    //     }
    //     else if(filesig == 0){
    //         seterror('forsign2','Please upload your img');
    //     returnval = false;
    //     }
    //     else {
    // seterror ('forsign2','')
    //     }
return returnval;
}