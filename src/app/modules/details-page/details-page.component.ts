import { DestinationDetails } from './../../core/models/destination-details.model';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Scroll } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsPageComponent implements OnInit {

  destinationDetails: DestinationDetails = new DestinationDetails();

  constructor(private api: ApiService, private _router: Router, private route: ActivatedRoute, private changeDetection: ChangeDetectorRef, private viewportScroller: ViewportScroller) {
    this._router.events.pipe(filter(e => e instanceof Scroll)).subscribe((e: any) => this.viewportScroller.scrollToPosition([0, 0]));
  }

  ngOnInit(): void {
    const destinationId: number = Number(this.route.snapshot.paramMap.get('id'));
    this.api.getDestinationDetails(destinationId).subscribe(
      data => {
        this.destinationDetails = data;
        this.changeDetection.detectChanges();
      },
      error => console.error('failed to load destination detials !!!')
    );
  }

}
