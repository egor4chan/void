var void_cloud = document.getElementById('content_void');

var session = 0


function open_game_cloud() {
    document.getElementById('content_void').style.filter = 'blur(8px)'
    document.getElementById('gamespam').style.bottom = '0px';
    document.getElementById('gamespam').style.opacity = '1'
    document.getElementById('gamespam').style.zIndex = '10000';
    document.getElementById('question').style.filter = 'blur(5px)'
    document.body.style.overflowY = 'hidden'
}

function close_game_cloud() {
    document.getElementById('content_void').style.filter = 'blur(0px)'
    document.getElementById('gamespam').style.bottom = '-80%';
    document.getElementById('gamespam').style.opacity = '0'
    document.getElementById('gamespam').style.zIndex = '-10000'
    document.body.style.overflowY = 'scroll'
}

document.getElementById('clicker').addEventListener('mousedown', ()=> {
    var WebApp = window.Telegram.WebApp;
    WebApp.HapticFeedback.impactOccurred('light')
    var width = randomIntFromInterval(-10, 90);
    var elem = document.createElement('h4');
    elem.style.left = `${width}%`
    elem.innerHTML = '?'
    document.getElementById('gamespam').appendChild(elem)
})

