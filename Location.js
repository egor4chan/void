var LocationNow = 1;

check_location()

function check_location() {
    if (LocationNow == 1) {
        document.getElementById('content_void').style.top = '10vh'
        document.getElementById('content_void').style.zIndex = '100';
        document.getElementById('content_void').style.opacity = '1';

        document.getElementById('content_tasks').style.top = '30vh'
        document.getElementById('content_tasks').style.zIndex = '-100'
        document.getElementById('content_tasks').style.opacity = '0'
        document.getElementById('content_frens').style.top = '30vh'
        document.getElementById('content_frens').style.zIndex = '-100'
        document.getElementById('content_frens').style.opacity = '0'
        document.getElementById('content_top').style.top = '30vh'
        document.getElementById('content_top').style.zIndex = '-100'
        document.getElementById('content_top').style.opacity = '0'

        document.body.style.backgroundColor = 'rgb(247, 247, 247)'
    }
    if (LocationNow == 2) {
        document.getElementById('content_tasks').style.top = '10vh'
        document.getElementById('content_tasks').style.zIndex = '100';
        document.getElementById('content_tasks').style.opacity = '1';

        document.getElementById('content_void').style.top = '30vh'
        document.getElementById('content_void').style.zIndex = '-100'
        document.getElementById('content_void').style.opacity = '0'
        document.getElementById('content_frens').style.top = '30vh'
        document.getElementById('content_frens').style.zIndex = '-100'
        document.getElementById('content_frens').style.opacity = '0'
        document.getElementById('content_top').style.top = '30vh'
        document.getElementById('content_top').style.zIndex = '-100'
        document.getElementById('content_top').style.opacity = '0'

        document.body.style.backgroundColor = 'rgb(247, 247, 247)'
    }
    if (LocationNow == 3) {
        document.getElementById('content_frens').style.top = '10vh'
        document.getElementById('content_frens').style.zIndex = '100';
        document.getElementById('content_frens').style.opacity = '1';

        document.getElementById('content_void').style.top = '30vh'
        document.getElementById('content_void').style.zIndex = '-100'
        document.getElementById('content_void').style.opacity = '0'
        document.getElementById('content_tasks').style.top = '30vh'
        document.getElementById('content_tasks').style.zIndex = '-100'
        document.getElementById('content_tasks').style.opacity = '0'
        document.getElementById('content_top').style.top = '30vh'
        document.getElementById('content_top').style.zIndex = '-100'
        document.getElementById('content_top').style.opacity = '0'

        document.body.style.backgroundColor = 'white'

        WebApp.headerColor = '#ffffff'
        WebApp.backgroundColor = '#ffffff';
        WebApp.bottomBarColor = '#ffffff'
    }
    if (LocationNow == 4) {
        document.getElementById('content_top').style.top = '10vh'
        document.getElementById('content_top').style.zIndex = '100';
        document.getElementById('content_top').style.opacity = '1';

        document.getElementById('content_void').style.top = '30vh'
        document.getElementById('content_void').style.zIndex = '-100'
        document.getElementById('content_void').style.opacity = '0'
        document.getElementById('content_tasks').style.top = '30vh'
        document.getElementById('content_tasks').style.zIndex = '-100'
        document.getElementById('content_tasks').style.opacity = '0'
        document.getElementById('content_frens').style.top = '30vh'
        document.getElementById('content_frens').style.zIndex = '-100'
        document.getElementById('content_frens').style.opacity = '0'

        document.body.style.backgroundColor = 'rgb(247, 247, 247)'
    }
}

function locate(src) {
    var WebApp = window.Telegram.WebApp;
    WebApp.HapticFeedback.impactOccurred('light')

    if (src == 1) {
        document.getElementById('page_1').style.opacity = 1;
        document.getElementById('page_2').style.opacity = 0.4;
        document.getElementById('page_3').style.opacity = 0.4;
        document.getElementById('page_4').style.opacity = 0.4;
        LocationNow = 1;
    }
    if (src == 2) {
        document.getElementById('page_2').style.opacity = 1;
        document.getElementById('page_1').style.opacity = 0.4;
        document.getElementById('page_3').style.opacity = 0.4;
        document.getElementById('page_4').style.opacity = 0.4;
        LocationNow = 2;
    }
    if (src == 3) {
        document.getElementById('page_3').style.opacity = 1;
        document.getElementById('page_2').style.opacity = 0.4;
        document.getElementById('page_1').style.opacity = 0.4;
        document.getElementById('page_4').style.opacity = 0.4;
        LocationNow = 3;
    }
    if (src == 4) {
        document.getElementById('page_4').style.opacity = 1;
        document.getElementById('page_2').style.opacity = 0.4;
        document.getElementById('page_3').style.opacity = 0.4;
        document.getElementById('page_1').style.opacity = 0.4;
        LocationNow = 4;
    }

    check_location()
}