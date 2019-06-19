import { Request } from 'express';
import { CreateCatDto } from './create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cats.interface';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    findAll(request: Request): Promise<void>;
    findAllas(): Promise<Cat[]>;
    findAllParams(params: any): string;
    create(): string;
    create4(createDTO: CreateCatDto): Promise<string>;
    create2(): string;
    create3(): string;
    finaAll(): string;
}
