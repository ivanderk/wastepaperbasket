import { Controller, Get, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {

    @Get()
    findAll() {
        return [{
                id: 1,
                name: 'Luna',
                sound: 'Mau'
            },
            {
                id: 2,
                name: 'Monstruo',
                sound: 'Wuff'
            },
            {
                id: 3,
                name: 'Pimpelotte',
                sound: 'MauMauMau'
            }];
    }

    @Get(':id')
    findOne(@Param() params) {
        console.log(params.id);
        return {
            id: 3,
            name: 'Pimpelotte',
            sound: 'MauMauMau'
        };
    }

}