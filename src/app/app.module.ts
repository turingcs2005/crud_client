import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { DiariesComponent } from './components/diaries/diaries.component';
import { DiaryDetailsComponent } from './components/diary-details/diary-details.component';
import { AddEntryComponent } from './components/add-entry/add-entry.component';
import { EditEntryComponent } from './components/edit-entry/edit-entry.component';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    DiariesComponent,
    DiaryDetailsComponent,
    AddEntryComponent,
    EditEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
