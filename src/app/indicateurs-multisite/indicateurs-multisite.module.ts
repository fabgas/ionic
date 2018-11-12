import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IndicateursMultisitePage } from './indicateurs-multisite.page';
import { IndicateurCardComponent } from './components/indicateur-card/indicateur-card.component';
import { DetailIndicateurComponent } from './components/detail-indicateur/detail-indicateur.component';
import { IndicateurDetailService} from './services/indicateur-detail.service';
const routes: Routes = [
  {
    path: '',
    component: IndicateursMultisitePage
  }
  ,
  { path: 'detailIndicateur', component: DetailIndicateurComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers:[IndicateurDetailService],
  declarations: [IndicateursMultisitePage, IndicateurCardComponent, DetailIndicateurComponent]
})
export class IndicateursMultisitePageModule {}
