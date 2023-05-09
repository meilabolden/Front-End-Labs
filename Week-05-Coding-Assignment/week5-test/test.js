/*  */

class Customer {
    constructor(name, order){
        this.name = name;
        this.order = order;
    }
    describe() {
        return `${this.name}`;
    }
}


class Menu {
    constructor(order, name){
    this.order = order;
    this.name = [];
    }

    addCustomer(customer){
        if (customer instanceof Customer) {
            this.customers.push(this.name);
        }
    }


    addOrder(order) {
        if (order instanceof Menu) {
            this.order.push(order);
        } 
    }


    describe (){
        return `${this.name} ordered a ${this.order}.`
    }

}

class OrderMenu {
    constructor(name) {
        this.order = []; //add S
     //   this.name = [];  is this necessary?
        this.selectedOrder = null;
    }
    

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1' :
                    this.createOrder();
                    break;
                case '2' :
                    this.deleteOrder();
                    break;
                case '3' :
                    this.viewOrder();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('See you on your next Coffee Run!');
    }

    
    showMainMenuOptions() {
        return prompt(`
        Choose an option below:
        ----------------------
        0. Cancel Order
        1. Create Order
        2. Delete Order
        3. View Order
        `);
    }
    
    showOrderSelectionOptions(orderInfo){
        return prompt(`
            0. Back to Main Menu
            1. Add Order
            2. Delete Order
         -----------------------------
            ${orderInfo}   
        `);
    }

    displayOrder(){
        let orderString = '';
        for (let i = 0; i < this.order.length; i++){
            orderString += i + ')' + this.order[i].name + '\n';
        }
        alert(orderString);
    }

    

    viewOrder() {
        let index = prompt('Enter the order number that you would like to review:');
        if (index > -1 && index < this.order.length) {
            this.selectedOrder = this.order[index];

            let description = 'Order Details: ' + this.selectedOrder.name + " " + this.selectedOrder.order + '\n';
                console.log(description);
            // for (let i = 0; i < this.selectedOrder.order.length; i++) {
            //     description += i + ')' + this.selectedOrder.order[i].orderString + '\n';
            //     console.log(this.selectedOrder.order[i]);
            // } 

            for (let i = 0; i < this.order.length; i++) {
                    description += i + ' ) ' + this.order[i].name + ' - ' + this.order[i].order 
                    + '\n';
                     console.log(this.order[i]);
            } 
    
        

            let selection = this.showOrderSelectionOptions(description);
            switch (selection) {
                case '1':
                    this.createOrder();
                    break;
                case '2':
                    this.deleteOrder();
            }
        }
    }

    createOrder() {
        let name = prompt('Who needs a pick-me-up?');
        let order = prompt(`Welcome, ${name}! What can we make for you?
        
        Menu Items:

        Black Coffee                   Vanilla Latte
        Vanilla Bean                   Caramel Frappaccino
        Mocha Latte                    Coffee with creamer 
        Caramel Latte                   ...Or Get Creative!
        _____________________________________________________

        All menu items are available in: 
        Small, Medmium, & Large
        `);
        this.order.push(new Customer(name, order));
        console.log(this.order);
        this.selectedOrder = this.order[this.order.length-1]
        alert(`Great choice! We're on it!`)
    }

    deleteOrder(){
        let index = prompt('Enter the selection of the order that you want remove.');
        if (index > -1 && index < this.order.length){
            this.order.splice(index, 1);
            alert('Selection has been successfully deleted.')
        }

    }

}


function promptOrder() {
    alert('Time for a pick-me-up? Click OK to start your Coffee Run.'); 
    let menu = new OrderMenu();
        menu.start();   
}





/*
The below code will bring up the prompt window after the button click and ask 
    'Who needs a pick me up?' Then it will display 

    function promptOrder() {
    let name = window.prompt('Who needs a pick me up?'); 
    let menu = new OrderMenu();
    alert(`Welcome, ${name}! Click OK to start your Coffee Run.`); {
        menu.start();   
    }
}

Works as intended! DO NOT CHANGE!!!

   

*/
  





