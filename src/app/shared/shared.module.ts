import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ThumbnailBoxComponent } from './components/thumbnail-box/thumbnail-box.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TitleBoxComponent } from './components/title-box/title-box.component';

@NgModule({
  declarations: [ThumbnailBoxComponent, SearchBoxComponent, TitleBoxComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ThumbnailBoxComponent, SearchBoxComponent, TitleBoxComponent, CommonModule, FormsModule]
})
export class SharedModule { }
