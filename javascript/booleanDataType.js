var x;
var y = NaN;
var z = null;
var w = 0;

console.log(Boolean(x) + "\n"+ Boolean(y) + "\n" + Boolean(z) + "\n" + Boolean(w));

// undefined,null,NaN,0 -> boolean türünde "false" dir.

var obj0 = new Boolean(true);
var obj1 = new Boolean(true);

console.log("objeler kıyaslanamaz",x==y ,"ve" , x===y);


