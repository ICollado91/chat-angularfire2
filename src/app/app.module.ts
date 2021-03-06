import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChatRooms } from './chatrooms.component';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyBmEbYm-BybuGB1NryNxCUuVZY2IxSm_AU",
    authDomain: "bloc-chat-f9a61.firebaseapp.com",
    databaseURL: "https://bloc-chat-f9a61.firebaseio.com",
    storageBucket: "bloc-chat-f9a61.appspot.com"
};

export const firebaseAuthConfig = {
    provider: AuthProviders.Google,
    method: AuthMethods.Popup
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  declarations: [ 
      AppComponent,
      ChatRooms
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}