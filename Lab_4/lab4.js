class shoesCase {
    constructor(id, size, color, discount, cost) {
        this.id = id;
        this.size = size;
        this.color = color;
        this.discount = discount;
        this.newCost = cost;
    }
    get cost() {
        return parseFloat((this.newCost * (1 - this.discount / 100)).toFixed(2));
    }
    set cost(newPrice) {
        this.newCost = newPrice;
    }
}
let allProduct = {
    Boots: [
        new shoesCase(1, 22, "green", 10, 42),
        new shoesCase(2, 38, "red", 10, 80),
        new shoesCase(3, 34, "blue", 20, 100),
    ],
    Sneakers: [
        new shoesCase(4, 45, "green", 10, 42),
        new shoesCase(5, 30, "black", 50, 1000),
    ],
    Sandals: [
        new shoesCase(6, 20, "red", 10, 62),
        new shoesCase(7, 22, "green", 20, 20),
        new shoesCase(8, 42, "white", 10, 42),
    ],
    [Symbol.iterator]() {
        let categories = [...this.Boots, ...this.Sneakers, ...this.Sandals];
        let current = 0;
        return {
            next() {
                if (current < categories.length) {
                    return { done: false, value: categories[current++] };
                }
                else {
                    return { done: true, value: null };
                }
            },
        };
    },
};
console.log(allProduct.Boots[0].color);
for (let product of allProduct) {
    console.log(`id ${product.id}, size ${product.size}, color ${product.color}, discount ${product.discount}, cost ${product.cost}`);
}
function filter(minPrice, maxPrice, size, color) {
    let filteredIds = [];
    for (let product of allProduct) {
        if (product.cost >= minPrice && product.cost <= maxPrice && product.size === size && product.color === color)
            filteredIds.push(product.id);
    }
    return filteredIds;
}
console.log(filter(10, 40, 22, 'green'));
let product = {
    shoesCase1: {
        boots: [
            { id: 11, size: 35, color: 'red', price: 34 }
        ],
    }
};
console.log(product.shoesCase1.boots[0].color);
