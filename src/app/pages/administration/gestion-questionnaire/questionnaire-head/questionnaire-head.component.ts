import { Component, OnInit } from '@angular/core';
import { CategorieFilter } from "@/interfaces/questionnaire/CategorieFilter";
import Questionnaire from "@/interfaces/Questionnaire";
import { QuestionnaireActionsTypes } from "@/state/questionnaire.state";
import { EventDriverService } from "@/state/event.driver.service";

@Component({
  selector: 'app-questionnaire-head',
  templateUrl: './questionnaire-head.component.html',
  styleUrls: ['./questionnaire-head.component.scss']
})
export class QuestionnaireHeadComponent implements OnInit {

  filter = new CategorieFilter();
  selectedQuestionnaire!: Questionnaire;
  feedback: any = {};

  constructor(private eventDrivenService:EventDriverService) { }

  ngOnInit(): void {
  }

  onNewProduct() {

    //this.productEventEmitter.emit({type:ProductActionsTypes.NEW_PRODUCT});
    this.eventDrivenService.publishEvent({type:QuestionnaireActionsTypes.NEW_QUESTIONNAIRE});
  }

  get QuestionnaireList(): Questionnaire[] {
    var ques: Questionnaire = { idQuestionnaire : 0, thematique: ""}
    ques.idQuestionnaire = 10;
    ques.thematique = "TOTO"
    return [ques,ques,ques,ques]
  }


  onSearch(dataForm: any) {
    /*
    this.productEventEmitter.emit(
      {type:ProductActionsTypes.SEARCH_PRODUCTS, payload:dataForm}
      );
     */
    this.eventDrivenService.publishEvent({type:QuestionnaireActionsTypes.SEARCH_QUESTIONNAIRES, payload:dataForm});
  }

  onNew(dataForm: any) {
    this.eventDrivenService.publishEvent({type:QuestionnaireActionsTypes.NEW_QUESTIONNAIRE, payload:dataForm});

  }
}
