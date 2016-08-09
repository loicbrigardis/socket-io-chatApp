import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'chat',
    templateUrl: 'chat.component.html'
})
export class ChatComponent implements OnInit {
    
    messages:any = [];
    message:string;

    constructor() { }

    ngOnInit() { }

    sendMessage() {
        console.log(this.message);
        
    }

}