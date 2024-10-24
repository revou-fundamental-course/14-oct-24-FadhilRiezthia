

function validateForm() {
    let inputUsername = document.getElementById('input-username').value;
    var inputDate = document.getElementById('date-birth').value;
    //let inputlakilaki = document.getElementById('laki-laki').value;
    //let inputperempuan = document.getElementById('perempuan').value;
    let gender;
    let inputmessage = document.getElementById('message').value;

    if (document.getElementById('laki-laki').checked){
        gender = document.getElementById('laki-laki').value;
    } else if (document.getElementById('perempuan').checked){
        gender = document.getElementById('perempuan').value;
    }

    if (inputUsername == ''){
        alert ('Input kosong');
    }else if (inputDate == ''){
        alert ('Input kosong');
    }else if(gender == ''){
        alert ('Input kosong');
    }else if(inputmessage == ''){
        alert ('Input kosong');
    }
    else{
        document.getElementById('input-username');
        document.getElementById('datetime-local');
        document.getElementById('jenis-kelamin')
        document.getElementById('output').innerHTML = 
        '<p>Username:(' + inputUsername + ')' + 
        '<p>Tanggal lahir:(' + inputDate + ')' + 
        '<p>Jenis kelamin:(' + gender + ')' +
        '<p>Pesan:(' + inputmessage + ')';
        console.log(inputUsername);
        console.log(inputDate);
        console.log(gender);
        console.log(inputmessage);
    }
    
    
}

let indexSlide = 1;
showDivs(indexSlide);

function plusDivs(n) {
    showDivs(indexSlide += n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide");
    if (n > x.length) {indexSlide = 1}
    if (n < 1) {indexSlide = x.length}
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    x[indexSlide-1].style.display = "block";
}
