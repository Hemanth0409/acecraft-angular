import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SchoolComponent } from './school/school.component';
import { AcecraftComponent } from './acecraft/acecraft.component';
import { BadgeModule } from 'primeng/badge';
import { FooterComponent } from './footer/footer.component';
import { SchooluniformComponent } from './schooluniform/schooluniform.component';
import { EnterprisesComponent } from './enterprises/enterprises.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SchoolComponent,
 
    AcecraftComponent,
    FooterComponent,
    SchooluniformComponent,
    EnterprisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
