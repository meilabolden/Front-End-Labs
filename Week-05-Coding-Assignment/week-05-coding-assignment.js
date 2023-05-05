/* Week 05 Coding Assignment

Coding Steps:
Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
Use at least one array.
Use at least two classes.
Your menu should have the options to create, view, and delete elements.
 */
/*
/window prompts 'Time for a Coffee Run? Customize your order here!'
/Yes will continue the process, 'no' will say 'See ya on your next Coffee Run!' and end the process.
/New prompt will ask "Who needs a pick me up?" for name request. 
/Next prompt will say "What can we make for (insert name)"
/Enter order for (insert name)
/
/*
/*------------------------------------------------------------------------------------*/


function promptOrder() {
    let name = window.prompt('Who needs a pick me up?'); 
    window.prompt(`What can we make for ${name}?`);
    
}


class Customer {
    constructor(name, order){
        this.name = name;
        this.order = order;
    }
}

class Customers {
    constructor(name, customers){
        this.name = name;
        this.customers = customers;
    }

    addCustomer(customer){
        if (customer instanceof Customers) {
            this.customers.push(customer);
        }
        return `${this.name} has an order for ${this.customers.length} coffees.`
    }
}

class OrderMenu extends Customer{
    constructor(){
       this.item = item;
       this.size = size;
    super(name, order)
    }

    describe (){
        return `${this.name} ordered a ${this.size} ${this.item}.`
    }

    addItem(item) {
        if (item instanceof Customer) {
            this.item.push(item);
        } else {
            throw new Error (`This ${this.item} is not on the menu.`)
        }
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1' :
                    this.showItem();
                    break;
                case '2' :
                    this.addItem();
                    break;
                case '3' :
                    this.deleteItem();
                    break;
                case '4' :
                    this.viewEntireOrder();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('See you on your next Coffee Run!')
    }

    showMainMenuOptions = function promptOrder() {
        let name = window.prompt('Who needs a pick me up?'); 
        window.prompt(`What can we make for ${name}?`);
        
    }
    showMainMenuOptions(){
        return prompt(`
        0. Cancel Order
        1. Show Item
        2. Add Item
        3. Delete Item
        4. View Entire Order
        `);
    }
    
}



