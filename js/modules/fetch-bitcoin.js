export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((r) => r.json())
    .then((bitcon) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (1000 / bitcon.BRL.sell).toFixed(4);
    })
    .catch((erro) => console.log(Error(erro)));
}
