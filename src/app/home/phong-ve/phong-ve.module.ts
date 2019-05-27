import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhongVeComponent } from './phong-ve.component';
import { PhongVeRoutingModule } from './phong-ve-routing.module';

@NgModule({
  declarations: [PhongVeComponent],
  exports: [PhongVeComponent],
  imports: [
    CommonModule,
    PhongVeRoutingModule
  ]
})
export class PhongVeModule { }
