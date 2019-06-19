import { Request } from 'express';
import { CreateCatDto } from '../create-cat.dto';
import { Cat } from './interfaces/cats.interface';
export declare class CatsController {
    constructor();
    findAll(request: Request): string;
    findAllas(): Promise<Cat[]>;
    findAllParams(params: any): string;
    create(): string;
    create4(createDTO: CreateCatDto): Promise<string>;
    create2(): string;
    create3(): string;
    finaAll(): string;
}
