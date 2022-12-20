const f = document.getElementById('form');
const q = document.getElementById('query');
const eBay = 'https://www.ebay.com/sch/i.html?_dkr=1&iconV2Request=true&_blrs=recall_filtering&_ssn=thehouseofdealsco&store_cat=0&store_name=thehouseofdealsco&_oac=1&_nkw=';

function submitted(event) {
  event.preventDefault();
  const url = eBay + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('submit', function(submitted){
    evt.preventDefault()});
