import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { QuestionnaireService } from '@services/serviceQuestionnaire/questionnaire.service';
import { EventDriverService } from "@/state/event.driver.service";
import { QuestionnaireActionsTypes } from "@/state/questionnaire.state";

@Component({
  selector: 'app-questionnaire-edit',
  templateUrl: './questionnaire-edit.component.html',
  styleUrls: ['./questionnaire-edit.component.scss']
})
export class QuestionnaireEditComponent implements OnInit {

  questionnaireId:number;
  questionnaireFormGroup?:FormGroup;
  submitted:boolean=false;
  constructor(private activatedRoute:ActivatedRoute,
              private questionnairesService:QuestionnaireService,
              private fb:FormBuilder, private eventDrivenService:EventDriverService) {
    this.questionnaireId= activatedRoute.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.questionnairesService.get(this.questionnaireId)
      .subscribe(questionnaire=>{
        this.questionnaireFormGroup=this.fb.group({
          id:[questionnaire.idQuestionnaire],
          name:[questionnaire.thematique,Validators.required],
        })
      });
  }

  onUpdateProduct() {
    this.questionnairesService.update(this.questionnaireFormGroup?.value)
      .subscribe(data=>{
        this.eventDrivenService.publishEvent({type:QuestionnaireActionsTypes.QUESTIONNAIRE_UPDATED})
        alert("Success Product updated");
      });
  }

}
