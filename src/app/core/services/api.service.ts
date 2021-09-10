import { DestinationDetails } from './../models/destination-details.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SearchResult } from '../models/search-result.model';

const API_END_POINT: string = environment.apiEndPoint;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly _http: HttpClient) { }

  getDestinations = (type: string, value: string): Observable<SearchResult> => {
    let httpParams: HttpParams = new HttpParams();
    httpParams = httpParams.append('search_type', type).append('search_value', value);
    return this._http.get<SearchResult>(`${API_END_POINT}/top_five/destinations`, { params: httpParams });
  }

  getDestinationDetails = (destinationId: number): Observable<DestinationDetails> => {
    let httpParams: HttpParams = new HttpParams();
    httpParams = httpParams.append('id', destinationId);
    return this._http.get<DestinationDetails>(`${API_END_POINT}/top_five/destination`, { params: httpParams });
  }


}
