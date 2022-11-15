function clickHandle (){
    console.log('clicked')
    cartCount = parseFloat(document.getElementById('cart').innerHTML);
    cartCount += 1;
    document.getElementById('cart').innerText =" " + cartCount;
    console.log(cartCount);
}