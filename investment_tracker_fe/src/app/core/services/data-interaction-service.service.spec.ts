/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataInteractionServiceService } from './data-interaction-service.service';

describe('Service: DataInteractionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataInteractionServiceService]
    });
  });

  it('should ...', inject([DataInteractionServiceService], (service: DataInteractionServiceService) => {
    expect(service).toBeTruthy();
  }));
});
