let nameInput = document.getElementById('nameInput');
let emailInput = document.getElementById('emailInput');
let passwordInput = document.getElementById('passwordInput');
let cartona;
let SignEmail = document.getElementById('SignEmail');
let SignPass = document.getElementById('SignPass');
if (localStorage.getItem('user') != null) {
    cartona = JSON.parse(localStorage.getItem('user'));
}
else {
    cartona = [];
}

function addUser() {
    let user = {
        Name: nameInput.value,
        Email: emailInput.value,
        Pass: passwordInput.value
    }
    let emailExists = cartona.some((existingUser) => existingUser.Email === emailInput.value);
    let NameExists = cartona.some((existingUser) => existingUser.Name === nameInput.value);

    if (emailExists || NameExists) {
        window.alert(`This Name/Email Used Before.
                    Please Enter Another Name/Email.`);
    } else {
        cartona.push(user);
        localStorage.setItem('user', JSON.stringify(cartona));
        window.alert(`User added successfully!`);
        window.location.href = 'SignIn.html';
        document.getElementById('name').innerHTML = `Hello ${cartona.Name}`;

    }
}
function signIn() {
    let user = {
      Email: SignEmail.value,
      Pass: SignPass.value
    };
    let foundUser = cartona.find(existingUser => existingUser.Email === SignEmail.value);
  
    if (foundUser && foundUser.Pass === SignPass.value) {
      window.location.href = 'Home.html';
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
    } else {
      window.alert(`This Email/Pass is incorrect. Please SignUp`);
    }
  }