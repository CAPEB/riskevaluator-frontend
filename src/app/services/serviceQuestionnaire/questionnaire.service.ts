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
  private baseUrl: string = environment.apiUrl + '/Questionnaires';
  constructor(private http: HttpClient) {}

  getAllPreconisationGlobale(questionnaireId: string): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.baseUrl}/${questionnaireId}/Questions`);
  }

  getAllCategoriesQuestion(questionnaireId: string): Observable<CategorieQuestion[]> {
    return this.http.get<CategorieQuestion[]>(`${this.baseUrl}/${questionnaireId}/categoriesQuestion`);
  }
  
  getAll(): Observable<Questionnaire[]> {
    return this.http.get<Questionnaire[]>(`${this.baseUrl}`);
  }

  get(questionnaireId: string): Observable<Questionnaire> {
    return this.http.get<Questionnaire>(`${this.baseUrl}/${questionnaireId}`);
  }

  createPreconisationGlobale(questionnaireId: string, preconisation: PreconisationGlobale): Observable<PreconisationGlobale | string>{
    return this.http.post<PreconisationGlobale>(`${this.baseUrl}/${questionnaireId}/PreconisationGlobale`, preconisation);
  }

  createCategorieQuestion(questionnaireId: string, categorieQuestion: CategorieQuestion): Observable<CategorieQuestion | string>{
    return this.http.post<CategorieQuestion>(`${this.baseUrl}/${questionnaireId}/categoriesQuestion`, categorieQuestion);
  }

  update(questionnaireId: string, questionnaire: Questionnaire): Observable<Questionnaire | string> {
    return this.http.put<Questionnaire>(`${this.baseUrl}/${questionnaireId}`, questionnaire);
  }

  delete(questionId: string): Observable<Questionnaire | string> {
    return this.http.delete<Questionnaire>(`${this.baseUrl}/${questionId}`);
  }
}