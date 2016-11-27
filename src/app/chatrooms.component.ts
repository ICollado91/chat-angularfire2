import { Component } from '@angular/core';
import { AngularFire, AuthProviders, FirebaseListObservable } from 'angularfire2';

@Component ({
    selector: 'chat-room',
    templateUrl: 'chatrooms.component.html',
    styleUrls: ['./styles/chatrooms.component.css']
})

export class ChatRooms {

    rooms: FirebaseListObservable<any[]>;
    messages: FirebaseListObservable<any[]>;
    currentRoom: string;
    user = {};
    loggedIn: boolean;

    constructor(public af: AngularFire) {
        this.rooms = af.database.list('/Rooms');
        this.messages = af.database.list('/Messages');
        this.currentRoom = null;
        this.af.auth.subscribe(user => {
            if(user) {
                //user logged in
                this.user = user.auth.providerData[0].displayName;
                this.loggedIn = true;
            }
            else {
                //user not logged in
                this.user = {};
                this.loggedIn = false;
            }
        });
    }
    createRoom(newRoom: string){
        this.rooms.push({
            name: newRoom,
            createdBy: this.user
        });
        this.currentRoom = newRoom;
        event.preventDefault();
    }
    readRoom(room: string) {
        this.currentRoom = room;
    }
    deleteRoom(oldRoom: string){
        this.rooms.remove(oldRoom);
    }
    createMessage(newMessage: string) {
        this.messages.push({
            message: newMessage,
            chatroom: this.currentRoom,
            createdBy: this.user
        });
        event.preventDefault();
    }
    roomBoolean(room: string) {
        return (this.currentRoom === room);
    }

    login() {
        this.af.auth.login({
            provider: AuthProviders.Google
        });
    }

    logout() {
        this.af.auth.logout();
    }
}