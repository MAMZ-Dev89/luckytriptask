import { NgModule } from '@angular/core';

import { SearchPageRoutingModule } from './search-page-routing.module';
import { SearchPageComponent } from './search-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [SearchPageComponent],
  imports: [
    SearchPageRoutingModule,
    SharedModule
  ],
})
export class SearchPageModule { }
