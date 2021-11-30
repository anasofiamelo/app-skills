import { Component, Input, OnInit, TemplateRef } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { HabilidadeExistsValidatorService } from "./habilidade-exists.validator.service";
import { ModalService } from "./modal.service";
import { NewSkill } from "./NewSkill";

@Component({
    selector: 'app-modal',
    templateUrl: './modal-add-skill.component.html',
    styleUrls: ['./modal-add-skill.component.css']
})

export class ModalAddSkillComponent implements OnInit{


    newSkillForm: FormGroup;

    modalRef: BsModalRef;

    constructor(
        private modalService: BsModalService,
        private formBuilder: FormBuilder,
        private modal: ModalService,
        private habilidadeExistsValidatorService: HabilidadeExistsValidatorService
        ){
    }

    ngOnInit() {
        this.newSkillForm = this.formBuilder.group({
            habilidade: ['', [
                Validators.required,
            ],
            this.habilidadeExistsValidatorService.checkHabilidade()
        ],
            icon: ['']
        })
    }

    openModal(template: TemplateRef<any>){
        this.modalRef = this.modalService.show(template)
      }

    submitModal(){
        this.newSkillForm.controls['icon'].setValue('fa fa-thermometer-half')
        const newSkill = this.newSkillForm.getRawValue() as NewSkill;
        
        this.modal.submitSkill(newSkill)
            .subscribe(
                () => {
                    alert('Habilidade criada com sucesso!')
                    window.location.reload()
                },
                err => console.log(err)
            )
    }
}