import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsertableComponent } from './usertable/usertable.component';


const routes: Routes = [

  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
 
  {
    path:'usertable',
    component:UsertableComponent
  },
  {
    path:'userdetail',
    component:UserdetailComponent
  },
  {
    path:'form',
    component: FormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
