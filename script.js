let is24HourFormat = false;

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    let ampm = '';

    if (!is24HourFormat) {
        ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;  // Convert to 12-hour format
    }

    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    document.getElementById('ampm').textContent = ampm;
}

function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    document.getElementById('toggleFormat').textContent = is24HourFormat
        ? 'Switch to 12-Hour Format'
        : 'Switch to 24-Hour Format';
}

document.getElementById('toggleFormat').addEventListener('click', toggleFormat);

setInterval(updateClock, 1000);
updateClock();
