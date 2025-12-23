// script.js — load yasin.json and render ayat with search, font size, and dark mode toggles.
async function loadAyat(){
  try{
    const res = await fetch('yasin.json');
    const data = await res.json();
    const container = document.getElementById('surah-content');
    container.innerHTML = '';
    data.forEach(item=>{
      const card = document.createElement('article');
      card.className = 'ayat';
      const meta = document.createElement('div');
      meta.className = 'meta-ayat';
      meta.innerHTML = `<div class="nomor">(${item.number})</div><div class="small">Ayat ${item.number}</div>`;
      const arabic = document.createElement('div');
      arabic.className = 'arabic';
      arabic.innerHTML = item.arabic;
      arabic.title = 'Klik untuk menyalin teks Arab';
      arabic.addEventListener('click', ()=>navigator.clipboard && navigator.clipboard.writeText(item.arabic));
      const terjemah = document.createElement('div');
      terjemah.className = 'terjemahan';
      terjemah.textContent = item.translation;
      card.append(meta, arabic, terjemah);
      container.appendChild(card);
    });
  }catch(err){
    document.getElementById('surah-content').innerHTML = '<div class="loading">Gagal memuat ayat. Pastikan file <code>yasin.json</code> ada di folder yang sama.</div>';
    console.error(err);
  }
}

document.getElementById('search').addEventListener('input', function(e){
  const q = e.target.value.trim().toLowerCase();
  const cards = document.querySelectorAll('.ayat');
  cards.forEach(card=>{
    const text = (card.innerText || '').toLowerCase();
    card.style.display = text.includes(q) ? '' : 'none';
  });
});

document.getElementById('toggleDark').addEventListener('click', ()=>{
  document.body.classList.toggle('dark');
});

let baseSize = 16;
document.getElementById('increase').addEventListener('click', ()=>{ baseSize+=1; document.documentElement.style.fontSize = baseSize + 'px'; });
document.getElementById('decrease').addEventListener('click', ()=>{ baseSize=Math.max(12, baseSize-1); document.documentElement.style.fontSize = baseSize + 'px'; });

window.addEventListener('DOMContentLoaded', loadAyat);
