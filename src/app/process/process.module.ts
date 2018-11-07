import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ProcessService } from './service/process-service';
import { ProcessPage } from './process.page';

const routes: Routes = [
  {
    path: '',
    component: ProcessPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProcessPage],
  providers:[ProcessService]
})
export class ProcessPageModule {}
