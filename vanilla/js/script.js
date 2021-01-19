
//VERSIONE JAVASCRIPT 5 ///////

//
// var bikesList = [
//   {nome : 'Atala', peso : 10},
//
//   {nome : 'Bianchi', peso : 14},
//
//   {nome : 'Bartali', peso : 7},
// ];
//
//
// var pesoBike = bikesList[0];
//
// for (var i = 0; i < bikesList.length; i++) {
//   if (bikesList[i].pesokg < pesoBike.pesokg) {
//     pesoBike = bikesList[x]
//   }
// }console.log(pesoBike);



// INIZIO  SCRIPT CON EMCASCRIPT6////////


//VERIFICO QUALE BICICLETTA CONTENUTA NELL'ARRAY ABBIA UN PESO MINORE
const bikesList = [
  {nome : 'Atala', peso : 10},

  {nome : 'Bianchi', peso : 14},

  {nome : 'Bartali', peso : 7},
];

let singleBike = bikesList[0];

for (let i = 0; i < bikesList.length; i++) {
  if (bikesList[i].peso < singleBike.peso) {
    singleBike = bikesList[i]
  }

}
console.log(singleBike);
