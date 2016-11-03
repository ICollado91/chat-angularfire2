import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({

  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./styles/app.component.css']
})
export class AppComponent {
    rooms: FirebaseListObservable<any[]>;
    messages: FirebaseListObservable<any[]>;
    id: number;
    constructor(af: AngularFire) {
        this.rooms = af.database.list('/Rooms');
        this.id = Math.random()*100000; //attempt to assign ID to rooms so only messages with that ID show up in that room.
        this.messages = af.database.list('/Messages');
    }
    addRoom(newRoom: string, id: number){
        this.rooms.push({name: newRoom, id: this.id});
    }
    deleteRoom(oldRoom: string){
        this.rooms.remove(oldRoom);
    }
}