import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MESSAGES } from './mock_messages';
import { MessageService } from "../_services/messageservice";
import { Message } from './message';
@Component({
  selector: 'chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private messageService: MessageService) { }
  messages?: Message[];
  message: string = "";
  ngOnInit(): void {
    this.messageService.getMessages()
    .subscribe(messages => this.messages = messages);  // getting the messages and storing them in messages.
  }

  onEnterPress(){
    if(typeof this.message !== "undefined" && this.message.trim() !== ""){
      this.message = this.message.trim();
      this.sendmessage(this.message);
    }
  }
  private sendmessage(msg: string){
    // handling sending the message to the database.
    console.log(msg);
    this.addMessage(msg);
    this.message = "";  // clearing the message after it has been sent.
  }

  private addMessage(msg: string){
    var node = document.createTextNode(msg);
    var paragraph = document.createElement("p");
    
    paragraph.appendChild(node);
    paragraph.className = "message";
    paragraph.style.marginTop = "-10px";  // it did not apply the style in the css??????
    document.getElementById("messagebox")?.append(paragraph);
    document.getElementById("messagebox")?.scrollBy(0,20);
  }
}
