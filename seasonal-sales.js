var products = [];
var categories = [];

var getCategories = function() {
  var categoryLoad = new XMLHttpRequest();
  categoryLoad.addEventListener("load", function() {
    categories = JSON.parse(this.responseText).categories;
    getProducts();
  });
  categoryLoad.open("GET", "categories.json");
  categoryLoad.send();
}();

function getProducts() {
  var productLoad = new XMLHttpRequest();
  productLoad.addEventListener("load", function() {
    products = JSON.parse(this.responseText).products;
    outputToDom();
  });
  productLoad.open("GET", "products.json");
  productLoad.send();
}

function outputToDom() {
  var output = document.getElementById("products");
  var productString = "";
    for (var i = 0; i < products.length; i++) {
      productString += "<div class='product-card'><div>" + products[i].name + "</div>";
      productString += "<div class='product-info'>" + categories[products[i].category_id -1].name + "</div>";
      productString += "<div class='product-price'>" + products[i].price + "</div></div>";
      origPrice[i] = products[i].price;
    };
    output.innerHTML = productString;
}

var origPrice = [];
var discountPrice = [];
var seasonSelect = document.getElementById("selectSeason");

seasonSelect.addEventListener("change", runDiscount);

function runDiscount() {
  var season = seasonSelect.value;
  var price = document.getElementsByClassName("product-price");
  for (var i = 0; i < products.length; i++) {
    if (season === categories[products[i].category_id - 1].season_discount) {
      discountPrice = products[i].price - (products[i].price) * categories[products[i].category_id - 1].discount;
        price[i].innerHTML = discountPrice.toFixed(2);
    } else if ( season === categories[products[i].category_id - 2].season_discount) {
      discountPrice = products[i].price - (products[i].price) * categories[products[i].category_id - 2].discount;
        price[i].innerHTML = discountPrice.toFixed(2);
    } else (price[i].innerHTML = origPrice[i]);
  }
};




