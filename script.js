var a = prompt('Wpisz swoje liczbę:');

var b=prompt('Wpisz swoje liczbę:');

var value ;

value =(a*a)+(2*a*b)-(b*b);

console.log('wynik' +  ' wynosi: ' + value );

if (value >0) {
console.log ('wynik dodatni ')
}

else if(value <0) {
console.log ( 'wynik ujemny ')
}
else {console.log (' wynik równania to zero ')}
