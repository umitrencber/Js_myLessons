var day = 9;
for(let i = 0; i<20; i++){
    if(day==i){
        console.log(i+". gün atlatıldı");
        continue;
    }
 console.log("günler :" +i);
}
console.log("------------------------break-------------------------");

for(let i = 0; i<20; i++){
    if(day==i){
        console.log(i+". günden sonrası yok ");
        break;
    }
 console.log("günler :" +i);
}
console.log("---------------------label--------------------------------");

text :
    for(let i= 0; i<100; i++){
        if(i % 5 == 0 || i % 2 == 0){ // 2'nin ve 5'in katlarıysa atla
            continue text;
        }
        console.log("sayılar : "+i);
    }

