var WebApp = window.Telegram.WebApp;
var username = WebApp.initDataUnsafe.username;
var userPhoto = WebApp.initDataUnsafe.photo_url;



if (username == undefined) 
    username = 'noname'

document.getElementById('username').innerHTML = username;
document.getElementById('userphotourl').setAttribute('src', userPhoto)