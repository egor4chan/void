var WebApp = window.Telegram.WebApp;
WebApp.expand()

WebApp.headerColor = '#f7f7f7'
WebApp.backgroundColor = '#f7f7f7';
WebApp.bottomBarColor = '#f7f7f7'

function remove_dr() {
    document.getElementById('dailyreward').style.bottom = '-400px';
    document.getElementById('content_void').style.filter = 'blur(0px)'
}

function daily_reward() {
    document.getElementById('dailyreward').style.bottom = '0px';
    document.getElementById('content_void').style.filter = 'blur(20px)'
}

daily_reward()