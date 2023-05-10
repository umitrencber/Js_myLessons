var x = "6";
var y = 19;
var z = 5;

z =+x;// üstüne eklemiyor yerine ekliyor( =+ yaparak string ifadeyi number'a dönüştürüyor.)
console.log("z =+x : "+z);
z =+y;// number veri türü zaten number direk yerine ekliyor bak
console.log("z =+y : "+z);

console.log(typeof z +"\n"+ typeof x);

z +=x; //(burada z'nin yanına ekliyor string olarak)
console.log( "z +=x :"+z)
console.log(typeof z);
z += 3;
console.log(z);

var convert = [];
var ah = String(convert);
console.log("boşluk oldu ->", ah);

