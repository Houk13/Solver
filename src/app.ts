import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/listTemplate.js';
import { Payment } from './classes/payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';



const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);


form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter;
    if (type.value === 'invoice'){
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }
    
    list.render(doc, type.value, 'end');

})

// ENUMS

enum ResourceTypes { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

// GENERICS

const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: 'yoshi', age: 40});
console.log(docOne);

// with interfaces
interface Resource<T> {
    uid: number;
    resourceType: ResourceTypes;
    data: T;
}

const testOne: Resource<number> = {
    uid: 50,
    resourceType: ResourceTypes.FILM,
    data: 100
}

console.log(testOne);

// tuples

let arr = ['ryu', 25, true];
let tup: [string, number, boolean] = ['ryu', 25, true];
