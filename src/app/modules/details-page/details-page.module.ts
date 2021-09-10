import { NgModule } from '@angular/core';

import { DetailsPageRoutingModule } from './details-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsPageComponent } from './details-page.component';


@NgModule({
  declarations: [DetailsPageComponent],
  imports: [
    DetailsPageRoutingModule,
    SharedModule
  ]
})
export class DetailsPageModule { }
