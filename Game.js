var void_cloud = document.getElementById('content_void');

function open_game(game) {
    document.getElementById('content_void').style.top = '30vh'
    document.getElementById('content_void').style.zIndex = '-100'
    document.getElementById('content_void').style.opacity = '0'

    document.getElementById('game_hold').style.top = '10vh'
    document.getElementById('game_hold').style.zIndex = '100';
    document.getElementById('game_hold').style.opacity = '1';
}