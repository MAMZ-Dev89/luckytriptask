import { ApiService } from '../../core/services/api.service';
import { Destination } from '../../core/interfaces/destination.interface';
import { SearchType } from '../../core/enum/search-type.enum';
import { Observable, of } from 'rxjs';
import { defaultIfEmpty, finalize, map } from 'rxjs/operators'
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPageComponent implements OnInit {

  destinationList$: Observable<Destination[]> = of([]);
  searchType: string = SearchType.NONE;

  constructor(private api: ApiService, private changeDetection: ChangeDetectorRef, private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    this.destinationList$ = this.searchForDestinations('');
  }

  private searchForDestinations = (searchValue: string): Observable<Destination[]> => {
    return this.api.getDestinations(this.searchType, searchValue).pipe(map(result => result.destinations), finalize(() => this.changeDetection.detectChanges()));
  }

  searchSubmitted = (value: string): void => {
    this.searchType = SearchType.CITY_OR_COUNTRY;
    this.destinationList$ = this.searchForDestinations(value).pipe(finalize(() => this.viewportScroller.scrollToAnchor("thumbnails-box-wrapper")));
  }
}
