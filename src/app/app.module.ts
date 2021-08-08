import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaxiPageComponent } from './taxi-page/taxi-page.component';
import { TaxiListComponent } from './taxi-list/taxi-list.component';
import { TaxiListItemComponent } from './taxi-list-item/taxi-list-item.component';
import { TaxiFormComponent } from './taxi-form/taxi-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers } from './state/app.state';

@NgModule({
  declarations: [
    AppComponent,
    TaxiPageComponent,
    TaxiListComponent,
    TaxiListItemComponent,
    TaxiFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
