import { Component, OnInit } from '@angular/core';

import { SpaceXService } from '../../services/spacex.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  constructor(
    private spaceXService: SpaceXService,
  ) { }

  crew: any[] = [];

  ngOnInit(): void {
    this.spaceXService.get('crew').subscribe((response: any[]) => {
      console.log(response);
      this.crew = response;
    });
  }

}
