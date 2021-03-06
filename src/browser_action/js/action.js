document.querySelector('#go-to-options').addEventListener('click', function() {
    chrome.runtime.openOptionsPage();
});

const DEFAULT_HANDSHAKE = 'https://handshake.easychain.tech'
const DEFAULT_DNS = 'https://dns.easychain.tech'
const DEFAULT_SIA = 'https://siasky.net'

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    chrome.storage.sync.get({
        handshake: DEFAULT_HANDSHAKE,
        dns: DEFAULT_DNS,
        sia: DEFAULT_SIA
    }, function (items) {
        document.getElementById('handshake').innerHTML = items.handshake
        document.getElementById('dns').innerHTML = items.dns
        document.getElementById('sia').innerHTML = items.sia
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
