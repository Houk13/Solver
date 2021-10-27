import { HasFormatter } from '../interfaces/HasFormatter.js';

// classes
export class Payment implements HasFormatter{
    private recipient: string;
    public details: string;
    readonly amount: number;

    constructor(c: string, d: string, a: number){
        this.recipient = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}
