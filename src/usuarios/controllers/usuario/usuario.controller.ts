import { Controller, Get, Req, Param, Post, Body, Query, Put } from '@nestjs/common';

export class CreateCatDto {
    readonly name: string;
    readonly age: number;
    readonly breed: string;
}

@Controller('usuario')
export class UsuarioController {
    @Get('get/:id')
    getHello(@Param() params): string {
        return 'Holaaaa que tal #' + String(JSON.stringify(params));
    }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        //return JSON.stringify(createCatDto)
        return 'Super: '+ createCatDto.name;
    }

    @Get('query')
    findAll(@Query() query) {
        //example = http://localhost:3000/user/query?hola=1&chao=2
        return `This action returns all cats (limit: ${query.hola} items)`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: CreateCatDto) {
        return `This action updates a #${id} cat ` + updateCatDto.name;
    }

}
