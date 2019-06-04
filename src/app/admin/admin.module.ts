import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DateValueAccessorModule } from 'angular-date-value-accessor';

import { AdminRoutingModule } from './admin-routing.module';
import { BookFormComponent } from './book-form/book-form.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { FormMessagesComponent } from './form-messages/form-messages.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { StoreModule } from '@ngrx/store';
import * as fromAdmin from './reducers/admin.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AdminEffects } from './effects/admin.effects';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    DateValueAccessorModule,
    StoreModule.forFeature('admin', fromAdmin.reducer),
    EffectsModule.forFeature([AdminEffects])
  ],
  declarations: [
    BookFormComponent,
    CreateBookComponent,
    EditBookComponent,
    FormMessagesComponent
  ]
})
export class AdminModule { }
