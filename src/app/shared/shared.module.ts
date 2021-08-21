import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   // BrowserAnimationsModule,
    AccordionModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    TableModule,
    MessagesModule,
    MessageModule

  ],
  exports: [
    CommonModule,
    AccordionModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    TableModule,
    MessagesModule,
    MessageModule
    //,BrowserAnimationsModule
  ]
})
export class SharedModule { }
