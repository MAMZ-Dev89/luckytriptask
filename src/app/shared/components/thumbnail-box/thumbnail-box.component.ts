import { Component, Input } from '@angular/core';

@Component({
  selector: 'thumbnail-box',
  template: `<div class="thumbnail"><img [src]="url" [alt]="alt" width="200px" height="100px" /></div>`,
  styleUrls: ['./thumbnail-box.component.scss']
})
export class ThumbnailBoxComponent {

  @Input('image') url: string = '';
  @Input('brief') alt: string = '';

  constructor() { }

}
