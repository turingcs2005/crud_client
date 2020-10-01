import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEntryComponent } from './components/add-entry/add-entry.component';
import { DiariesComponent } from './components/diaries/diaries.component';
import { DiaryDetailsComponent } from './components/diary-details/diary-details.component';
import { EditEntryComponent } from './components/edit-entry/edit-entry.component';

const routes: Routes = [
  { path: '', component: DiariesComponent },
  { path: 'add-entry', component: AddEntryComponent },
  { path: 'diary-details/:id', component: DiaryDetailsComponent },
  { path: 'edit-entry/:id', component: EditEntryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
