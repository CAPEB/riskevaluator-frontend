import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import PreconisationCategorieQuestion from '@/objects/PreconisationCategorieQuestion';
import {ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-preconisation-categorie-question-form',
  templateUrl: './preconisation-categorie-question-form.component.html',
  styleUrls: ['./preconisation-categorie-question-form.component.scss']
})
export class PreconisationCategorieQuestionFormComponent implements OnInit {

  closeResult = '';
  public title: string;
  public registerForm: FormGroup;
  @Input() preconisationCategorieQuestion: PreconisationCategorieQuestion;
  @ViewChild('modalContentCreateOrUpdate') modalContentCreateOrUpdate: any;
  @ViewChild('modalDelete') modalDelete: any;
  @Output() onConfirmation: EventEmitter<any> = new EventEmitter();

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      preconisationGlobaleName: new FormControl()
    });
  }

  checkInputRange($event: any){
    if($event.target.value < 1){
      $event.target.value = 1;
    }
    if($event.target.value > 101){
      $event.target.value = 101;
    }
  }

  public open(action: string) {
    let content = null;
    if(action === 'add' || action === 'update'){
      content = this.modalContentCreateOrUpdate;
      this.title = action === 'add' ? 'Ajouter' : 'Modifier';
    }else if(action === 'delete'){
      content = this.modalDelete;
      this.title = 'Supprimer';
    }
    this.modalService.open(content, {animation: true, centered: true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(result)
      if(result === 'Valider'){
        this.onConfirmation.emit({data: this.preconisationCategorieQuestion, action: action});
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}

