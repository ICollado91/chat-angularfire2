import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component ({
    selector: 'chat-room',
    templateUrl: 'chatrooms.component.html',
    styleUrls: ['./styles/chatrooms.component.css']
})

export class ChatRooms {

    rooms: FirebaseListObservable<any[]>;
    messages: FirebaseListObservable<any[]>;
    currentRoom: string;

    constructor(af: AngularFire) {
        this.rooms = af.database.list('/Rooms');
        this.messages = af.database.list('/Messages');
        this.currentRoom = null;
    }
    createRoom(newRoom: string){
        this.rooms.push({name: newRoom});
        this.currentRoom = newRoom;
    }
    readRoom(room: string) {
        this.currentRoom = room;
    }
    deleteRoom(oldRoom: string){
        this.rooms.remove(oldRoom);
    }
    createMessage(newMessage: string) {
        if (!this.currentRoom) {
            alert('Select a Room! WHAT IS WRONG WITH YOU?!')
            return;
        }
        this.messages.push({
            message: newMessage,
            chatroom: this.currentRoom
        });
    }
    roomBoolean(room: string) {
        return (this.currentRoom === room) ? true : false;
    }
}