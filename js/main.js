class Producto {
    constructor(id, item, modelo, precio, pict,  inCart) {
      this.id = id;
      this.item = item;
      this.modelo = modelo;
      this.precio = precio;
      this.pict = pict;
      this.inCart = inCart;
    }
  }

let carts = document.querySelector('.addCart');
carts.addEventListener('click', () => {
    console.log("added to cart")
    cartNumbers(productos[0]);


})
// función que utiliza la información guardada en el localStorage y la mantiene en el numero de productos en el icono de carrito al recargar.

function onLoadCartNumber(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}
function cartNumbers(product){
    console.log("The product clicked is", product)
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }
    else {
        localStorage.setItem( 'cartNumbers', 1)
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product)
}
function setItems(product){
    let cartItems =localStorage.getItem ('productsInCart');
    cartItems = JSON.parse(cartItems);
// Con este if verificamos la cantidad de veces que se añade el producto y si hay uno agregado le sumamos uno.
    if(cartItems != null){
        cartItems[product.modelo].inCart += 1;
    } else{
        product.inCart = 1;
        cartItems= {
        [product.modelo]: product
        }

    }
    localStorage.setItem ("productsInCart", JSON.stringify (cartItems));

}
onLoadCartNumber()