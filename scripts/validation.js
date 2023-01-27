const kp1 = document.querySelector("#keyphrase");
const kp2 = document.querySelector("#keyphrase2");
const message = document.querySelector("#formmessage");
const iuser = document.querySelector("#iuser");
const ouser = document.querySelector("#ouser");
const iemail = document.querySelector("#iemail");
const oemail = document.querySelector("#oemail");
const irating = document.querySelector("#r");
const orating = document.querySelector("#orating");
const ousername = document.querySelector("#ousername");
const myTable = document.querySelector("table");

kp1.addEventListener("focusout",validatePwd);
kp2.addEventListener("focusout",isSame);

document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById("contact").addEventListener("submit", function (e) {
    e.preventDefault()
    updateTable();
  });
});




// Displays confirmation
function updateTable() {
ouser.textContent = iuser.value;
oemail.textContent = iemail.value;
orating.textContent = irating.value;
ousername.textContent = kp2.value;
myTable.classList.toggle("show");
}

// Check that entries are correct length and not alphanumeric
function validatePwd() {
    if (kp1.value.length < 6 || kp1.value.length > 12 || isAlphaNumeric(kp1.value)) {
    kp1.style.backgroundColor = "#aa3333";
    message.textContent = "Length 6 to 12 characters and non-alphanumeric (Character is needed).";
    }
	else {
		kp1.style.backgroundColor = "#FFF";
	}
};

// Check that entries match
function isSame(){
    if(kp1.value !== kp2.value){
    kp2.style.backgroundColor = "#aa3333";
    message.textContent = "keywords do not match";
    }
	else {
		kp2.style.backgroundColor = "#FFF";
	}
}

// Check alphanumericity
function isAlphaNumeric(str) {
    var code, i, len;
  
    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if (!(code > 47 && code < 58) && // numeric (0-9)
          !(code > 64 && code < 91) && // upper alpha (A-Z)
          !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
      }
    }
    return true;
  };
