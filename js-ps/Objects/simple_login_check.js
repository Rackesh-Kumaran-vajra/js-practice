// Check login using username and password stored in an object.

let user = {
    username : 'admin',
    password : '1234',

}

let inputUsername = 'admin';
let inputPassword = '1234';


if(user.username === inputUsername && user.password === inputPassword){
    console.log('login successfull');

}
else{
    console.log('invalid');
}