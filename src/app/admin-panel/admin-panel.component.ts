import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import {take} from 'rxjs/operators';
import {Answer} from '../shared/services/api.service'

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  users: Answer[] = [];


  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getUsersWithResults()
    .pipe(take(1))
    .subscribe((res) => {
      console.log(res);
      this.users = res.map((item) => {
        let sum = 0;
        item.userAnswers.forEach(answer => {
          sum += answer.questionAnswerPoint;
        })
        return {
          ...item,
          sum
        }
      })
    })
  }


  setParticularReply(sum){
      if(sum < -18){
        return 'Не лояльний працівник до компанії'
      } else if (sum < 18) {
        return 'Низька лояльність'
      } else if(sum < 54){
        return 'Середня лояльність'
      } else if(sum <= 90){
        return 'Висока лояльність'
      }
  }

}
