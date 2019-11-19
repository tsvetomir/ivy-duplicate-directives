import { NgModule } from '@angular/core';
import { Module1 } from './module-1/module-1.module';
import { Module2 } from './module-2/module-2.module';

@NgModule({
  imports: [
    Module1,
    Module2
  ],
  exports: [
    Module1,
    Module2
  ]
})
export class LegacyLibModule { }
