import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class PromotionService {

  constructor(
    private restangular: Restangular,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) { }

  getPromotions(): Observable<Promotion[]> {
    // return Observable.of(PROMOTIONS).delay(2000);
    return this.restangular.all('PROMOTIONS').getList();
  }

  getPromotion(id: number): Observable<Promotion> {
    // return Observable.of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).delay(2000);
    return  this.restangular.one('PROMOTIONS', id).get();
  }

  getFeaturedPromotion(): Observable<Promotion> {
    // return Observable.of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).delay(2000);
    return this.restangular.all('PROMOTIONS').getList({featured: true})
      .map(PROMOTIONS => PROMOTIONS[0]);
  }
}