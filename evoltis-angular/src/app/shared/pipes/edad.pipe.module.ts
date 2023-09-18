import { NgModule } from '@angular/core';
import { EdadPipe } from 'src/app/shared/pipes/edad.pipe';

@NgModule({
  declarations: [EdadPipe],
  exports: [EdadPipe],
})
export class EdadPipeModule {} 
