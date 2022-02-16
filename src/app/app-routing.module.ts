import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from '@modules/main/main.component';
import {BlankComponent} from '@pages/blank/blank.component';
import {LoginComponent} from '@modules/login/login.component';
import {ProfileComponent} from '@pages/profile/profile.component';
import {RegisterComponent} from '@modules/register/register.component';
import {DashboardComponent} from '@pages/dashboard/dashboard.component';
import {AuthGuard} from '@guards/auth.guard';
import {NonAuthGuard} from '@guards/non-auth.guard';
import {ForgotPasswordComponent} from '@modules/forgot-password/forgot-password.component';
import {RecoverPasswordComponent} from '@modules/recover-password/recover-password.component';
import {PrivacyPolicyComponent} from '@modules/privacy-policy/privacy-policy.component';
import { ContactComponent } from "@pages/visitor/contact/contact.component";
import { EvaluerComponent } from '@pages/visitor/evaluer/evaluer.component';
import { HistoriqueComponent } from '@pages/visitor/historique/historique.component';
import { GestionMetiersComponent } from '@pages/administration/gestion-metiers/gestion-metiers.component';
import { GestionQuestionnaireComponent } from '@pages/administration/gestion-questionnaire/gestion-questionnaire.component';
import { GestionComptesComponent } from '@pages/administration/gestion-comptes/gestion-comptes.component';
import { GestionQuestionComponent } from './pages/administration/gestion-question/gestion-question.component';
import { GestionCategorieQuestionsComponent } from '@pages/administration/gestion-categorie-questions/gestion-categorie-questions.component';
import { QuestionFormComponent } from './pages/administration/gestion-question/question-form/question-form.component';
import { EvaluationWelcomeComponent } from "@pages/visitor/evaluer/evaluation-welcome/evaluation-welcome.component";
import { EvaluationQuestionnaireComponent } from '@pages/visitor/evaluer/evaluation-questionnaire/evaluation-questionnaire.component';
import { EvaluationThematiqueComponent } from '@pages/visitor/evaluer/evaluation-thematique/evaluation-thematique.component';


const administration: Routes = [
  {
    path: 'gestion-metiers',
    component: GestionMetiersComponent
  },
  {
    path: 'gestion-questionnaires/:idQuestionnaire/gestion-categories-questions',
    component: GestionCategorieQuestionsComponent
  },

  {
    path: 'gestion-questionnaires',
    component: GestionQuestionnaireComponent
  },
  {
    path: 'gestion-questionnaires/:idQuestionnaire/gestion-categories-questions/:idCategorie/gestion-questions',
    component: GestionQuestionComponent
  },
  {
    path: 'gestion-questionnaires/:idQuestionnaire/gestion-categories-questions/:idCategorie/gestion-questions/:idQuestion/question',
    component: QuestionFormComponent
  },
  {
    path: 'gestion-compte',
    component: GestionComptesComponent
  }

]
const visitors: Routes = [
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'historiques',
    component: HistoriqueComponent
  },
  {
    path: 'evaluer',
    component: EvaluerComponent
  },
  {
    path: 'evaluer/questionnaire-evaluation',
    component: EvaluationQuestionnaireComponent
  },
  {
    path: 'evaluer/welcome-evaluation',
    component: EvaluationWelcomeComponent
  },
  {
    path: 'evaluer/evaluation-thematique',
    component: EvaluationThematiqueComponent
  },
  {
    path: 'Acceuil',
    component: DashboardComponent
  },
  {
    path: '',
    component: DashboardComponent
  }
]

// canActivate: [AuthGuard], canActivateChild: [AuthGuard]
const routes: Routes = [
    {
        path: '', component: MainComponent,
        children: [ ...administration, ...visitors]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'recover-password',
        component: RecoverPasswordComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
        canActivate: [NonAuthGuard]
    },
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
