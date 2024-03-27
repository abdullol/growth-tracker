import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataInteractionServiceService } from 'src/app/core/services/data-interaction-service.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.sass'],
})
export class PageHeaderComponent {
  faStar = faStar;
  faPlus = faPlus;

  @Input() heading;
  @Input() subheading;
  @Input() icon;
  @Input() modaltype;
  constructor(
    private modalService: NgbModal,
    private ddiService: DataInteractionServiceService
  ) {}

  public openDialog() {
    var modalReference = this.modalService.open(this.modaltype, {
      size: 'lg',
    });
    this.ddiService.setModalRef(modalReference);
  }
}
