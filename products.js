var productRequest = new XMLHttpRequest();

productRequest.open("GET", "products.json");

productRequest.send();

productRequest.addEventListener("error", xhrTransferError);

productRequest.addEventListener("load", productsLoad);

var counter = 0;

var newProduct = document.getElementById("product");

function xhrTransferError() {
  alert("An error occured while transfering your data")
}

function productsLoad() {
  var productData = JSON.parse(this.responseText);
  console.log("Pdata", productData);
}
