

let order = window.prompt("Choose between vanilla, coffee, strawberry, or chocolate. Enter your flavors below:","vanilla, vanilla, strawberry, etc.");

console.log(order);



const flavors = order.split(",");

console.log(flavors);

const trimmedFlavors = flavors.map(flavor => flavor.trim());

console.log(trimmedFlavors);



const groupFlavors = trimmedFlavors.reduce((acc, flavor) => {
    acc[flavor] = (acc[flavor] || 0) + 1;
    return acc;
}, {});

console.table(groupFlavors); 


