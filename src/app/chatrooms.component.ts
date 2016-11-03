import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component ({
    selector: 'chat-room',
    templateUrl: 'chatrooms.component.html',
    styleUrls: ['./styles/chatrooms.component.css']
})

export class ChatRooms {
    messages: FirebaseListObservable<any[]>;
    constructor(af: AngularFire) {
        this.messages = af.database.list('/Messages')
    }
    addMessage(newMessage: string){
        this.messages.push(newMessage);
    }
}