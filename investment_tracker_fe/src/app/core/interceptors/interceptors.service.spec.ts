/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InterceptorsService } from './interceptors.service';

describe('Service: Interceptors', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterceptorsService]
    });
  });

  it('should ...', inject([InterceptorsService], (service: InterceptorsService) => {
    expect(service).toBeTruthy();
  }));
});
