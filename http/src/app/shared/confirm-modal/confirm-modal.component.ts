import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  @Input() title: string;
  @Input() message: string;
  @Input() cancelText = 'Não';
  @Input() confirmText = 'Sim';
  
  confirmResult: Subject<boolean>;
  
  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit(): void {
    this.confirmResult = new Subject();
  }

  onClose(): void {
    this.onConfirmAndClose(false);
  }

  onConfirm(): void {
    this.onConfirmAndClose(true);
  }

  private onConfirmAndClose(value): void {
    this.confirmResult.next(value);
    this.bsModalRef.hide();
  }

}
