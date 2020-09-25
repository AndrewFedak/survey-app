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
      this.users = res
    })
  }

}
