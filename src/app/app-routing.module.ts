import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcecraftComponent } from './acecraft/acecraft.component';
import { SchoolComponent } from './school/school.component';
import { SchooluniformComponent } from './schooluniform/schooluniform.component';
import { EnterprisesComponent } from './enterprises/enterprises.component';
const routes: Routes = [
  {
    path: '',
    component: AcecraftComponent,
  },
  { path: 'school', component:SchoolComponent },
  {path:'schooluniform',component:SchooluniformComponent},
  {path:'enterprises',component:EnterprisesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
