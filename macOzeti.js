function macOzeti(evSahibiTakim, deplasmanTakimi) {
  const macOzet = () => {
    let istatistik = [];
    let realSayi=0;
    let barcaSayi=0;
    for (let i = 1; i <= 4; i++) {
      let real = Math.floor(Math.random() * (26-12 + 1) )+ 12;
      let barca = Math.floor(Math.random() * (26-12 + 1) )+ 12;
      console.log(real,"real")
      console.log(barca,"barca")
      istatistik.push(
        `${i}. Periyot: ${evSahibiTakim} ${(realSayi +=
          real)} - ${deplasmanTakimi} ${(barcaSayi += barca)}`
      );
    }
    if (realSayi === barcaSayi) {
      istatistik.push(`Maç ${realSayi} - ${barcaSayi} ile uzatmalara gitti`);
    } else if (realSayi > barcaSayi) {
      istatistik.push(
        `Maç Sonucu: ${evSahibiTakim} ${realSayi} - ${barcaSayi} kazandı`
      );
    } else {
      istatistik.push(
        `Maç Sonucu: ${evSahibiTakim} ${realSayi} - ${barcaSayi} kaybetti`
      );
    }
    console.log(realSayi)
    console.log(barcaSayi)
    return istatistik;
  }; 
    return macOzet();
}
console.log(macOzeti('Real Madrid', 'Barcelona'))
module.exports = macOzeti;
