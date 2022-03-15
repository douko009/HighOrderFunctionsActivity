/*
This program shows the different functions in a STORE scenario, using FILTER, MAP, SORT, REDUCE functions.
*/
let shop = require ("./shopdata.json");


//FILTER FUNCTION

console.log('----------FILTER----------');
/*
//using for loop

let newPrice = [];
for(let x = 0; x < shop.length; x++){
        if(shop[x].price <= 1000){
            filterPr.push(shop[x]);
        }
    };
console.log(newPrice);


//no for loop
const newPrice = shop.filter(function(shop){
    if(shop.price <= 1000){
        return true;
    }
});

console.log(newPrice);
*/

//one line
//filter the price
const newPrice = shop.filter(shop => shop.price <= 1000);
console.log(newPrice);
//filter the use
const filterSchool = shop.filter (shop => shop.uses === "school");
console.log(filterSchool);



//MAP
console.log('----------MAP-----------');

/*
const mapShop = shop.map(function(shop){
    return shop;
});
*/
//one line MAP
const mapShop = shop.map(shop => `[${shop.item} - ${shop.price} - ${shop.stock}]`);
console.log(mapShop);

/*
//more map functions
const mapMath = shop.map(shop => Math.sqrt (shop.price));
const mapMath = shop.map(shop => shop.stock * 2);
console.log(mapMath);
*/

//SORT
console.log('----------SORT-----------');
/*
const sortShop = shop.sort(function (a, b){
    if(a.price < b.price){
        return 1; 
    } else {
        return -1;
    }
});
*/
//one line sort
const sortShop = shop.sort((a,b) => (a.price < b.price ? 1 : -1));
console.log(sortShop);

//REDUCE
console.log('----------REDUCE-----------');
/*
let priceTotal = 0;
    
    for(x = 0; x < shop.length; x++){
        priceTotal += shop[x].price;

    };
*/
const priceTotal = shop.reduce((total, shop) => total + shop.price,0);

const mapPrice = shop.map(shop => `[${shop.item} - ${shop.price}]`); 
console.log(mapPrice);
console.log(priceTotal);



