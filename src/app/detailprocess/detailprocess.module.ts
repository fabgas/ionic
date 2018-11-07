import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import {HttpClientModule} from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { DetailProcessService} from './service/detail-process-service';
import { DetailprocessPage } from './detailprocess.page';

const routes: Routes = [
  {
    path: '',
    component: DetailprocessPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers:[DetailProcessService],
  declarations: [DetailprocessPage]
})
export class DetailprocessPageModule {}
