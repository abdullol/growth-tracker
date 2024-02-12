import {Component, Input} from '@angular/core';
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
})
export class PageTitleComponent {

  faStar = faStar;
  faPlus = faPlus;

  @Input() heading;
  @Input() subheading;
  @Input() icon;
  @Input() modaltype;

  constructor(private modalService: NgbModal) {
    console.log(this.modaltype);
  }

  openDialog() {
    this.modalService.open(this.modaltype, {
      size: 'lg'
    });
  }

}
