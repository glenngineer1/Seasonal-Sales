var categoryRequest = new XMLHttpRequest();

categoryRequest.open("GET", "categories.json");

categoryRequest.send();

categoryRequest.addEventListener("error", xhrTransferError);

categoryRequest.addEventListener("load", categoriesLoad);

var counter = 0;

var newCategory = document.getElementById("category");

function xhrTransferError() {
  alert("An error occured while transfering your data")
}

function categoriesLoad() {
  var categoryData = JSON.parse(this.responseText);
  console.log("Cdata", categoryData);
}
