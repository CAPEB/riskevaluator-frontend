import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { QuestionnaireService } from "@services/serviceQuestionnaire/questionnaire.service";
import { EventDriverService } from "@/state/event.driver.service";
import { QuestionnaireActionsTypes } from "@/state/questionnaire.state";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-questionnaire-new',
  templateUrl: './questionnaire-new.component.html',
  styleUrls: ['./questionnaire-new.component.scss']
})
export class QuestionnaireNewComponent implements OnInit {

  questionnaireFormGroup?:FormGroup;
  submitted:boolean=false;

  constructor(
    private fb:FormBuilder, private questionnairesService:QuestionnaireService,
    private eventDrivenService:EventDriverService,
    private toastr: ToastrService

  ) { }

  ngOnInit(): void {
    this.questionnaireFormGroup=this.fb.group({
      thematique:["",Validators.required],
      idQuestionnaire:[0,Validators.required],
    });
  }

  onSaveQuestionnaire() {
    this.submitted=true;
    if(this.questionnaireFormGroup?.invalid) return;

    this.questionnairesService.save(this.questionnaireFormGroup?.value)
      .subscribe(data=>{
          this.eventDrivenService.publishEvent({type:QuestionnaireActionsTypes.QUESTIONNAIRE_ADDED})
          this.toastr.success("successfully Saved questionnaire!" )
        },
          err => {
            this.toastr.error(err.error.message,"Saving questionnaire Failed !" )
      },);
  }
}
