import { Cat } from './interfaces/cats.interface';
export declare class CatsService {
    private readonly cats;
    constructor(cats: Cat[]);
    create(cat: any): void;
    findAll(): any[];
}
