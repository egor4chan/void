function locate(src) {
    var WebApp = window.Telegram.WebApp;
    WebApp.HapticFeedback.impactOccurred('light')

    if (src == 1) {
        document.getElementById('page_1').style.opacity = 1;
        document.getElementById('page_2').style.opacity = 0.4;
        document.getElementById('page_3').style.opacity = 0.4;
        document.getElementById('page_4').style.opacity = 0.4;
    }
    if (src == 2) {
        document.getElementById('page_2').style.opacity = 1;
        document.getElementById('page_1').style.opacity = 0.4;
        document.getElementById('page_3').style.opacity = 0.4;
        document.getElementById('page_4').style.opacity = 0.4;
    }
    if (src == 3) {
        document.getElementById('page_3').style.opacity = 1;
        document.getElementById('page_2').style.opacity = 0.4;
        document.getElementById('page_1').style.opacity = 0.4;
        document.getElementById('page_4').style.opacity = 0.4;
    }
    if (src == 4) {
        document.getElementById('page_4').style.opacity = 1;
        document.getElementById('page_2').style.opacity = 0.4;
        document.getElementById('page_3').style.opacity = 0.4;
        document.getElementById('page_1').style.opacity = 0.4;
    }
}