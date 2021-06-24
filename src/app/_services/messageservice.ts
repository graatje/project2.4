import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Message } from "../chatroom/message";
import { MESSAGES } from "../chatroom/mock_messages";

@Injectable({
    providedIn: 'root'
  })

export class MessageService{
    constructor(){};

    getMessages(): Observable<Message[]>{
        const messages = of(MESSAGES);
        return messages;
    }

    getMessage(messageid: number): Message{
        const message = MESSAGES.find(msg => msg.messageid === messageid) as Message;
        return message;
    }

    // more filtering required in the future. probably roomid?
}