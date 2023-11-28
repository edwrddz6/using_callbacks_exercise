function prepareIngredients(callback) {
  setTimeout(() => {
    callback("Ingredients are prepared.");
  }, 1000);
}

function assembleSandwich(callback) {
  setTimeout(() => {
    callback("Sandwich is assembled.");
  }, 1500);
}

function serveSandwich(callback) {
  setTimeout(() => {
    callback("Sandwich is served.");
  }, 2000);
}

function makeSandwich() {
  prepareIngredients((message) => {
    console.log(message);
  });
  assembleSandwich((message) => {
    console.log(message);
  });
  serveSandwich((message) => {
    console.log(message);
  });
}

makeSandwich();