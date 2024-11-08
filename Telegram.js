var WebApp = window.Telegram.WebApp;
var username = WebApp.initDataUnsafe.user.username;

alert(`photo: ${userPhoto}`)

if (username == undefined) 
    username = `id${WebApp.initDataUnsafe.user.id}`

document.getElementById('userletter').innerHTML = username[0]
document.getElementById('username').innerHTML = username;
