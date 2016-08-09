import { Component } from '@angular/core';
import { ChatComponent } from './components/chat/chat.component';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ChatComponent]
})
export class AppComponent { }