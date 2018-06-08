import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { Observable } from 'rxjs/Observable';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class LeaderService {

  constructor(
    private restangular: Restangular,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) { }

  getLeaders(): Observable<Leader[]> {
    // return Observable.of(LEADERS).delay(2000);
    return this.restangular.all('LEADERS').getList();
  }

  getLeader(id: number): Observable<Leader> {
    // return Observable.of(LEADERS.filter((leader) => (leader.id === id))[0]).delay(2000);
    return  this.restangular.one('LEADERS', id).get();
  }

  getFeaturedLeader(): Observable<Leader> {
    // return Observable.of(LEADERS.filter((leader) => (leader.featured))[0]).delay(2000);
    return this.restangular.all('LEADERS').getList({featured: true})
      .map(LEADERS => LEADERS[0]);
  }

}