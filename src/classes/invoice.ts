import { HasFormatter } from '../interfaces/HasFormatter.js';

// classes
export class Invoice implements HasFormatter{
    private client: string;
    public details: string;
    readonly amount: number;

    constructor(c: string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
