import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SchoolComponent } from './school/school.component';
import { AcecraftComponent } from './acecraft/acecraft.component';
import { BadgeModule } from 'primeng/badge';
import { FooterComponent } from './footer/footer.component';
import { EnterprisesComponent } from './enterprises/enterprises.component';
import { NotesComponent } from './notes/notes.component';
import { AirenMaskComponent } from './airen-mask/airen-mask.component';
import { SettingComponent } from './setting/setting.component';
import { CollegeComponent } from './college/college.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import { SingleProductComponent } from './products/single-product/single-product.component';
import { ProductsortPipe } from './productsort.pipe';
import { SortPipe } from './sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SchoolComponent,
    AcecraftComponent,
    FooterComponent,
    EnterprisesComponent,
    NotesComponent,
    AirenMaskComponent,
    SettingComponent,
    CollegeComponent,
    SignInComponent,
    ProductsComponent,
    ViewProductComponent,
    SingleProductComponent,
    ProductsortPipe,
    SortPipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BadgeModule,HttpClientModule,CardModule,ButtonModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
