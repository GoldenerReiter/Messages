import { Injectable } from "@nestjs/common/decorators/core";
import { readFile, writeFile } from "fs/promises";

@Injectable()
export class MessagesRepository {
    async findOne(id: string) {
        const contents:string = await readFile('messages.json', 'utf-8');
        const messages:{} = JSON.parse(contents);

        return messages[id];
    }
    async findAll() {
        const contents:string = await readFile('messages.json', 'utf-8');
        const messages:{} = JSON.parse(contents);

        return messages;
    }
    async create(message: string) {
        const contents:string = await readFile('messages.json', 'utf-8');
        const messages:{} = JSON.parse(contents);
        
        const id: number = Math.floor(Math.random() * 999);

        messages[id] = { id, message };

        await writeFile('messages.json', JSON.stringify(messages));
    }
}