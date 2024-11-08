var WebApp = window.Telegram.WebApp;
var username = WebApp.initDataUnsafe.user.username;
var userPhoto = WebApp.initDataUnsafe.user.photo_url;

alert(`photo: ${userPhoto}`)

if (username == undefined) 
    username = `id${WebApp.initDataUnsafe.user.id}`

document.getElementById('username').innerHTML = username;
document.getElementById('userphotourl').setAttribute('src', userPhoto)