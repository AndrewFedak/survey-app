import { Component, OnInit } from '@angular/core';
import { questions } from '../mock-questions/mock-questions';
import { ApiService } from '../shared/services/api.service';
import {take} from 'rxjs/operators';

export const amountOfPoints = 11;

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})

export class SurveyComponent implements OnInit {

  questions = questions;
  radios = new Array(amountOfPoints);
  answers = {};
  userName;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const userAnswers = [];
    for(const [key, value] of Object.entries(this.answers)) {
      userAnswers.push({questionName: key, questionAnswerPoint:value})
    }
    const result = {
      userName: this.userName,
      userAnswers
    }
    this.apiService.sendResult(result)
    .pipe(take(1))
    .subscribe(res => {
      console.log('result accepted', res)
    })
  }

  formChanged(target){
    if(target.classList.contains('include')){
      this.answers[target.name] = target.value-6;
    }
  }

}
