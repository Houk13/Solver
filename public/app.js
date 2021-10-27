import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/listTemplate.js';
import { Payment } from './classes/payment.js';
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// ENUMS
var ResourceTypes;
(function (ResourceTypes) {
    ResourceTypes[ResourceTypes["BOOK"] = 0] = "BOOK";
    ResourceTypes[ResourceTypes["AUTHOR"] = 1] = "AUTHOR";
    ResourceTypes[ResourceTypes["FILM"] = 2] = "FILM";
    ResourceTypes[ResourceTypes["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceTypes[ResourceTypes["PERSON"] = 4] = "PERSON";
})(ResourceTypes || (ResourceTypes = {}));
// GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
console.log(docOne);
const testOne = {
    uid: 50,
    resourceType: ResourceTypes.FILM,
    data: 100
};
console.log(testOne);
// tuples
let arr = ['ryu', 25, true];
let tup = ['ryu', 25, true];
