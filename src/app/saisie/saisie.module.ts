import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ResponsableCardComponent } from './components/responsable-card/responsable-card.component';
import { ResponsablesPage } from './components/responsables-page/responsables.page';
import { SaisiePage } from './saisie.page';
import {ProjetService} from './services/projet-service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    
    RouterModule.forChild([
      {
        path: '',
        component:  SaisiePage},

          {
            path: 'responsables',
           component:  ResponsablesPage
           }
      
    ])
  ],
  declarations: [ SaisiePage,ResponsableCardComponent,ResponsablesPage],
  providers: [ProjetService]
})
export class  SaisiePageModule {}
