
console.log('EXERCISE 1');

interface IMap<T> {
    setItem(key: string, item: T): void;
    getItem(key: string): T;
    clear(): void;
    printMap(): void;
}

class MyMap<T> implements IMap<T> {
    private map: { [key: string]: T } = {};

    setItem(key: string, item: T): void {
        this.map[key] = item;
    }
    
    getItem(key: string): T {
        return this.map[key];
    }

    clear(): void {
        this.map = {};
    }

    printMap(): void {
        for (let key in this.map) {
            console.log('key', key, 'item', this.map[key]);
        }
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
console.log('The value of "apples" is', numberMap.getItem('apples'));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();
 
const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
console.log('The value of "name" is', stringMap.getItem('name'));
stringMap.printMap();
stringMap.clear();
stringMap.printMap();

// original code

// The Problem: Create a generic Map (an Object like an Array, but instead with Key-Value Pairs). The key will always be a string. Let's keep it simple and only add the following methods to the Map:

// setItem(key: string, item: T) // should create a new key-value pair
     
// getItem(key: string) // should retrieve the value of the provided key
// clear() // should remove all key-value pairs
// printMap() // should output key-value pairs

// The map should be usable like shown below:

// const numberMap = new MyMap<number>();
// numberMap.setItem('apples', 5);
// numberMap.setItem('bananas', 10);
// numberMap.printMap();
 
// const stringMap = new MyMap<string>();
// stringMap.setItem('name', "Max");
// stringMap.setItem('age', "27");
// stringMap.printMap();
