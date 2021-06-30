import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { MessageService } from "../_services/messageservice";
import { Message } from './message';
@Component({
  selector: 'chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private messageService: MessageService,
    private authService: AuthService) {
    }
  messages?: Message[];
  message: string = "";
  constantUpdate: any;
  name: string="";
  ngOnInit(): void {
    console.log("on init:");
    console.log(this.messageService);
    this.messageService.getMessages(1)
    .subscribe(messages => this.messages = messages);  // getting the messages and storing them in messages.
    this.constantUpdate = setInterval(() => this.update(), 1000);
  }

  onEnterPress(){
    if(typeof this.message !== "undefined" && this.message.trim() !== ""){
      let tempname = this.authService.decodeToken()["name"];
      if(tempname !== "" && tempname !== null){
        this.name = tempname;
      }

      this.message = this.message.trim();
      let w: Message = {
        msgid: 1,
        sender: this.name,
        content: this.message,
        roomid: 1,
        timestamp: 1
      }
      console.log(w.content);
      this.addMessage(w);
      this.sendmessage(this.message);
    }
  }

  public update(){
    this.messageService.getMessages(1)?.subscribe(data => {
      let name = this.authService.decodeToken()["name"];
      for(var message of data){
        this.messageService.setLastMessageTimestamp(message.timestamp);
        if(message.sender === name){
          continue;
        }
        this.addMessage(message);

      }
    })
  }

  private sendmessage(msg: string){
    // handling sending the message to the database.
    console.log(msg);
    this.messageService.sendMessage(1, msg);
    this.message = "";  // clearing the message after it has been sent.
  }

  private addMessage(msg: Message){
    const node = document.createTextNode(": " + msg.content);
    const name = document.createElement("b");
    name.innerHTML = msg.sender;
    const paragraph = document.createElement("p");
    paragraph.appendChild(name);
    paragraph.appendChild(node);
    paragraph.style.margin = "0"; // necessary because we don't use angular to insert paragraphs.
    document.getElementById("messagebox")?.append(paragraph);
    if(msg.sender === this.name){
      document.getElementById("messagebox")?.scrollBy(0,500);
    }else{
      document.getElementById("messagebox")?.scrollBy(0,20);
    }
  }
}
