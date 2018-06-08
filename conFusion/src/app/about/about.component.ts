import { Component, OnInit, Inject } from '@angular/core';

import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut, expand } from '../animations/app.animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;1'

  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class AboutComponent implements OnInit {

    leaders: Leader[];
    selectedLeader: Leader;
    errMess: string;

    constructor(private leaderservice: LeaderService) { }

    ngOnInit() {
      this.leaderservice.getLeaders().subscribe(leaders => this.leaders = leaders);
    }

    onSelect(leader: Leader) {
      this.selectedLeader = leader;
    }

}