import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';
import {ProfilesComponent} from './profiles/profiles.component';
import { AboutComponent } from './core/about/about.component';
import { ContactComponent } from './core/contact/contact.component';
import { AddProfileComponent } from './core/add-profile/add-profile.component';
import {AuthService} from "./auth/auth.service";
import {ProfilesService} from "./profiles/profiles.service";
import {UploadImagesService} from "./core/images/upload-image.service";
import {SearchComponent} from "./search/search.component";
import {OnlineUsersComponent} from "./search/online-users/online-users.component";
import {OnlineUserService} from "./profiles/online-user.service";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  { path: 'profile', loadChildren: './profiles/profiles.module#ProfilesModule'},
  { path: 'shopping-list', component: ShoppingListComponent },
//
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'addprofile', component: AddProfileComponent },
  { path: 'search', component: SearchComponent },
  { path: 'onlineUsers', component: OnlineUsersComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule],
  providers: [
    AuthService,
    ProfilesService,
    UploadImagesService,
    OnlineUserService
  ]
})
export class AppRoutingModule {

}
