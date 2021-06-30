import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Message } from "../chatroom/message";
import jwt_decode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
  })

export class MessageService{
    lastMessageTimestamp: number;
    constructor(private http: HttpClient){
        this.lastMessageTimestamp = new Date().getTime();
    }
    
    setLastMessageTimestamp(timestamp: number){
      if(timestamp > this.lastMessageTimestamp){
        this.lastMessageTimestamp = timestamp
      }
    }
    sendMessage(chatroomid: number, message: string){
      try{
        let token = localStorage.getItem("id_token");
        const formData = new FormData();
        if(token === null){
          return;
        }
        formData.set("jwt", token);
        formData.set("chatroomid", "" + chatroomid);
        formData.set("message", message);
        return this.http.post("http://localhost:8080/chatroom/sendmessage", formData).subscribe();
      }
      catch(Error){
        console.log(Error);
        return;
      }
    }

    getMessages(chatroomid: number): Observable<Message[]>{
        // chatroom/{chatroomid}/{timestamp}
        return this.http.get<Message[]>("http://localhost:8080/chatroom/" + chatroomid + "/"+ this.lastMessageTimestamp);
    }

  //  getMessage(messageid: number): Message{
      //  const message = MESSAGES.find(msg => msg.msgid === messageid) as Message;
    //    return message;
   // }

    // more filtering required in the future. probably roomid?
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error);
          console.log(`${operation} failed: ${error.message}`);
    
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
    
}