import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GalleryOfFamePage } from './gallery-of-fame.page';

const routes: Routes = [
  {
    path: '',
    component: GalleryOfFamePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GalleryOfFamePage]
})
export class GalleryOfFamePageModule {}
