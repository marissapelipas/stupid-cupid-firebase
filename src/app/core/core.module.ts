import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from '../recipes/recipe.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { FooterComponent } from './footer/footer.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import { ImagesComponent } from './images/images.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    AddProfileComponent,
    ImagesComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
  ]
})
export class CoreModule {}
