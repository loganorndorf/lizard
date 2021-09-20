import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { CurrentItemListComponent } from './components/current-item-list/current-item-list.component';
import { RecentUpdatesListComponent } from './components/recent-updates-list/recent-updates-list.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { UpdateCardComponent } from './components/update-card/update-card.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddItemComponent,
    CurrentItemListComponent,
    RecentUpdatesListComponent,
    ItemCardComponent,
    UpdateCardComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
