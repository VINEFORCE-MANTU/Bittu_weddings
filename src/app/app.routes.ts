import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './home/home';
import { Couple } from './couple/couple';
import { EventComponent } from './event/event';
import { Family } from './family/family';
import { Gallery } from './gallery/gallery';

export const routes: Routes = [
  { path: '', component: Home },   // ✅ only one
  { path: 'gallery', component: Gallery }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}