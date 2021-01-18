// //Punto 1
// var studente = {
//   'nome' : 'Giovanni',
//   'cognome' : 'Muciaccia',
//   'età' : 51,
// }
//
// for (var key in studente){
//   alert(studente[key]);
// }


// //Punto 2
// var studenti = [
//   {'nome': 'Giuliano', 'cognome':'Sarri'},
//   {'nome': 'Giuliano Sarri'},
// ]
// for (var i=0; i<studenti.length; i++){
//   var studente = studenti[i];
//   alert(studente.nome + studente.cognome);
//
// }


//Punto 3
var studenti = {
  'studente': [],
};
var ragazzo = {}
ragazzo.nome = prompt("Qual'è il tuo nome?");
ragazzo.cognome = prompt("Qual'è il tuo cognome?");
ragazzo.età = prompt('Quanti anni hai?');
studenti.studente.push(ragazzo);
