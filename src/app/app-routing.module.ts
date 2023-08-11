import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TargetComponent } from './Components/target/target.component';

const routes: Routes = [
  { path: "Target", component: TargetComponent},  
  { path: "", redirectTo: "Target", pathMatch: 'full' },
  { path: "**", redirectTo: "Target" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
