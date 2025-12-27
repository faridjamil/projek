function updateCountdown() {
    const targetDate = new Date("August 19, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = targetDate - now;

    // Logika perhitungan waktu
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    // Update tampilan ke HTML
    document.getElementById("days").innerText = d < 10 ? "0" + d : d;
    document.getElementById("hours").innerText = h < 10 ? "0" + h : h;
    document.getElementById("minutes").innerText = m < 10 ? "0" + m : m;
    document.getElementById("seconds").innerText = s < 10 ? "0" + s : s;

    if (gap < 0) {
        clearInterval(timer);
        document.querySelector(".glass-container").innerHTML = "<h1>Hari yang Dinanti Telah Tiba!</h1>";
    }
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown(); // Jalankan langsung saat loadscript.js
