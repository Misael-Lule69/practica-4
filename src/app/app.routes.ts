import { Routes } from '@angular/router';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { LikesComponent } from './likes/likes.component';
import { SubjectsComponent } from './subjects/subjects.component';

export const routes: Routes = [
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'likes', component: LikesComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: '', redirectTo: '/hobbies', pathMatch: 'full' }
];