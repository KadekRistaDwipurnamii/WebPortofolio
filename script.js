// === FORM KONTAK ===
document.querySelector("#contactForm")?.addEventListener("submit", (e)=>{
  e.preventDefault();
  const fd = new FormData(e.target);
  window.location.href = `mailto:ristadwipurn@gmail.com?subject=Halo, saya ${fd.get("name")}&body=${fd.get("message")}`;
});

// === COPY EMAIL ===
document.querySelector("#copyEmail")?.addEventListener("click", ()=>{
  navigator.clipboard.writeText("ristadwipurn@gmail.com");
  document.querySelector("#copyState").textContent = "✔ Email tersalin";
  setTimeout(()=>document.querySelector("#copyState").textContent="",1500);
});

// === Kalkulator Bangun Datar ===
const bangunSelect = document.getElementById("bangun");
const rumusDiv = document.getElementById("rumus");
const inputDiv = document.getElementById("inputan");
const hitungBtn = document.getElementById("hitung");
const hasilDiv = document.getElementById("hasil");

if (bangunSelect) {
  bangunSelect.addEventListener("change", ()=>{
    inputDiv.innerHTML = "";
    hasilDiv.textContent = "";
    switch(bangunSelect.value) {
      case "persegi":
        rumusDiv.textContent = "Rumus: s × s";
        inputDiv.innerHTML = `<input id="sisi" type="number" placeholder="Masukkan sisi" class="w-full p-2 rounded-lg text-black">`;
        break;
      case "persegiPanjang":
        rumusDiv.textContent = "Rumus: p × l";
        inputDiv.innerHTML = `
          <input id="panjang" type="number" placeholder="Masukkan panjang" class="w-full p-2 rounded-lg text-black">
          <input id="lebar" type="number" placeholder="Masukkan lebar" class="w-full p-2 rounded-lg text-black">`;
        break;
      case "segitiga":
        rumusDiv.textContent = "Rumus: ½ × a × t";
        inputDiv.innerHTML = `
          <input id="alas" type="number" placeholder="Masukkan alas" class="w-full p-2 rounded-lg text-black">
          <input id="tinggi" type="number" placeholder="Masukkan tinggi" class="w-full p-2 rounded-lg text-black">`;
        break;
      case "lingkaran":
        rumusDiv.textContent = "Rumus: π × r²";
        inputDiv.innerHTML = `<input id="jari" type="number" placeholder="Masukkan jari-jari" class="w-full p-2 rounded-lg text-black">`;
        break;
      case "belahKetupat":
        rumusDiv.textContent = "Rumus: ½ × d1 × d2";
        inputDiv.innerHTML = `
          <input id="d1" type="number" placeholder="Masukkan diagonal 1" class="w-full p-2 rounded-lg text-black">
          <input id="d2" type="number" placeholder="Masukkan diagonal 2" class="w-full p-2 rounded-lg text-black">`;
        break;
    }
  });

  hitungBtn.addEventListener("click", ()=>{
    let hasil = 0;
    switch(bangunSelect.value) {
      case "persegi":
        let s = parseFloat(document.getElementById("sisi").value);
        hasil = s*s;
        break;
      case "persegiPanjang":
        let p = parseFloat(document.getElementById("panjang").value);
        let l = parseFloat(document.getElementById("lebar").value);
        hasil = p*l;
        break;
      case "segitiga":
        let a = parseFloat(document.getElementById("alas").value);
        let t = parseFloat(document.getElementById("tinggi").value);
        hasil = 0.5*a*t;
        break;
      case "lingkaran":
        let r = parseFloat(document.getElementById("jari").value);
        hasil = Math.PI*r*r;
        break;
      case "belahKetupat":
        let d1 = parseFloat(document.getElementById("d1").value);
        let d2 = parseFloat(document.getElementById("d2").value);
        hasil = 0.5*d1*d2;
        break;
    }
    hasilDiv.textContent = "Hasil: " + hasil.toFixed(2);
  });
}
