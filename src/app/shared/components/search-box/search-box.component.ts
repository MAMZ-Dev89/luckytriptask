import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  @Output('onSearch') inputEvent: EventEmitter<string> = new EventEmitter<string>();

  searchText: string = '';

  constructor() { }

  submitSearch = (): void => this.inputEvent.emit(this.searchText);

}
