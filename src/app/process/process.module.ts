import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ProcessService } from './service/process-service';
import { ProcessPage } from './process.page';
import { ProcessCardComponent } from './component/process-card/process-card.component';
import localeFr from '@angular/common/locales/fr';

import { registerLocaleData } from '@angular/common';
import localeFrExtra from '@angular/common/locales/extra/fr';

registerLocaleData(localeFr, 'fr-FR', localeFrExtra);
// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');
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
  declarations: [ProcessPage, ProcessCardComponent],
  providers:[ProcessService]
})
export class ProcessPageModule {}
