var mysql = require("mysql");

var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "127.0.0.1",
	port: 3306,


//Your username
user: "root",

//Your password
password: "tinK8181!",
database: "bamazon",

})

connection.connect(function(err){
    if (err) throw err;
    console.log("connection is ready"+ connection.threadId + "\n");
    shoppingcart();
})

function shoppingcart (){
    connection.query("SELECT * FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].price + " | " + res[i].stock_quantity);
    }
    console.log("\n-----------------------------------\n");
    userSelection();
  });
}

function userSelection (){
	inquirer.prompt([
	{
		name: "id",
		type: "input",
		message: "Enter the product id you would like to purchase."

	},
	{
		name: "quantity",
		type: "input",
		message: "Enter the number of this product you would like to purchase."

	}
	]).then(function(answers){
		productPurchase(answers.id, answers.quantity);
	})
}



function productPurchase(id, quantity) {
  // query the database for all items being auctioned
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    // once you have the items, prompt the user for which they'd like to bid on
    
        // get the information of the chosen item
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].item_id === parseInt(id)) {
            chosenItem = results[i];
          }
        }

        
        if (chosenItem.stock_quantity >= quantity){
        	console.log("\nYes, we have enough in stock for you to order this product.")
        	chosenItem.stock_quantity -= quantity;
        	connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: chosenItem.stock_quantity
              },
              {
                item_id: chosenItem.item_id
              }
            ],
            function(error) {
              if (error) throw err;
              console.log("\nOrder placed successfully!\n");
              shoppingcart();
            }
        )

        } else {
        	console.log("\nSorry, we do not have enough in stock for your order at this time.")
        	shoppingcart();
        }
        
      });
  };
