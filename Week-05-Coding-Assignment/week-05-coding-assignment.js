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

    class Item {
        constructor(name){
            this.name = name;
        }
    }


    class Order{
        constructor(size, name){
        this.name = name;
        this.size = size;
        this.item = [];
        }
    }

    class OrderMenu {
        constructor() {
            this.orders = [];
            this.selectedOrder = null;
        }
        

        start() {
            let selection = this.showMainMenuOptions();

            while (selection != 0) {
                switch (selection) {
                    case '1' :
                        this.showMainMenu();
                        break;
                    case '2' :
                        this.createNewOrder();
                        break;
                    case '3' :
                        this.viewItem();
                        break;
                    case '4' :
                        this.deleteItem();
                        break;
                    case '5':
                        this.viewEntireOrder();
                        break;
                    default:
                        selection = 0;
                }
                selection = this.showMainMenuOptions();
            }
            alert('See you on your next Coffee Run!')
        }

       
        showMainMenuOptions(){
            return prompt(`
            Choose an option below:
            ----------------------
            0. Cancel Order
            1. Create New Order
            2. View Item
            3. Delete Item
            4. View Entire Order
            `);
        }
        
        showOrderSelectionOptions(orderInfo){
            return prompt(`
                0. Back to Main Menu
                1. Add Item
                3. Add Size
                4. Delete Order
             -----------------------------
                ${orderInfo}   
            `);
        }

        displayOrder(){
            let orderString = '';
            for (let i = 0; i < this.orders.length; i++){
                orderString += i + ' - ' + this.orders[i].name + '\n';
            }
            alert(orderString);
        }

        addName() {
            let name = prompt(`You get a coffee! They get a coffee! Who else needs a coffee?`);
            this.names.push(new Order(name));
        }

        createOrder() {
            let name = prompt('Who needs a pick-me-up?');
            let order = prompt(`Welcome, ${name}! What can we make for you?`);
            this.orders.push(new Order(name, order));
        }

        createOrder() {
            let name = prompt('Who needs a pick-me-up?');
            this.order = prompt(`Welcome, ${name}! What can we make for you?`);
            this.orders.push(new Order(name));
            this.selectedOrder = this.orders[this.orders.length-1];
            this.addItem();
            alert(`Great choice, we're on it!`);
                        
        }

        viewOrder() {
            let index = prompt('Enter the order number that you would like to review:');
            if (index > -1 && index < this.orders.length) {
                this.orders = this.orders[index];

                let description = 'Order Name: ' + this.selectedOrder.name + '\n';

                for (let i = 0; i < this.selectedOrder.items.length; i++) {
                    description += i + ' - ' + this.selectedOrder.items[i].name
                    + ' - ' + this.order.names[i].item + '\n';
                }

                let selection = this.showOrderSelectionOptions(description);
                switch (selection) {
                    case '1':
                        this.addItem();
                        break;
                    case '2':
                        this.addSize();
                        break;
                    case '3':
                        this.deleteOrder();
                        break;
                }
            }
        }

        deleteOrder(){
            let index = prompt('Enter the order number that you would like to delete:');
            if (index > -1 && index < this.orders.length) {
                this.orders.splice(index, 1);
                alert('The order has successfully been deleted!')
            }
        }

        addItem(){
            let name = prompt(`What can we add to your order?

            Menu Items:
            __________________________________________________

            Black Coffee            |   Vanilla Latte
            Coffee with creamer     |   Carmel Frappaccino
            Mocha Latte             |   Vanilla Bean
            Carmel Latte            |   ...Or Get Creative!
            __________________________________________________
            
            All menu items are available in: 
            
            Small, Medmium, & Large

            `);
            this.selectedOrder.items.push(new Item(name));
        }

        deleteItem(){
            let index = prompt('Enter the item number that you would like to delete:');
            if (index > -1 && index < this.selectedOrder.items.length) {
                this.selectedOrder.splice(index, 1);
            }
        }

    }




function promptOrder() {
    alert('Time for a pick-me-up? Click OK to start your Coffee Run.'); 
        let menu = new OrderMenu();
        menu.start();  
}       
    
     





      

/* This will be for viewing an entire order

return `${this.name} has an order for ${this.customers.length} coffees.`


 addCustomer(customer){
            if (customer instanceof Customer) {
                this.customers.push(customer);
            }
        }


        addItem(item) {
            if (item instanceof Order) {
                this.item.push(item);
            } 
        }


        describe (){
            return `${this.name} ordered a ${this.size} ${this.item}.`
        }


*/