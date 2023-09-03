import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-message.dto';
import { MessagesService } from './mesages.service';

@Controller('messages')
export class MessagesController {
    constructor(public messagesService: MessagesService) { }

    @Get()
    listMessages() { return this.messagesService.findAll(); }

    @Post()
    createMessage(@Body() body: CreateMessageDTO) { return this.messagesService.create(body.content); }

    @Get('/:id')
    async getMessage(@Param('id') id: string) {
        const message: string = await this.messagesService.findOne(id);

        if (!message) {
            throw new NotFoundException("Error 404. Message not found.");
        }

        return message;
    }
}
