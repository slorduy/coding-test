import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modules/main/main.component';
import { MainModule } from './modules/main/main.module';

const routes: Routes = [

  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/modules/main/main.module').then(m => m.MainModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
