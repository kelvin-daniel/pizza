let size, email, address, hno;
size = document.getElementById('#size').value;
email = document.getElementById('#email').value;
address = document.getElementById('#address').value;
hno = document.getElementById('#hno').value;

function subscribe() {
    alert("Hi" + email + "Thank for reaching out");
    console.log(email);
}

let validateInput = () => {
    if (size === "") {
        console.log("Please specify the size");
    }
}

let validateInput = () => {
    if (address === '') {
        prompt('we need your address first')
    }
}