// comparasion and logical operators
var x = 8;
console.log(x!==7);
var m = 5;
console.log(m!==10); // 5!=10 true daha sonra 5!==10 veritürlerin, kıyaslıyor ikiside number o zman ture iki true = true
// !(x==m) vs
console.log("x===m",x===m);
console.log("x!==m",x!==m);
console.log("!(x===m)",!(x===m)); // true

var t = 0;
var n = "";
console.log(t==n); // "" = 0 boş string 0'a eşittir

// iki string sayı kıyaslanamaz alfabatik olarak sıralıyor.
var t = "38";
var n = "4";
console.log("'38'>'4'",t>n,"normalde true olması lazım ama string ifadeler kıyaslanırken hata oluyor");
// number ve "string text" kıyaslanınca false döner
t = 24;
n = "js";
console.log(t>n);
// string("4") ve string("text") kıyaslayınca yine false döner
t = "26";
n = "text";
console.log(t==n);

// if-else kısayolu 2'li ifade varsa eğer direk bunu kullan
var result,umitAge = 20,BeyzaAge = 16;
result = umitAge>BeyzaAge ? "ümit beyzadan büyük" : " beyza ümitten büyük"; // aralara ";" koyma aynen böle
console.log(result);