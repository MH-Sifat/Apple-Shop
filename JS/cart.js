function updateProductInput(product, isAdding,price){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isAdding){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const updateTotal = document.getElementById(product + '-total');
    updateTotal.innerText = productNumber * price;
    calculateTotal();
}

function commonProductInput(product){
    const productInput = document.getElementById(product +'-number');
    const productQuantity = parseInt(productInput.value);
    return productQuantity;
}

function calculateTotal(){
    const iphoneMaxAmmount = commonProductInput('iphone-max') * 1680;
    const iphoneAmmount = commonProductInput('iphone-14') * 1480;
    const WatchAmmount = commonProductInput('Apple-watch') * 1450;
    const appleWatchAmmount = commonProductInput('Apple-watch2') * 1550;
    const subTotal = iphoneMaxAmmount + iphoneAmmount + WatchAmmount + appleWatchAmmount;
    const tax = subTotal / 10;
    const grandTotal = subTotal + tax;
 console.log(tax);

    document.getElementById("price").innerText = subTotal;
    document.getElementById("tax-ammount").innerText = tax;
    document.getElementById("total-price").innerText = grandTotal;

    

}

document.getElementById('iphone-max-plus').addEventListener('click',function(){
 updateProductInput('iphone-max',true,1680)

})
document.getElementById('iphone-max-minus').addEventListener('click',function(){
    updateProductInput('iphone-max',false,1680)

})
document.getElementById('iphone-14-plus').addEventListener('click',function(){
    updateProductInput('iphone-14',true,1480)

})
document.getElementById('iphone-14-minus').addEventListener('click',function(){
    updateProductInput('iphone-14',false,1480)

})
document.getElementById('Apple-watch-plus').addEventListener('click',function(){
    updateProductInput('Apple-watch',true,1450)

})
document.getElementById('Apple-watch-minus').addEventListener('click',function(){
    updateProductInput('Apple-watch',false,1450)

})
document.getElementById('Apple-watch2-plus').addEventListener('click',function(){
    updateProductInput('Apple-watch2',true,1550)

})
document.getElementById('Apple-watch2-minus').addEventListener('click',function(){
    updateProductInput('Apple-watch2',false,1550)

})
