
export enum QuestionnaireActionsTypes{
  GET_ALL_QUESTIONNAIRES="[questionnaire] Get All questionnaires",
  SEARCH_QUESTIONNAIRES="[questionnaire] Search questionnaires",
  NEW_QUESTIONNAIRE="[questionnaire] New questionnaire",
  EDIT_QUESTIONNAIRE="[questionnaire] Edit questionnaire",
  DELETE_QUESTIONNAIRE="[questionnaire] Delete product",
  QUESTIONNAIRE_ADDED="[questionnaire]  questionnaire added",
  QUESTIONNAIRE_UPDATED="[questionnaire]  questionnaire updated",
  QUESTIONNAIRE_FAILURE="[questionnaire]  questionnaire failure",
}

export interface ActionEvent {
  type:QuestionnaireActionsTypes,
  payload?:any
}
export enum DataStateEnum {
  LOADING,
  LOADED,
  ERROR
}

export interface AppDataState<T> {
  dataState:DataStateEnum,
  data?:T,
  errorMessage?:string
}
