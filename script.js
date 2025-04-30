function hitungNilai() {
    const nama = document.getElementById("nama").value;
    const tugas = parseFloat(document.getElementById("tugas").value);
    const uts = parseFloat(document.getElementById("uts").value);
    const uas = parseFloat(document.getElementById("uas").value);
  
    if (!nama || isNaN(tugas) || isNaN(uts) || isNaN(uas)) {
      alert("Harap lengkapi semua data!");
      return;
    }
  
    // Bobot: Tugas 30%, UTS 30%, UAS 40%
    const nilaiAkhir = (tugas * 0.3) + (uts * 0.3) + (uas * 0.4);
    let predikat = "";
  
    // Penentuan predikat
    if (nilaiAkhir >= 85) {
      predikat = "A (Sangat Baik)";
    } else if (nilaiAkhir >= 75) {
      predikat = "B (Baik)";
    } else if (nilaiAkhir >= 60) {
      predikat = "C (Cukup)";
    } else if (nilaiAkhir >= 50) {
      predikat = "D (Kurang)";
    } else {
      predikat = "E (Gagal)";
    }
  
    const hasilBox = document.getElementById("hasil");
    hasilBox.classList.remove("hidden");
  
    hasilBox.innerText =
      `Nama       : ${nama}
  Nilai Akhir : ${nilaiAkhir.toFixed(2)}
  Predikat    : ${predikat}`;
  }
  