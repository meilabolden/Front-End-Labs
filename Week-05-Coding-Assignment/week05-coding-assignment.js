/* Week 05 Coding Assignment

Coding Steps:
Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
Use at least one array.
Use at least two classes.
Your menu should have the options to create, view, and delete elements.
 */

/*------------------------------------------------------------------------------------*/

class Customer {
    constructor(name, order, size){
        this.name = name;
        this.order = order;
        this.size = size;
    }
    describe() {
        return `${this.name} ordered a ${this.small} ${this.order}.`;
    }
}


class OrderMenu {
    constructor(name) {
        this.order = [];
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
                case '4' :
                    this.viewEntireOrder();
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
        3. View Individual Order
        4. View Entire Order
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

    showFullOrderSelectionOptions(orderInfo){
        return prompt(`
        View Full Order Below: 
        ------------------------------
            0. Back to Main Menu
            1. Add Order
            2. Delete Order
        -------------------------------

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

            let description = `Order Details:  ${this.selectedOrder.name} ordered a ${this.selectedOrder.size} ${this.selectedOrder.order} ` + '\n';
                console.log(description);

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

    viewEntireOrder() {

            let description = ''; 
                for (let i = 0; i < this.order.length; i++) { 
                    description += i + ' ) ' + this.order[i].name + ' - ' + this.order[i].size + ' ' + this.order[i].order + '\n';
                     console.log(this.order[i]);
                    } 

                let selection = this.showFullOrderSelectionOptions(description);
                switch (selection) {
                case '1':
                    this.createOrder();
                    break;
                case '2':
                    this.deleteOrder();
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
        `);
        let size = prompt(`Sounds delicious! What size would you like?
        ------------------------------------------------------
        All menu items are available in: 
        Small, Medium, & Large`)
        this.order.push(new Customer(name, order, size));
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






  





