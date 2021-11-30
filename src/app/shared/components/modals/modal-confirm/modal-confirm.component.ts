import { Component, Input, TemplateRef } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";

@Component({
    selector: 'app-modal-confirm',
    templateUrl: './modal-confirm.component.html'
})

export class ModalConfirmComponent {

    modalRef: BsModalRef;

    constructor(private modalService: BsModalService){}

    openModal(template: TemplateRef<any>){
        this.modalRef = this.modalService.show(template)
    }
}