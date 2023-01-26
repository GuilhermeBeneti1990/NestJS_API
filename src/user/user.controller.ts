import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";

@Controller('users')
export class UserController {

    @Get()
    async findAll() {
        return {
            method: 'GET',
            users: []
        };
    }

    @Get(':id')
    async findOne(@Param() params) {
        return {
            method: 'GET',
            user: {},
            params
        };
    }

    @Post()
    async create(@Body() body: CreateUserDTO) {
        return {
            method: 'POST',
            body
        };
    }

    @Put(':id')
    async update(@Body() {name, email, password}: UpdateUserDTO, @Param() params) {
        return {
            method: 'PUT',
            name, email, password,
            params
        }
    }

    @Delete(':id')
    async delete(@Param('id') id) {
        return {
            method: 'DELETE',
            id
        }
    }
    
}