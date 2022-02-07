import Questionnaire from "@/interfaces/Questionnaire";
import { Component, Input, OnInit } from "@angular/core";
import { EventDriverService } from "@/state/event.driver.service";
import { QuestionnaireActionsTypes } from "@/state/questionnaire.state";
import { ConfirmationDialogServiceService } from "@services/ServiceDialog/confirmation-dialog-service.service";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  @Input() questionnaire: Questionnaire|null=null;

  constructor(private eventDrivenService:EventDriverService, private confirmationDialogService: ConfirmationDialogServiceService) { }

  ngOnInit(): void {
  }


  async onDelete(questionnaire: Questionnaire) {
    //this.eventEmitter.emit({type:ProductActionsTypes.DELETE_PRODUCT,payload:product});
    const confirmation = await this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to Delete Questionnaire ?');

    if (confirmation) {
      this.eventDrivenService.publishEvent({
        type: QuestionnaireActionsTypes.DELETE_QUESTIONNAIRE,
        payload: questionnaire
      });
    }
  }

  onEdit(questionnaire: Questionnaire) {
    // this.eventEmitter.emit({type:ProductActionsTypes.EDIT_PRODUCT,payload:product});
    this.eventDrivenService.publishEvent({type:QuestionnaireActionsTypes.EDIT_QUESTIONNAIRE,payload:questionnaire});
  }


}
