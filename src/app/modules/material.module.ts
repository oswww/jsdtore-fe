import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdGridListModule,
  MdIconModule,
  MdMenuModule,
  MdSelectModule,
  MdToolbarModule,
  MdTooltipModule,
} from '@angular/material';


@NgModule({
  imports: [
    // Angular Material https://material.angular.io/guide/getting-started
    MdButtonModule,
    MdCheckboxModule,
    MdGridListModule,
    MdIconModule,
    MdMenuModule,
    MdSelectModule,
    MdToolbarModule,
    MdTooltipModule,
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdGridListModule,
    MdIconModule,
    MdMenuModule,
    MdSelectModule,
    MdToolbarModule,
    MdTooltipModule,
  ],
})
export class UsedMaterialModule {}
