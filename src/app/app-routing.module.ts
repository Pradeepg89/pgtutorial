import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ExcelfieldComponent } from './Components/excelfield/excelfield.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SlicerComponent } from './Components/slicer/slicer.component';


const routes: Routes = [
  {
    path:'',component:LoginComponent
  },{
    path:'home',component:HomeComponent
  },{
    path:'slicer',component:SlicerComponent
  },{
    path:'excel',component:ExcelfieldComponent
  }
  ,{
    path:"**",component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
