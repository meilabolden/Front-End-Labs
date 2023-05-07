/*  */

class Customer {
    constructor(name){
        this.name = name;
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


    createOrder(order) {
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
        this.order = [];
        this.name = [];
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
        0. Cancel Order
        1. Create Order
        2. Delete Order
        3. View Order
        `);
    }
    
    showOrderSelectionOptions(orderInfo){
        return prompt(`
            0. Back
            1. Add Order
            2. Delete Order
            3. View Entire Order
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
        let index = prompt('Enter the number of the order that you would like to review:');
        if (index > -1 && index < this.order.length) {
            this.order = this.order[index];
            let description = 'Order Name: ' + this.order + '\n';

            for (let i = 0; i < this.order.length; i++) {
                description += i + ')' + this.order.name[i].name
                    + ' - ' + this.order.name[i].order + '\n';
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
        let order = prompt(`Welcome, ${name}! What can we make for you?`);
        this.order.push(new OrderMenu(name, order));
    }

    deleteOrder(){
        let index = prompt('Enter the selection of the order that you want remove.');
        if (index > -1 && index < this.order.length){
            this.order.name.splice(index, 1);
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
  





