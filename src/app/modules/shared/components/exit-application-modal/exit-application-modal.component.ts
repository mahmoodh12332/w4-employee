import {Component, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AppService} from '../../services';


@Component({
  selector: 'app-exit-modal-component',
  templateUrl: './exit-application-modal.component.html',
})
export class ExitApplicationModalComponent {
  @ViewChild('modalRef', {static: true}) public modalTemplate;
  constructor(public dialog: MatDialog, private appService: AppService) {
  }
  public openModal() {
    const modalRef = this.dialog.open(this.modalTemplate);
    modalRef.afterClosed().subscribe(disagreed => {
      if (disagreed) {
        this.appService.logoutUser();
      }
    });
    return;
  }
}
