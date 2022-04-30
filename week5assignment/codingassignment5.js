class Food {
    constructor(food, quantity){
        this.food = food;
        this.quantity = quantity;
    }

    describe() {
        return `buy ${this.quantity} ${this.food}.`;
    }

}

class List {
    constructor(food) {
        this.food = food;
        this.items = [];   
    }

    addFood(name) {
        if(name instanceof Food ){
            this.items.push(name);
     } else {
            throw new Error(`You can only add food items to the list. Argument is not a food: ${food}`);
     }
    }

    describe(){
        return `${this.food} has ${this.items.length} items.`;
      } 
    }

    class Menu {
        constructor() {
            this.lists =[];
            this.selectedList = null;
        }

        start() {
            let selection = this.showMainMenuOptions();
            while (selection != 0) {
                switch (selection) {
                    case '1': 
                        this.createList();
                        break;
                    case '2':
                        this.viewList();
                        break
                    case'3':
                        this.deleteName();
                        break;
                    case '4' :
                        this.displayLists();
                        break;
                    default:
                            selection = 0;
                }
                selection = this.showMainMenuOptions(); 
            }
            alert('Goodbye!');
        }

        showMainMenuOptions() {
            return prompt(`
            0) Exit
            1) Create new grocery list
            2) View list
            3) Delete list
            4) Display lists
            `);
        }

        ShowListMenuOptions(listInfo) {
            return prompt(`
            0) back
            1) add item
            2) delete item
            ------------------
            ${listInfo}
            `);
        }

        displayLists() {
            let listString = '';
            for (let i = 0; i < this.lists.length; i++){
                listString += i + ') ' + this.lists[i].food + '\n';
            }
            alert(listString);
        }

        createList() {
            let food = prompt('What do you want to name your grocery list?:')
            this.lists.push(new List(food));
        }

        viewList() {
            let value = prompt('Enter the value of the list you want to look at:');
            if(value > -1 && value < this.lists.length) {
                this.selectedList = this.lists[value];
                let description = 'List Name: ' + this.selectedList.food + '\n';


            for (let i= 0; i < this.selectedList.items.length; i++) {
                description += i + ') ' + this.selectedList.items[i].food
                + ' - ' + this.selectedList.items[i].quantity + '\n';
            }
            let selection = this.ShowListMenuOptions(description);
            switch(selection) {
                case '1':
                    this.createName();
                    break;
                case '2':
                    this.deleteName();
            }
         }
     }
    
     createName() {
         let food = prompt('Enter name of food you want to add to the list:');
         let quantity = prompt('Enter desired qauntity of said food:');
         this.selectedList.items.push(new Food(food, quantity));
     }

     deleteName() {
         let value = prompt('Enter the value of which item you wish to delete:');
         if (value > -1 && value < this.selectedList.items.length) {
             this.selectedList.items.splice(value, 1);
         }
     }
     
 }

let menu = new Menu();
menu.start();

