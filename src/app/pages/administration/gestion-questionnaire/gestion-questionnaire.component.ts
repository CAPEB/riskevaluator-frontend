import { Component, OnInit } from '@angular/core';
import { CategorieFilter } from "@/interfaces/questionnaire/CategorieFilter";
import CategorieQuestion from '@/interfaces/CategorieQuestion';
import Question from "@/interfaces/Question";
import Questionnaire from '@/interfaces/Questionnaire';
import { EventDriverService } from "@/state/event.driver.service";
import { ActionEvent, AppDataState, DataStateEnum, QuestionnaireActionsTypes } from "@/state/questionnaire.state";
import { Observable, of } from "rxjs";
import { QuestionnaireService } from "@services/serviceQuestionnaire/questionnaire.service";
import { Router } from "@angular/router";
import { catchError, map, startWith } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";
import { ConfirmationDialogServiceService } from "@services/ServiceDialog/confirmation-dialog-service.service";
@Component({
  selector: 'app-gestion-questionnaire',
  templateUrl: './gestion-questionnaire.component.html',
  styleUrls: ['./gestion-questionnaire.component.scss']
})
export class GestionQuestionnaireComponent implements OnInit {

  Questionnaires$:Observable<AppDataState<Questionnaire[]>> |null=null;
  readonly DataStateEnum=DataStateEnum;

  constructor(
    private QuestionnairesService:QuestionnaireService, private router:Router,
    private eventDrivenService:EventDriverService,
    private toastr: ToastrService

  ) { }

  ngOnInit(): void {
    this.eventDrivenService.sourceEventSubjectObservable.subscribe((actionEvent:ActionEvent)=>{
      this.onActionEvent(actionEvent);
    });

    this.onGetAllQuestionnaires();
  }

  onGetAllQuestionnaires() {
    this.Questionnaires$= this.QuestionnairesService.getAll().pipe(
      map((data: Questionnaire[])=>{
        console.log(data);
        return ({dataState:DataStateEnum.LOADED,data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=> {
        return of({dataState:DataStateEnum.ERROR, errorMessage:err.message})
      })
    );
  }

  onDelete(p: Questionnaire) {
    console.log("DELETE CALLED");

    this.QuestionnairesService.delete(p.idQuestionnaire)
      .subscribe(data=>{
        this.onGetAllQuestionnaires();
        this.toastr.success("Questionnaire deleted successfully")
        this.router.navigateByUrl("/gestion-questionnaire");
      }, err=> {
        this.toastr.error(err.message, "Couldn't delete questionnaire");
        this.router.navigateByUrl("/gestion-questionnaire");
      })

  }

  onNewQuestionnaire() {
    this.router.navigateByUrl("/gestion-questionnaire/new-questionnaire");
  }

  onEdit(p: Questionnaire) {
    this.router.navigateByUrl(`/edit-questionnaire/${p.idQuestionnaire}`);
  }

  onActionEvent($event: ActionEvent) {
    switch ($event.type) {
      case QuestionnaireActionsTypes.GET_ALL_QUESTIONNAIRES: this.onGetAllQuestionnaires();break;
      case QuestionnaireActionsTypes.NEW_QUESTIONNAIRE: this.onNewQuestionnaire();break;
      case QuestionnaireActionsTypes.DELETE_QUESTIONNAIRE: this.onDelete($event.payload);break;
      case QuestionnaireActionsTypes.EDIT_QUESTIONNAIRE: this.onEdit($event.payload);break;
      case QuestionnaireActionsTypes.QUESTIONNAIRE_ADDED: this.onAdded();break;

    }
  }

  private onAdded() {
    this.router.navigateByUrl("/gestion-questionnaire");
  }
}
