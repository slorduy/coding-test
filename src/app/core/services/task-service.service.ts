import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../interfaces/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {


  constructor(private http:HttpClient) { }


  getTasks (): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }

}
