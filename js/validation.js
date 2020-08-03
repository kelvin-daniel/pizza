let size, email, address, hno;
size = document.getElementById('#size').value;
email = document.getElementById('#email').value;
address = document.getElementById('#address').value;
hno = document.getElementById('#hno').value;

function subscribe() {
    alert("Thank you for reaching out");
    console.log(email);
}

let validateInput = () => {
    if (size === "") {
        console.log("Please specify the size");
    }
}

