import { ApiService } from '../../core/services/api.service';
import { Destination } from '../../core/interfaces/destination.interface';
import { SearchType } from '../../core/enum/search-type.enum';
import { Observable, of } from 'rxjs';
import { finalize, map } from 'rxjs/operators'
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPageComponent implements OnInit {

  destinationList$: Observable<Destination[]> = of([]);
  searchType: string = SearchType.NONE;

  constructor(private api: ApiService, private changeDetection: ChangeDetectorRef, private readonly _router: Router) { }

  ngOnInit(): void {
    this.destinationList$ = this.searchForDestinations('');
  }

  private searchForDestinations = (searchValue: string): Observable<Destination[]> => {
    return this.api.getDestinations(this.searchType, searchValue).pipe(map(result => result.destinations), finalize(() => this.changeDetection.detectChanges()));
  }

  searchSubmitted = (value: string): void => {
    this.searchType = SearchType.CITY_OR_COUNTRY;
    this.destinationList$ = this.searchForDestinations(value);
  }

  goToDetails = (id: number): void => {
    this._router.navigate(['details', id]);
  }
}
