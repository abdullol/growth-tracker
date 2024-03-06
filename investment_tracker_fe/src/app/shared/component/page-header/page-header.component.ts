import {Component, Input} from '@angular/core';
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { DataInteractionServiceService } from 'src/app/core/services/data-interaction-service.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.sass']
})
export class PageHeaderComponent {

 
  faStar = faStar;
  faPlus = faPlus;

  @Input() heading;
  @Input() subheading;
  @Input() icon;
  @Input() modaltype;

  constructor(private modalService: NgbModal,
    private ddiService: DataInteractionServiceService) {
    console.log(this.modaltype);
  }

  openDialog() {
    var modalReference = this.modalService.open(this.modaltype, {
      size: 'lg'
    });
    this.ddiService.setModalRef(modalReference);
  }

}
