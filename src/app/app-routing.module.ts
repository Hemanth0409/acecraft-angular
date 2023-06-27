import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcecraftComponent } from './acecraft/acecraft.component';
import { SchoolComponent } from './school/school.component';
import { EnterprisesComponent } from './enterprises/enterprises.component';
import { AirenMaskComponent } from './airen-mask/airen-mask.component';
import { NotesComponent } from './notes/notes.component';
import { SettingComponent } from './setting/setting.component';
import { CollegeComponent } from './college/college.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProductsComponent } from './products/products.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
const routes: Routes = [
  {
    path: '',
    component: AcecraftComponent,
  },
  { path: 'school', component: SchoolComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'enterprises', component: EnterprisesComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'airen', component: AirenMaskComponent },
  { path: 'setting', component: SettingComponent},
  {path:'college',component:CollegeComponent},
  {path:'sign_in',component:SignInComponent},
  {path:"viewProduct/:id",component:ViewProductComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
