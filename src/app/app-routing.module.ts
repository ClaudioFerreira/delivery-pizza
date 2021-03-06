import { UserComponent } from './pages/user/user.component';
import { StoreComponent } from './pages/store/store.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'entrar', component: LoginComponent },
  { path: 'cadastro', component: RegisterComponent },
  { path: 'cardapio', component: StoreComponent },
  { path: 'perfil', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
