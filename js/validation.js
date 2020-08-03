let size, email, address, hno;
size = document.getElementById('#size').value;
email = document.getElementById('#email').value;
address = document.getElementById('#address').value;
hno = document.getElementById('#hno').value;

function subscribe() {
    alert("Hi" + email + "Thank for reaching out");
    console.log(email);
}

let validateInput = (address) => {
    if (address === "") {
        console.log('we need your address first');
    }
}