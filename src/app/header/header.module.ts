import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    NgbModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class HeaderModule { }
