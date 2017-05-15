import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdGridListModule,
  MdIconModule,
  MdSelectModule,
  MdTooltipModule,
} from '@angular/material';


@NgModule({
  imports: [
    // Angular Material https://material.angular.io/guide/getting-started
    MdButtonModule,
    MdCheckboxModule,
    MdGridListModule,
    MdIconModule,
    MdSelectModule,
    MdTooltipModule,
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdGridListModule,
    MdIconModule,
    MdSelectModule,
    MdTooltipModule,
  ],
})
export class UsedMaterialModule {}
