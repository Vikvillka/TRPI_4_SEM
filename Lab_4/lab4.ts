class shoesCase{
    readonly id: number;
    public size: number;
    public color: string;
    public discount: number;
    private newCost: number;

    constructor(id: number, size: number, color: string, discount: number, cost: number) {
        this.id = id;
        this.size = size;
        this.color = color;
        this.discount = discount;
        this.newCost = cost;
    }

    public get cost(): number {
        return parseFloat((this.newCost * (1 - this.discount / 100)).toFixed(2));
    }

    public set cost(newPrice: number) {
        this.newCost = newPrice;
    }
}

interface ShoesCollection {
    Boots: shoesCase[];
    Sneakers: shoesCase[];
    Sandals: shoesCase[];
}

let allProduct:ShoesCollection & Iterable<shoesCase> = {
    Boots: [
        new shoesCase(1, 22, "green", 10, 42),
        new shoesCase(2, 38, "red", 10, 80),
        new shoesCase(3, 34, "blue", 20, 100),
    ],
    Sneakers:[
        new shoesCase(4, 45, "green", 10, 42),
        new shoesCase(5, 30, "black", 50, 1000),
    ],
    Sandals: [
        new shoesCase(6, 20, "red", 10, 62),
        new shoesCase(7, 22, "green", 20, 20),
        new shoesCase(8, 42, "white", 10, 42),
    ],
    [Symbol.iterator](){
        let categories: shoesCase[] = [...this.Boots, ...this.Sneakers, ...this.Sandals];
        let current: number = 0;
        return {
            next(): IteratorResult<shoesCase> {
                if (current < categories.length) {
                    return { done: false, value: categories[current++] };
                } else {
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

function filter(minPrice: number, maxPrice: number, size: number, color: string): number[] {
    let filteredIds: number[] = [];
    for (let product of allProduct) {
        if (product.cost >= minPrice && product.cost <= maxPrice && product.size === size && product.color === color)
            filteredIds.push(product.id);
    }
    return filteredIds;
}

console.log(filter(10, 40, 22, 'green'));

type product = {
    id : number,
    size : number,
    color : string,
    price : number;
}

type shoesCase1 = {
    boots : product[];
}

type products ={
    shoesCase1 : shoesCase1;
}


let product: products = {
    shoesCase1: {
        boots: [
            {id: 11, size: 35, color: 'red', price: 34 }
        ],
       
    }
}
