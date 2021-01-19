//SECONDO ESERCIZIO
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.






function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min); // funzione per generare dei numeri randomici
  return result;
}


var teamList = [                                         // Array di oggetti
  {nome: 'Ajax', punti: 0, falliSubiti:0},

  {nome: 'Barcellona', punti: 0, falliSubiti:0},

  {nome: 'Livepool', punti: 0, falliSubiti:0},

  {nome: 'Lille', punti: 0, falliSubiti:0},
];


var nameAndFoulTeam = [];   //variabile che uso successivamente per stampare solo i punti e i nomi delle squadre




for (var i = 0; i < teamList.length; i++) {            //ciclo la lista squadre e aggiungo un valore random per punti e falliSubiti

  var newteamList = teamList[i];
  newteamList.punti = randomNumber(1  , 20);
  newteamList.falliSubiti = randomNumber(1  , 20);

};
console.log(teamList);



for (var i = 0; i < teamList.length; i++) {
  nameAndFoulTeam.push(teamList[i].nome)
  nameAndFoulTeam.push(teamList[i].falliSubiti)

}
console.log(nameAndFoulTeam);




//



// LO SCRIPT VIENE PASSATO INTERAMENTE A ECMASCRIPT 6

//
//
// function randomNumber(min, max) {
//   var result = Math.floor(Math.random() * (max + 1 - min) + min); // funzione per generare dei numeri randomici
//   return result;
// }
//
//
// const teamList = [                                         // Array di oggetti
//   {nome: 'Ajax', punti: 0, falliSubiti:0},
//
//   {nome: 'Barcellona', punti: 0, falliSubiti:0},
//
//   {nome: 'Livepool', punti: 0, falliSubiti:0},
//
//   {nome: 'Lille', punti: 0, falliSubiti:0},
// ];
//
//
//
// const nameAndFoulTeam = [];   //costante che uso successivamente per stampare solo i punti e i nomi delle squadre
//
//
//
//
// for (let i = 0; i < teamList.length; i++) {            //ciclo la lista squadre e aggiungo un valore random per punti e falliSubiti
//
//   let newteamList = teamList[i];
//   newteamList.punti = randomNumber(1  , 20);
//   newteamList.falliSubiti = randomNumber(1  , 20);
//
// };
// console.log(teamList);
//
//
//
// for (var i = 0; i < teamList.length; i++) {
//   nameAndFoulTeam.push(teamList[i].nome)
//   nameAndFoulTeam.push(teamList[i].falliSubiti)
//
// }
// console.log(nameAndFoulTeam);
