import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Header,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Req,
  UseFilters,
  UsePipes,
} from '@nestjs/common';
import {Request} from 'express';
import { CreateCatDto } from './create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cats.interface';
import { HttpExceptionFilter } from '../http-exception.filter';
import { JoiValidationPipe } from '../joi-validation.pipe';
import { ValidationPipe } from '../validation.pipe';


@Controller('cats')
@UseFilters(new HttpExceptionFilter()) //filtro personalizado de excepciones a nivel de clase
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  /*GET
  * http://localhost:3000/cats
  * */
  @Get()
  async findAll(@Req() request: Request) {
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN); //lanzamiento de eception con mensaje default
    throw new ForbiddenException(); //lanzamiento de eception mia personalizada
    /*throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: 'This is a custom message',
    }, 403); //lanzamiento de eception con mensaje modificado*/
  }

  /*GET
  * http://localhost:3000/cats/asinc
  * */
  @Get('asinc')
  async findAllas(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  /*GET
  * http://localhost:3000/cats/1
  * */
  @Get(':id')
  findAllParams(@Param() params): string {
    console.log(params.id);
    return 'this is a cat' + params.id;
  }

  /* POST
  * http://localhost:3000/cats
  * */
  @Post()
  //@UseFilters(new HttpExceptionFilter()) //filtro personalizado de excepciones a nivel de metodo
  create(): string {
    throw new ForbiddenException();
  }

  /* POST
  * http://localhost:3000/cats/crear
  * CreateCatDTO
  * */
  @Post('crear')
  async create4(@Body(new ValidationPipe()) createDTO: CreateCatDto) {
    this.catsService.create(createDTO);
    return 'this cat is created' + createDTO.name;
  }

  /* POST
  * http://localhost:3000/cats/changeCode
  * */
  @Post('changeCode')
  @HttpCode(204)
  create2(): string {
    return 'this cat is created with code 204';
  }

  /* POST
    * http://localhost:3000/cats/caches
    * */
  @Post('caches')
  @Header('Cache-Control', 'none')
  create3(): string {
    return 'this cat is created without cache';
  }

  /*PATRON
  * GET http://localhost:3000/cats/abdcd
  * */
  @Get('ab*cd')
  finaAll() {
    return 'this random cats';
  }
}
