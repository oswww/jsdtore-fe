import { NgModule } from '@angular/core';
import {
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdMenuModule,
    MdSelectModule,
    MdToolbarModule,
    MdTooltipModule,
} from '@angular/material';


@NgModule({
  imports: [
    // Angular Material https://material.angular.io/guide/getting-started
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdMenuModule,
    MdSelectModule,
    MdToolbarModule,
    MdTooltipModule,
  ],
  exports: [
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdMenuModule,
    MdSelectModule,
    MdToolbarModule,
    MdTooltipModule,
  ],
})
export class UsedMaterialModule {}
