console.log("&(AND) ÜZERİNDEN İŞLEMLER");
var x = 15;
var y = 12;

console.log("(12&15) :",y&x);

x = 37;
y = 13;
console.log("(37&13) :",x&y);
/**
    37 -> 100101
    13 -> 001101 (son iki sıfır ben ekledim 6 bit üzerinden kıyaslıyak diye)

    sonuç:000101 -> 1+0+4+0+0+0 = 5
    that is all
 */
    console.log("|(OR) ÜZERİNDEN İŞLEMLER");

y = 4;
x = 11;
console.log("(4|11) :",x|y);

/*
    4 -> 0100
    11 -> 1011
    sonuç : 1111 -> 1+2+4+8 = 15
*/
x = 18;
y = 43;
console.log("(18|43 :",x|y);

    console.log("^ (XOR) ÜZERİNDEN İŞLEMLER");

x = 3;
y = 15;
console.log("(x^y) : ",x^y);

/*
    3 ->  0011
    15 -> 1111
    sonuç : 1100 -> 0+0+4+8 = 12
    aynıysa ->0
    farklıysa ->1
*/
console.log("~ (NOT) ÜZERİNDEN İŞLEMLER");
// negatifinin -1 eklenişi
console.log("~5:",~5);
console.log("~7:",~7);
