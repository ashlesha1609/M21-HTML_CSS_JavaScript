import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent } from './student';

@Injectable()
export class StudentService {

  private url='/assets/AppData/students.json';

  constructor(private http: HttpClient) { }
  getStudents(): Observable<IStudent[]>
    {
      return this.http.get<IStudent[]>(this.url);
    }
  
}
