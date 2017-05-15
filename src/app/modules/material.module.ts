import { NgModule } from '@angular/core';
import {
  MdIconModule,
  MdButtonModule,
  MdCheckboxModule,
  MdTooltipModule,
  MdSelectModule,
  MdGridListModule,
} from '@angular/material';


@NgModule({
  imports: [
    // Angular Material https://material.angular.io/guide/getting-started
    MdButtonModule,
    MdCheckboxModule,
    MdIconModule,
    MdTooltipModule,
    MdSelectModule,
    MdGridListModule,
  ],
  exports: [
    MdIconModule,
    MdButtonModule,
    MdCheckboxModule,
    MdTooltipModule,
    MdSelectModule,
    MdGridListModule,
  ],
})
export class UsedMaterialModule {}
