import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatDividerModule, MatGridListModule, MatIconModule, MatListModule, MatPaginatorModule, MatSelectModule, MatSidenavModule, MatSortModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { SlicerComponent } from './Components/slicer/slicer.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ExcelfieldComponent } from './Components/excelfield/excelfield.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SlicerComponent,
    SearchPipe,
    ExcelfieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    HttpClientModule,
    MatListModule,
    FormsModule,
    AngularFontAwesomeModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
