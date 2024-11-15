function boost() {
    document.getElementById('boostcloud').style.bottom = '0%';
    document.getElementById('content_top').style.filter = 'blur(10px)'
}

function buy_rank() {
    var WebApp = window.Telegram.WebApp;
    WebApp.HapticFeedback.impactOccurred('light')
    
}

function close_boost() {
    document.getElementById('boostcloud').style.bottom = '-90%';
    document.getElementById('content_top').style.filter = 'blur(0px)'
}

function select(pos) {
    var WebApp = window.Telegram.WebApp;
    WebApp.HapticFeedback.impactOccurred('light')
    if (pos == 1) {
        document.getElementById('s1').style.border = '1px solid blue'

        document.getElementById('s2').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s3').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s4').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s5').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s6').style.border = '1px solid rgb(220, 220, 220)'
    }
    if (pos == 2) {
        document.getElementById('s2').style.border = '1px solid blue'

        document.getElementById('s1').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s3').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s4').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s5').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s6').style.border = '1px solid rgb(220, 220, 220)'
    }
    if (pos == 3) {
        document.getElementById('s3').style.border = '1px solid blue'

        document.getElementById('s2').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s1').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s4').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s5').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s6').style.border = '1px solid rgb(220, 220, 220)'
    }
    if (pos == 4) {
        document.getElementById('s4').style.border = '1px solid blue'

        document.getElementById('s2').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s3').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s1').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s5').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s6').style.border = '1px solid rgb(220, 220, 220)'
    }
    if (pos == 5) {
        document.getElementById('s5').style.border = '1px solid blue'

        document.getElementById('s2').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s3').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s4').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s1').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s6').style.border = '1px solid rgb(220, 220, 220)'
    }
    if (pos == 6) {
        document.getElementById('s6').style.border = '1px solid blue'

        document.getElementById('s2').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s3').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s4').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s5').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s1').style.border = '1px solid rgb(220, 220, 220)'
    }
}