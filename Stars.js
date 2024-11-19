var WebApp = window.Telegram.WebApp;

var invoice = WebApp.createInvoiceLink(
    title = 'Boost',
    description = 'Earn points instant.',
    payload = '{}',
    currency = 'XTR',
    prices = [{'amount': 100, 'label': "Boost"}]
)

alert('Invoice: ', invoice)