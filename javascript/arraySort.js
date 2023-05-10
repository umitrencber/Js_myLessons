var numbers =[130,12,22,34,31,27,150,145];
var names = ["Ümit","Beyza","Nisa","Sadık","Satiye","Ömer","Ahmet"];

console.log("---------------------------------------String sort------------------------------");
//1-İsim sıralaması:
console.log("Dizinin ilk hali -> "+names);
names.sort();// sıralama işlemi
console.log("sıralı hali ->"+names);
console.log("---------------------------------------Number sort------------------------------");
//2-sayı sıralamsı:

// küçükten<büyüğe
console.log("Dizinin ilk hali ->"+numbers);
numbers.sort(function(x,y){
    return x-y; // küçükten büyüğe sıralar
})

console.log("sıralı hali ->"+numbers);
// büyükten>küçüğe
var numbers2 =[01,02,5,3,17,14,132,131,564,10,987];
console.log("Dizinin ilk hali ->"+numbers2);

numbers2.sort(function(x,y){
    return y-x; // büyükten küçüğe sıralar.
})
console.log("sıralı hali ->"+numbers2);

console.log("---------------------------------------Max and Min------------------------------");
//Max ve min :
console.log(numbers[0]); // numbers sıralandı ve 0'daki de en küçüktür.
console.log(numbers[numbers.length-1]); // en büyüğü 

// bunu istedğin zaman kullabilrisin tek seferlik değil daha kullanışlı ayrıca daha az işlem yapar.
console.log(maxArray(numbers));
console.log(minArray(numbers));

function minArray(take){
    return Math.min.apply("null",take);
}

function maxArray(take){
    return Math.max.apply(2,take);//2 geçersiz istedğini yazabilirsin
}

//Rastgele sıralama:
var numbers3 = [34,12,54,13,67,098,75];
console.log("Dizinin ilk hali -> "+numbers3);
numbers3.sort(function(a,b){
    return a-b;
})
console.log("Dizinin sıralı hali -> "+numbers3);
numbers3.sort(function(x,y){
    return 0.4-Math.random();
})
console.log("Dizinin rastgele sıralanmış hali -> "+numbers3);
// Object Sort:
var objectWithArray = [
    {name:"Ümit",lastname:"Rençber",birthDate:2002},
    {name:"Beyza",lastname:"Neşeli",birthDate:2006},
    {name:"Satiye",lastname:"Kuru",birthDate:1976},
    {name:"Sadık",lastname:"Gezmeci",birthDate:1974},
    
];
console.log("First Status:")
for(let i=0; i<objectWithArray.length; i++){
    console.log("First ObjectArray: ", objectWithArray[i]);
}

 objectWithArray.sort(function(d,e){
    return d.birthDate - e.birthDate;
}) 

console.log("Ordered Status:");
for(let i=0; i<objectWithArray.length; i++){
    console.log("Last ObjectArray: ", objectWithArray[i]);
}
 


