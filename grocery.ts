class Grocery {
    name: string;
    description: string;
    quantity: number;

    constructor(name: string, description: string, quantity: number) {
        this.name = name;
        this.description = description;
        this.quantity = quantity;
    }
}

let item_bread = new Grocery("Bread", "White, wheat, or Rye!" , 2);
let item_milk = new Grocery("Milk", "From skim to whole, we have it all", 3);
let item_eggs = new Grocery("Eggs", "Farm fresh eggs from your favorite place!", 2);

let groceries: Grocery[] = [];

groceries.push(item_bread);
groceries.push(item_eggs);
groceries.push(item_milk);

const table = document.getElementById('grocery') as HTMLTableElement;

groceries.map(grocery => {
    const {name, description, quantity} = grocery;
    const row = table.insertRow()
    row.innerHTML = `
            <td id="name">${name}</td>
            <td id="desc">${description}</td>
            <td id="qty">${quantity}</td>`;
});