import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SurveyComponent} from './survey/survey.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {AuthComponent} from './auth/auth.component';
import {AuthGuard} from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SurveyComponent
  },
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'authentication',
    component: AuthComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
