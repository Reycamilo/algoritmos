
const personas = [{
  "id": 1,
  "firstName": "Aubrey",
  "lastName": "Gainsboro",
  "email": "againsboro0@w3.org",
  "gender": "Male",
  "ip_address": "77.34.194.205"
}, {
  "id": 2,
  "firstName": "Honoria",
  "lastName": "Geoghegan",
  "email": "hgeoghegan1@sphinn.com",
  "gender": "Female",
  "ip_address": "146.107.200.148"
}, {
  "id": 3,
  "firstName": "Aeriela",
  "lastName": "Umbers",
  "email": "aumbers2@si.edu",
  "gender": "Female",
  "ip_address": "135.32.92.1"
}, {
  "id": 4,
  "firstName": "Bernadine",
  "lastName": "Tutchell",
  "email": "btutchell3@xing.com",
  "gender": "Female",
  "ip_address": "157.83.147.153"
}, {
  "id": 5,
  "firstName": "Philis",
  "lastName": "Fransemai",
  "email": "pfransemai4@symantec.com",
  "gender": "Female",
  "ip_address": "118.50.165.95"
}, {
  "id": 6,
  "firstName": "Mariel",
  "lastName": "MacCulloch",
  "email": "mmacculloch5@wikia.com",
  "gender": "Female",
  "ip_address": "234.209.166.198"
}, {
  "id": 7,
  "firstName": "Creigh",
  "lastName": "Abbotts",
  "email": "cabbotts6@rambler.ru",
  "gender": "Male",
  "ip_address": "78.131.76.235"
}, {
  "id": 8,
  "firstName": "Tamqrah",
  "lastName": "Alenichicov",
  "email": "talenichicov7@washingtonpost.com",
  "gender": "Female",
  "ip_address": "100.201.20.47"
}, {
  "id": 9,
  "firstName": "Tyrus",
  "lastName": "Bliss",
  "email": "tbliss8@twitpic.com",
  "gender": "Male",
  "ip_address": "210.39.157.97"
}, {
  "id": 10,
  "firstName": "Farrah",
  "lastName": "Topaz",
  "email": "ftopaz9@storify.com",
  "gender": "Female",
  "ip_address": "26.36.55.28"
}, {
  "id": 11,
  "firstName": "Evvie",
  "lastName": "McBeith",
  "email": "emcbeitha@vk.com",
  "gender": "Female",
  "ip_address": "253.27.57.250"
}, {
  "id": 12,
  "firstName": "Reagen",
  "lastName": "Di Dello",
  "email": "rdidellob@tripadvisor.com",
  "gender": "Male",
  "ip_address": "228.198.86.234"
}, {
  "id": 13,
  "firstName": "Raul",
  "lastName": "Robbert",
  "email": "rrobbertc@noaa.gov",
  "gender": "Male",
  "ip_address": "241.120.159.155"
}, {
  "id": 14,
  "firstName": "Welby",
  "lastName": "Redmond",
  "email": "wredmondd@state.gov",
  "gender": "Male",
  "ip_address": "120.237.97.118"
}, {
  "id": 15,
  "firstName": "Tuck",
  "lastName": "Esposi",
  "email": "tesposie@a8.net",
  "gender": "Male",
  "ip_address": "25.162.27.92"
}, {
  "id": 16,
  "firstName": "Sara-ann",
  "lastName": "Brownsea",
  "email": "sbrownseaf@wsj.com",
  "gender": "Female",
  "ip_address": "44.152.234.139"
}, {
  "id": 17,
  "firstName": "Claiborn",
  "lastName": "Barthelme",
  "email": "cbarthelmeg@wikia.com",
  "gender": "Male",
  "ip_address": "86.122.64.14"
}, {
  "id": 18,
  "firstName": "Yale",
  "lastName": "Cloutt",
  "email": "ycloutth@adobe.com",
  "gender": "Male",
  "ip_address": "204.21.225.15"
}, {
  "id": 19,
  "firstName": "Krystalle",
  "lastName": "Renard",
  "email": "krenardi@github.io",
  "gender": "Female",
  "ip_address": "100.110.68.7"
}, {
  "id": 20,
  "firstName": "Hephzibah",
  "lastName": "Penlington",
  "email": "hpenlingtonj@icio.us",
  "gender": "Female",
  "ip_address": "95.237.137.148"
}]



// for (let prendiente in pendientes) {
//   console.log(pendiente);
  
// }

console.log('----------------------------------------------------');

const carro = {
  modelo : 'L200',
  year : 2005,
  motor : '2.4'
}

for(let propiedad in carro) {
  console.log(propiedad);
  
}


console.log('--------------------------------------------------------');

for(let propiedad in carro) {
  console.log(carro[propiedad]);
  
}

console.log('----------------------------------------------------------');

for(let [propiedad, valor] of Object.entries(carro)){
  console.log(`${propiedad}: ${valor}`);
  
}
