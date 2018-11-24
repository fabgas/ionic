import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/component/login.component';
import { AuthGuard } from './auth/_guards/auth.guards';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },

  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'saisie',
    loadChildren: './saisie/saisie.module#SaisiePageModule',
    canActivate: [AuthGuard]
  },
  { path: 'process', loadChildren: './process/process.module#ProcessPageModule' ,  canActivate: [AuthGuard]},
  { path: 'detailprocess', loadChildren: './detailprocess/detailprocess.module#DetailprocessPageModule',  canActivate: [AuthGuard] },
  { path: 'indicateurs-multisite', loadChildren: './indicateurs-multisite/indicateurs-multisite.module#IndicateursMultisitePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
