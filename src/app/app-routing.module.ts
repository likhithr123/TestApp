import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { HtmlComponent } from './html/html.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { MainComponent } from './main/main.component';
import { QuestionComponent } from './question/question.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"",redirectTo:'welcome',pathMatch:"full"},
  {path:"welcome",component:WelcomeComponent},
  {path:"main",component:MainComponent},
  {path:"html",component:HtmlComponent},
  {path:"javascript",component:JavascriptComponent},
  {path:"angular",component:AngularComponent},
  
  {path:"question",component:QuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
