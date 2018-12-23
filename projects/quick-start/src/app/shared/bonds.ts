import { Security } from './security';
// ng g class Bonds
export class Bonds implements Security {
    trade() {
        throw new Error('Method not implemented.');
    }
    fairValue() {
        throw new Error('Method not implemented.');
    }

    constructor() {}

    getBonds() {}
}
