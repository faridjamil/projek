README - Surat Yasin Offline Website
-------------------------------------
Isi paket ini:
- index.html       : Halaman utama (buka di browser)
- styles.css       : Gaya tampilan
- script.js        : Logika untuk memuat yasin.json dan fitur sederhana (pencarian, dark mode, font size)
- yasin.json       : Contoh 10 ayat pertama (ganti dengan 83 ayat penuh bila diinginkan)
- fonts/           : Letakkan file font lokal Anda di sini (lihat keterangan di bawah)

Menjadikan benar-benar offline dengan font lokal:
1) Unduh font Arabic (mis. 'Amiri-Regular.ttf' atau font lokal Anda) dan beri nama 'Arabic.ttf' lalu taruh di folder fonts/.
2) Unduh font Latin/sans (mis. 'CenturyGothic.ttf' atau lainnya) dan beri nama 'Sans.ttf' lalu taruh di folder fonts/.
3) Buka index.html di browser (double-click). Semua sumber lokal akan dimuat tanpa koneksi Internet.

Mengganti seluruh Surat Yasin:
- Ganti konten di file 'yasin.json' dengan array objek {"number":N,"arabic":"...","translation":"..."} untuk semua 83 ayat.
- Pastikan encoding UTF-8 saat menyimpan file.

Contoh objek ayat di yasin.json:
  { "number": 1, "arabic": "يس", "translation": "Yā Sīn." }

Lisensi & catatan:
- Terjemahan dalam file contoh bersifat ringkasan/sample. Bila Anda ingin terjemahan resmi (mis. Kementerian Agama RI),
  silakan ganti 'yasin.json' dengan teks terjemahan yang Anda miliki hak pakainya.

Butuh bantuan untuk mengisi seluruh 83 ayat secara otomatis? Balas pesan ini dan saya akan bantu lengkapi file yasin.json.
