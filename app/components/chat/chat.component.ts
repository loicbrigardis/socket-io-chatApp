import { Component, OnInit, OnDestroy } from '@angular/core';
import { Control } from '@angular/common';
import { ChatService } from './chat.service';

@Component({
    moduleId: module.id,
    selector: 'chat',
    templateUrl: 'chat.component.html',
    providers: [ChatService]
})
export class ChatComponent implements OnInit, OnDestroy {
    
    messages:any = [];
    message:string;
    connection:any;

    constructor(private _chatService:ChatService) { }

    ngOnInit() { 
        this.connection = this._chatService.getMessages().subscribe(
            message => {
                console.log(message);
                this.messages.push(message);
            }
        )
    }

    ngOnDestroy () {
        this.connection.unsubscribe();
    }

    sendMessage() {
        this._chatService.sendMessage(this.message);
        this.message = '';
        
    }

}