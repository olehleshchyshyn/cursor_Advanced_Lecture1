{
let maxPrice = Math.max(123.965, 15.678, 90.2345 ) 

let minPrice = Math.min(123.965, 15.678, 90.2345 ) 

console.log(minPrice, maxPrice) 
}



{
let goods1 = 123.965

let goods2 = 15.678

let goods3 = 90.2345

console.log("allPrice: " , goods1 + goods2 + goods3 ) 

let payment = 500

console.log("change: " , payment - (goods1 + goods2 + goods3))

console.log(Math.trunc(goods1 + goods2 + goods3))

}

{
    let b = Math.round(123.965) ;

    let c = Math.round(15.678) ;

    let d = Math.round(90.2345) ;

    console.log((b + c + d ) / 3 )


}


{
const a = Math.random();

const min = 1;
const max = 100;
const randomВiscount = Math.floor((max - min) * a + min);

console.log("Вiscount: " , randomВiscount);

}

{
    let goods3 = 90.2345 ;

    let biscount = 27 ;

    console.log((goods3 / 100) * biscount)  ;

}

{
    let goods3 = 90.2345 ;

    let amountDue = 24.363315 ;

    console.log((goods3 / 2) - amountDue)
}




{
    let allPrice = 229 ;

    if(allPrice) {
        console.log('true');
    }else{
        console.log(false)
    }

}


{
    function roundToMultiple(num, multiple) {
        return Math.round(num/multiple) * multiple;
    }

    console.log(roundToMultiple(229.8775, 200))
}



