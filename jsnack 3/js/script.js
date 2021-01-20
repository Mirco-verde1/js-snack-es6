// QUESTA PRIMA PARTE DELLOSCRIPT VIENE SVILUPPATA IN JSCRIPT 5
//
// var nameList = ['Maria', 'Giuliano', 'Mariano','Bettina','Marco','Miriam'];
//
// var num1 = parseInt(prompt('Inserisci un numero minimo'));
// var num2 = parseInt(prompt('Inserisci un numero massimo'));
//
//
//
//
//
//
//
// function myFunction(listanomi, num1 , num2){
//
//   var newArray = [];
//   for (var i = 0; i < listanomi.length; i++) {
//
//     if ( i => num1 && i <= num2) {
//
//       newArray.push(listanomi[i])
//     }
//   }
//
//   return newArray;
//
// }
//
//
// console.log(myFunction(nameList, num1, num2));
//
//
//
//
//
// -------------------------------------------------------- QUESTA SECONDA PARTE VIENE SCRITTA IN JS 6 -------------------------------------------->>>>>>
// ------------------------------------------------------------------- PRIMA PARTE HO USATO UN FILTER ------------------------------------------------->>>>>>


const min = parseInt(prompt('Inserisci un numero minimo'));
const max = parseInt(prompt('Inserisci un numero massimo'));
const nameList = ['Maria', 'Giuliano', 'Mariano', 'Bettina', 'Marco', 'Miriam'];

//CREO LA FUNZIONE CHE STAMPI I NOMI COMPRESI TRA I NUMERI INSERITI MIN E MAX
// VERSIONE CON FUNZIONE 'FILTER'

function myFunction(array ,min ,max){

  let newList = [];

    newList = array.filter((elem , index) => {
    return index => min && index <= max
  })

   return newList;
}

console.log(myFunction(nameList, min, max));

// ------------------------------------------------------------------ SECONDA PARTE HO USATO UN FOR EACH -------------------------------------------->>>>>>


const numMin = parseInt(prompt('Inserisci un numero minimo'));
const numMax = parseInt(prompt('Inserisci un numero massimo'));
const casualName = ['Maria', 'Giuliano', 'Mariano', 'Bettina', 'Marco', 'Miriam'];

//CREO LA FUNZIONE CHE STAMPI I NOMI COMPRESI TRA I NUMERI INSERITI MIN E MAX
// VERSIONE CON FUNZIONE 'FOR EACH'
function myFunction(array ,numMin ,numMax){

  let newList = [];

   array.forEach((item, i) => {

    if (i => numMin && i <= numMax) {

      newList.push(item)
    }
})
    return newList;

  };


console.log(myFunction(casualName, numMin, numMax));
