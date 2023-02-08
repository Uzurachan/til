import { Controller, Get, Req, Post, HttpCode, Header, Body, Redirect, Param } from '@nestjs/common'
import { Request } from 'express'
import { CreateCatDto } from './dto/create-cat.dto'
import { CatsService } from './cats.service'
import { Cat } from './interfaces/cat.interface'

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(@Req() request: Request): Promise<any[]> {
    console.log(request.query)
    return this.catsService.findAll()
  }

  @Get('nyan')
  @Redirect('https://nestjs.com', 302)
  nyan(): string {
    return 'mya'
  }

  /*
  @Get(':id')
  findOne(@Param('id') id: number): string {
    console.log(id)
    return `id: ${id}`
  }
  */

  @Post('create')
  //@HttpCode(204)
  @Header('Cache-Control', 'none')
  create(@Body() createCatDto: CreateCatDto): string {
    console.log(JSON.stringify(createCatDto))
    this.catsService.create(createCatDto)
    return 'created'
  }
}
