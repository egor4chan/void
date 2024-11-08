var notify = document.getElementById('notify');
var notify_message = document.getElementById('message')

var notify_status = 0


function send_notify(message) {
    if (notify_status == 0) {
        notify_status = 1
        notify.style.top = '20px';
        notify_message.innerHTML = message;

        setTimeout(() => {
            notify.style.top = '-100px'
            notify_status = 0
        }, 3000)
    }
    if (notify_status == 1) {
        return
    }
}

