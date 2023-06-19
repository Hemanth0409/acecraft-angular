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

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SchoolComponent,
 
    AcecraftComponent,
    FooterComponent,
    SchooluniformComponent
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
