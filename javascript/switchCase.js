var names = ["Ümit","Beyza","Satiye","Sadık"];

// 20 tane if else yazmak yerine bunu kullanmak daha mantıklı;

switch(names[0]){ // names[0]="Ümit";
    case "Ümit" : write = "ben ümit";
    break;
    case "Beyza" : write = "ben Beyza";
    break;
    default : write = "Benim bir ismim yok ";
}
console.log(write);
