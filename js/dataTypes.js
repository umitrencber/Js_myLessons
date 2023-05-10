dataTypes();


function dataTypes(){
    var
    x = "I am ümit";  // string
    y = 37;     // number
    z = 12.54; // number diye geçiyor (decimal)
    obj = {myName: "ümit", _lastName: "rencber"}; //object
    bool = true; // -> boolean

   



    
    document.write("<hr> <h3> data types </h3>");
    document.write("<br> x'in veri türü x(I am ümit) ->" + typeof x);
    document.write("<br> y'in veri türü y(37)        ->" + typeof y);
    document.write("<br> z'in veri türü z(12.54)     ->" + typeof z);
    document.write("<br> obj'in veri türü             ->" + typeof obj);
    document.write("<br> bool'in veri türü z(12.54)   ->" + typeof bool);
    var array,object,functions
    document.write(
        
        "<br>  <br> array'lerin dataType'ı :" + typeof [1,2,3,4] + "<br>"
        + " object'in dataType'ı :" + typeof {me:"ümit",age:20} +"<br>"
        + " null'un dataType'ı : "+ typeof null + "<br>"
        + " function'nın dataType'ı :"+ typeof function IamFunction(){} +"<hr>" 
    )

    
    document.write("<h5> büyük, üzeri sayılar </h5>");
    var bigNumber = 45e2; littleNumber = 12e-3;
    
    

    document.write("<br>"+bigNumber);
    document.write("<br>"+littleNumber);


    // bir değişkeni null ve undefined şeklinde içini boşaltabiliriz.
    // null bir objectir. undefined ise undefined dır

    /*örneğin:
    null === udenfined -> false
    null == undefined -> true 

        peki neden?
        bunların değeri aynı(boş) ama data types'ları farklı biri object diğeri adı
        üstünde undefined.
        */



}