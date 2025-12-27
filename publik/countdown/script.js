function updateCountdown() {
    const targetDate = new Date("Jan 1, 2026 00:00:00").getTime();
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

    // Update ke DOM
    document.getElementById("days").innerText = d < 10 ? '0' + d : d;
    document.getElementById("hours").innerText = h < 10 ? '0' + h : h;
    document.getElementById("minutes").innerText = m < 10 ? '0' + m : m;
    document.getElementById("seconds").innerText = s < 10 ? '0' + s : s;

    // Jika waktu habis
    if (gap < 0) {
        document.querySelector(".hero h1").innerText = "Selamat Tahun Baru 2026!";
        document.getElementById("countdown").style.display = "none";
    }
}

// Jalankan fungsi setiap detik
setInterval(updateCountdown, 1000);

// Panggil sekali di awal agar tidak menunggu 1 detik pertama
updateCountdown();
