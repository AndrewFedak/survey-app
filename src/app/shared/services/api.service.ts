import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Observable } from 'rxjs';


export interface Answer {
  userName: string;
  userAnswers: {
    questionName: string;
    questionAnswerPoint: number;
  }[],
  sum?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  sendResult(data): Observable<Answer> {
    return this.http.post<Answer>(`${environment.apiUrl}result`, data)
  }

  getUsersWithResults(): Observable<Answer[]> {
    return this.http.get<Answer[]>(`${environment.apiUrl}users`)
  }
}
