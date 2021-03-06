import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import { StartComponent } from './start/start.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'ttt', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
