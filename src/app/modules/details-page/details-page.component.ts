import { DestinationDetails } from './../../core/models/destination-details.model';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsPageComponent implements OnInit {

  destinationDetails: DestinationDetails = new DestinationDetails();

  constructor(private api: ApiService, private route: ActivatedRoute, private changeDetection: ChangeDetectorRef) { }

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
