import { Injectable } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class DataInteractionServiceService {
  modalRef: NgbModalRef;

  constructor() {}

  // modal ref save
  setModalRef(_modalRef: NgbModalRef) {
    this.modalRef = _modalRef;
  }

  closeModal(){
    this.modalRef.close();
  }
}
