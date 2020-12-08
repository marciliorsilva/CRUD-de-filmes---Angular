import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';
import { SelectComponent } from './select/select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [InputTextComponent, InputNumberComponent, InputDateComponent, InputTextareaComponent, SelectComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  exports:[
    InputTextComponent, 
    InputNumberComponent, 
    InputDateComponent,
    InputTextareaComponent, 
    SelectComponent
  ]
  
})
export class CamposModule { }
