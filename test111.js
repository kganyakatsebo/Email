let a
let b
let c
let d
let e
let total = 5
let percent
let mark
let name
let aa
let bb
let cc
let dd
let ee
let sender = "simonnthoesane@gmail.com"

function sendEmail(){
    Email.send({
        SecureToken: "7a0e2e72-9be0-47ff-a945-861e07915cd3",
        
        To : 'kganyakatsebo@gmail.com',
        From : sender,
        Subject : "Name: " + name,
        Body : 
         "<br> Mark: "+ percent + "%"
       
    }).then(
    message => alert("Marks Sent")
    );
}

document.getElementById("submit").onclick = function(){
    const a = document.getElementById("a1").value
    if(document.getElementById("a1").checked){
        document.getElementById("r1").innerHTML = "Correct"
        aa = 1
    }
    else{
        document.getElementById("r1").innerHTML = "Incorrect"
        aa = 0
    }

    const b = document.getElementById("a2").value
    if(document.getElementById("a2").checked){
        document.getElementById("r2").innerHTML = "Correct"
        bb = 1
    }
    else{
        document.getElementById("r2").innerHTML = "Incorrect"
        bb = 0
    }
    const c = document.getElementById("a3").value
    if(document.getElementById("a3").checked){
        document.getElementById("r3").innerHTML = "Correct"
        cc = 1
    }
    else{
        document.getElementById("r3").innerHTML = "Incorrect"
        cc = 0
    }
    const d = document.getElementById("a4").value
    if(document.getElementById("a4").checked){
        document.getElementById("r4").innerHTML = "Correct"
        dd = 1
    }
    else{
        document.getElementById("r4").innerHTML = "Incorrect"
        dd = 0
    }
    const e = document.getElementById("a5").value
    if(document.getElementById("a5").checked){
        document.getElementById("r5").innerHTML = "Correct"
        ee = 1
    }
    else{
        document.getElementById("r5").innerHTML = "Incorrect"
        ee = 0
    }
mark = aa + bb + cc + dd + ee
percent = (mark / total) * 100
if(mark >= 3 ){
document.getElementById("results").innerHTML = "You have obtained " + percent +"% <br> you have passed" 
}
else{
    document.getElementById("results").innerHTML = "You have obtained " + percent +"% <br> you have failed" 

}
name = document.getElementById("name").value 
    document.getElementById("welcome").innerHTML = "Learner " + name
}





