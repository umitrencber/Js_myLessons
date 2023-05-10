// dizi içinde gezme yap: -> forEach ile
var footballClubs = ["Fenerbahçe","Galatasaray","Beşiktaş","Trabzonspor"];

//1-push() -> diziye eleman ekler
footballClubs.push("Kastamonuspor");
console.log("push() "+footballClubs);

// 2-join() -> ayırma yöntemini değiştiriyor (bunu yazdırıken yapabildik ve bir kere )
console.log("join() "+footballClubs.join("-"));

// 3-pop() -> son elemanı çıkarma
footballClubs.pop();
console.log("pop() -> "+footballClubs);

// 4-shift() -> baştaki elmanı çıkarma
console.log("çıkartılan eleman : "+footballClubs.shift());
console.log("shift() -> "+footballClubs);

// 5-unshift() -> baştakine elamn ekle
footballClubs.unshift("Giresunspor");
console.log("eklenen eleman: 'Giresunspor'");
console.log("unshift() -> "+footballClubs);

// 6-splice() -> eklemek(ing) ayırma(o diziden alıyor)  işlemi de yapıyor eklemenin yanında
var cars = ["mercedes","fiat","audi","volvo"];
console.log("Dizimizin ilk hali : "+cars);
cars.splice(5,0,"merhaba");
console.log(cars);
cars.splice(0,2);
console.log("Splice(0,2) -> "+cars);


// dizi içine dizi ekleme
console.log("---------------------------new trials------------------------");
var hours =[1,2,3,4,5,6];
var maleStudents = ["Ümit","Enver","Abdülkadir","Ertuğrul","Rıza"];
var femaleStudents = ["Zeynep","Beyza","Zehra","Satiye","Dilek"];

console.log("Erkek Öğrenciler : ",maleStudents);
console.log("Erkek Öğrenciler : ",femaleStudents);
console.log("hours : ",hours);
hours.push(femaleStudents,maleStudents);
console.log("femaleStudents ve maleStudents hours'e eklendi ->",hours);
console.log("hours dizisinden çıkarılan (bir dizi olduğu için son eleman): "+hours.pop());
console.log(hours);
hours.unshift(maleStudents); // çıkarıdğımı geri ekliyorum -> bu bir number veri tipi döner
console.log("hours'a ekledik çıkarığımızı : ",hours);
console.log(hours[0].length); // dizideki ilk elamanın uzunluğu
console.log(hours[hours.length-1][4]);

// array copy methods
// false method:
console.log("kopyalamadan önceki hali:",maleStudents); // kopyalamadan önceki hali
var copyMaleStudents = maleStudents; // burada kopyaladık ama copyalanılandan çıkarsan bile orjinalini de etkiliyor.
copyMaleStudents.shift();
console.log(maleStudents);

// slice() ile kopyalamak
var copyFemaleStudents = femaleStudents.slice(); // bu şekilde orjinali kalıyor
copyFemaleStudents.pop();
console.log("dizinin ilk hali",femaleStudents);
console.log("kopayalan diziye pop uygulanınca",copyFemaleStudents)

// [...diziAdı,] -> ES6 ile kopyalamak daha mantıklı
var es6CopyArray = [...femaleStudents];
es6CopyArray.shift();
console.log(femaleStudents); // bak değişmedi
console.log(es6CopyArray);

// es6CopyArray dizisinin ortasına eleman ekleyelim
es6CopyArray.splice(Math.floor(es6CopyArray.length/2),0,"Ben eklendim");// tam dizi ortasını bulma
console.log(es6CopyArray);

// slice() -> dilimleme buda bir çeşit kopyalamada kullanılabilinir.
var newestArray = ["yumurta","tavuk","süt","şarap","çay"];

console.log("newestArray -> ",newestArray);
var drinkArray = newestArray.slice(2,5); // sadece içecekleri alam dedim çayı dahil etmek için bir fazlası
console.log("newest arrayden alından içecek dizimiz slice(2,5) ->",drinkArray);

console.log("join(' === ') ->",drinkArray.join(" === "));

// forEach yapısı
const malzemeler = ["yumurta", "un", "süt"];

malzemeler.forEach(function(malzeme, malzemeIndeksi) {
    console.log(malzeme, malzemeIndeksi);
});

// map()
var numbers = [10,20,30,40,50];

var assigmentedNumber = numbers.map(function(two,tut){
    return two*2+tut // two -> dizideki ilk değeri alıyor, tut -> indexleri tutuyor
})
console.log(numbers);
console.log(assigmentedNumber);

// every() -> dizideki her elemana giriyor.kontrol edebilirsin elemanalrı -> true/false döner.
var checkNumber = numbers.every(function(ourSayi){
    return ourSayi > 20;
})
console.log("numbers dizisindeki her eleman 20'den büyük mü? :",checkNumber);
//bunu nerede kullacağımız zmaan gösterir ama işime yarayacak gibi

// filter() -> bir dizi içindekileri belirtilen koşula uyanları başka diziye kopyalar ve orjinal dizi de kalır

var filterNumber = numbers.filter(function(gezici){
    return gezici > 20;
})
console.log("20'den büyük olanalrı toplanmış hali",filterNumber);


// find() -> koşula uyan ilk elemanı bulur vaarsa döndürür yoksa undefined der;
const sayilar = [4,5,6,7];

const bulunacakEleman1 = sayilar.find(function(sayi) {
    return sayi === 5;
});
console.log(bulunacakEleman1);
// Dizi içerisinde 5 eleman olarak bulunduğu için çıktıda elemanın kendisini yani 5 görmeyi bekleriz.


const bulunacakEleman2 = sayilar.find(function(sayi) {
    return sayi > 5;
});
console.log(bulunacakEleman2);
// Dizi içerisinde 5'ten büyük birden fazla eleman olduğu için koşula uyan ilk elemanı yani 6'yı görmeyi bekleriz.


const bulunacakEleman3 = sayilar.find(function(sayi) {
    return sayi < 3;
});
console.log(bulunacakEleman3);
// Dizi içerisinde 3'ten küçük bir eleman olmadığı için çıktıda undefined görmeyi bekleriz.

// reduce() -> azalmak,küçülmek  ??????????? -> anlamadım hocaya,eşe dosta sor.
var reduceArray = [10,20,30,40];
toplanaArray = reduceArray.reduce(function (accumulator,currentValue){
    return accumulator + currentValue;
})
console.log(toplanaArray);

// Dizi içinde dizi oluşturma
const myGroceryCart = [
    ["apple",12],
    ["pear",10],
    ["strawberry",5]
];
console.log(myGroceryCart);

    for(let i = 0; i<myGroceryCart.length; i++){
    console.log("sepetimdeki ürünlerin isimleri ve fiyatları ->",myGroceryCart[i][0]+":",myGroceryCart[i][1]);
    }

const pencilCase = new Array();

pencilCase[0] = new Array("Eraser","pencil","sharpener");
pencilCase[1] = new Array(10,20,15);
pencilCase[0][0] = "Red pencil";
console.log(pencilCase);
console.log(pencilCase[0]);

// includes() kullan bunuda



// Reinforcement questions (pekiştirme soruları)

let questions1 = [2,5,8,11,15,17];

//1- Uygun dizi metotlarını kullanarak  yukarıda verilen dizinin elemanları içinde 10'dan büyük olan elemanların 5'er katından oluşan yeni bir dizi oluşturun. (sonuç [55, 75, 85] olmalı.)

var bigFromTen = questions1.filter(function(wanderAround){
    return wanderAround > 10;
})// ilk önce filter metoduyla filtereledim 10dan büyük olanları

var tenTimes = bigFromTen.map(function(num){
    return num*5; // daha sorna map meetoduyla katlarını aldım.
})
console.log(tenTimes);

let questions2 = [3,6,9,14,16];

// Uygun dizi metotlarını kullanarak, yukarıdaki dizi için aşağıdaki şartları sağlayan myFunction fonksiyonunu yazın.
// Elemanların arasında 5'ten büyük olan olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.

function myFunction (questions2){

       var result = questions2.find(function(num){
            return num > 5;
        })

        if(result>5){
            console.log("Beşten büyük bir eleman mevcut");
        }
        else{
            console.log("5'ten büyük eleman mevcut değil.");
        }
}

myFunction(questions2);

let questions3 = [2,3,4];

// Uygun dizi metodunu kullanarak yukarıda verilen dizinin elemanlarının çarpımının sonucunu (24) veren bir fonksiyon yazınız.

var result1 = questions3.reduce(function(accumulator,currentValue){
    return accumulator * currentValue;
})
console.log(result1);