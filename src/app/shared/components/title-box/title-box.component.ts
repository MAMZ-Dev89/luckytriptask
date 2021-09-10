import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss']
})
export class TitleBoxComponent implements OnInit {

  @Input('title') title: string = '';
  @Input('subtitle') subTitle: string = '';
  @Input('backgroundimage') backgroundImage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
