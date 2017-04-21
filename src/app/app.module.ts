import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { SingleComponent } from './single/single.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeartsComponent } from './hearts/hearts.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {ProfilesModule} from "./profiles/profiles.module";
import { SearchComponent } from './search/search.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import {FormsModule} from "@angular/forms";
import { MessagingComponent } from './messaging/messaging.component';
import {OnlineUsersComponent} from "./search/online-users/online-users.component";
import { OnlineItemComponent } from './search/online-users/online-item/online-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleComponent,
    DashboardComponent,
    HeartsComponent,
    WelcomeComponent,
    SearchComponent,
    SearchItemComponent,
    MessagingComponent,
    OnlineUsersComponent,
    OnlineItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    ShoppingListModule,
    ProfilesModule,
    CoreModule,
    AuthModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
