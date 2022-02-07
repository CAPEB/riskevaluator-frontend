import Question from '@/interfaces/Question';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import Questionnaire from '../../interfaces/Questionnaire';
import PreconisationGlobale from '@/interfaces/PreconisationGlobale';
import CategorieQuestion from '../../interfaces/CategorieQuestion';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  private baseUrl: string = environment.apiUrl + '/questionnaires';
  constructor(private http: HttpClient) {}

  getAllPreconisationGlobale(questionnaireId: Number): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.baseUrl}/${questionnaireId}/questions`);
  }

  getAllCategoriesQuestion(questionnaireId: Number): Observable<CategorieQuestion[]> {
    return this.http.get<CategorieQuestion[]>(`${this.baseUrl}/${questionnaireId}/categoriesQuestion`);
  }

  getAll(): Observable<Questionnaire[]> {
    return this.http.get<Questionnaire[]>(`${this.baseUrl}/`);
  }

  get(questionnaireId: Number): Observable<Questionnaire> {
    return this.http.get<Questionnaire>(`${this.baseUrl}/${questionnaireId}`);
  }

  createPreconisationGlobale(questionnaireId: string, preconisation: PreconisationGlobale): Observable<PreconisationGlobale | string>{
    return this.http.post<PreconisationGlobale>(`${this.baseUrl}/${questionnaireId}/PreconisationGlobale`, preconisation);
  }

  createCategorieQuestion(questionnaireId: string, categorieQuestion: CategorieQuestion): Observable<CategorieQuestion | string>{
    return this.http.post<CategorieQuestion>(`${this.baseUrl}/${questionnaireId}/categoriesQuestion`, categorieQuestion);
  }

  update(questionnaire: Questionnaire): Observable<Questionnaire | string> {
    return this.http.put<Questionnaire>(`${this.baseUrl}/`, questionnaire);
  }

  save(questionnaire: Questionnaire): Observable<Questionnaire | string> {
    return this.http.post<Questionnaire>(`${this.baseUrl}/`, questionnaire);
  }


  delete(questionId: Number): Observable<Questionnaire | string> {
    return this.http.delete<Questionnaire>(`${this.baseUrl}/${questionId}`);
  }
}
