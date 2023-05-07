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
    alert('Time for a pick-me-up? Click OK to start your Coffee Run.'); 
    let menu = new OrderMenu();
        menu.start(); 
        

    class Customer {
        constructor(name){
            this.name = name;
        }
    }


    class Order extends Customer{
        constructor(item, size, name){
        super(name)
        this.item = item;
        this.size = size;
        this.names = [];
        }

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
                        this.addItem();
                        break;
                    case '2' :
                        this.selectSize();
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

       
        showMainMenuOptions(){
            return prompt(`
            0. Cancel Order
            1. Add Item
            2. Add Size
            3. Delete Item
            4. View Entire Order
            `);
        }
        
        showOrderSelectionOptions(orderInfo){
            return prompt(`
                0. Back
                1. Add Item
                3. Add Size
                4. Delete Item and Size
                5. View Entire Order
             -----------------------------
                ${orderInfo}   
            `);
        }

        displayOrder(){
            let orderString = '';
            for (let i = 0; i < this.names.length; i++){
                orderString += i + ')' + this.names[i].name + '\n';
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
            this.order.push(new OrderMenu(name, order));
        }

        viewOrder() {
            let index = prompt('Enter the number of the order that you would like to review:');
            if (index > -1 && index < this.order.length) {
                this.order = this.order[index];
                let description = 'Order Name: ' + this.selectedName.name + '\n';

                for (let i = 0; i < this.order.length; i++) {
                    description += i + ')' + this.order[i].name
                    + ' - ' + this.order.names[i].item + '\n';
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

    }




    



}

      

/* This will be for viewing an entire order

return `${this.name} has an order for ${this.customers.length} coffees.`

*/