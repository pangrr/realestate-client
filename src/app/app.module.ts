// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MapComponent } from './map/map.component';
import { MatInputModule } from '@angular/material';

// marterial
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

// 3rd party
import { SlideshowModule } from 'ng-simple-slideshow';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { AbmModule } from 'angular-baidu-maps';

// components
import { RealestateComponent } from './realestate/realestate.component';
import { HomeComponent } from './home/home.component';
import { AboutDialogComponent } from './about-dialog/about-dialog.component';
import { CustomerRequestDialogComponent } from './customer-request-dialog/customer-request-dialog.component';
import { CustomerRequestListComponent } from './customer-request-list/customer-request-list.component';
import { RealestateEditorComponent } from './realestate-editor/realestate-editor.component';
import { RealestateListComponent } from './realestate-list/realestate-list.component';

// services
import { RealestateService } from './realestate.service';
import { CustomerRequestService } from './customer-request.service';



@NgModule({
  declarations: [
    AppComponent,
    // custom components
    MapComponent,
    RealestateComponent,
    CustomerRequestListComponent,
    RealestateEditorComponent,
    RealestateListComponent,
    HomeComponent,
    AboutDialogComponent,
    CustomerRequestDialogComponent
  ],
  entryComponents: [
    AboutDialogComponent,
    CustomerRequestDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    // material
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatToolbarModule,
    MatBadgeModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule,
    MatListModule,
    MatTabsModule,
    MatTableModule,
    MatChipsModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatSelectModule,
    MatAutocompleteModule,

    // 3rd party
    SlideshowModule,
    AngularFileUploaderModule,
    AbmModule.forRoot({ apiKey: 'MC44rmBjXF8syrkMZXjsgowatzbgBogx' })
  ],
  providers: [RealestateService, CustomerRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
