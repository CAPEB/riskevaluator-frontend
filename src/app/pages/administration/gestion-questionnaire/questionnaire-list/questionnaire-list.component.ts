import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { AppDataState, DataStateEnum } from "@/state/questionnaire.state";
import { Observable } from "rxjs";
import Questionnaire from "@/interfaces/Questionnaire";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated

})
export class QuestionnaireListComponent implements OnInit {
  @Input() questionnairesInput$:Observable<AppDataState<Questionnaire[]>> |null=null;

  readonly DataStateEnum=DataStateEnum;

  constructor(public toastr: ToastrService) { }

  ngOnInit(): void {


  }

}
