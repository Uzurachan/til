import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = []  

  create(cat: Cat) {
    console.log('cats.service create()')
    console.log(JSON.stringify(cat, null, 4))
    this.cats.push(cat)
  }

  findAll(): Cat[] {
    console.log('cats.service findAll()')
    return this.cats
  }
}
