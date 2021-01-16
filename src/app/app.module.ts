import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { AppRoutingModule } from './app-routing.module';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { AppComponent } from './app.component';
import { BusinessComponent } from './business/business.component';
import { BusinessUpdateComponent } from './business/business-update/business-update.component';
import { CourseInfoComponent } from './business/course-info/course-info.component';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    BusinessComponent,
    BusinessUpdateComponent,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTableModule,
    NzModalModule,
    NzInputModule,
    NzFormModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    NzPopoverModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
