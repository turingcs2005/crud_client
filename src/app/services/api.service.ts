import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Diary } from '../models/diary';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getDiaries(): Observable<Diary[]> {
    return this.http.get<Diary[]>(`${apiUrl}`)
      .pipe(
        tap(data => console.log('fetched diaries')),
        catchError(this.handleError('getDiaries', []))
      );
  }

  getDiaryByID(id: string): Observable<Diary> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Diary>(url).pipe(
      tap(_ => console.log(`fetched a diary entry, id=${id}`)),
      catchError(this.handleError<Diary>(`getDiaryByID, id=${id}`))
    );
  }

  addEntry(diary: Diary): Observable<Diary> {
    return this.http.post<Diary>(apiUrl, diary, httpOptions).pipe(
      tap((data: Diary) => console.log(`added diary entry`)),
      catchError(this.handleError<Diary>('addEntry'))
    );
  }

  updateEntry(id: string, diary: Diary): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, diary, httpOptions).pipe(
      tap(_ => console.log(`updated entry, id=${id}`)),
      catchError(this.handleError<any>('updateEntry'))
    );
  }

  deleteEntry(id: string): Observable<Diary> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Diary>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted diary entry, id=${id}`)),
      catchError(this.handleError<Diary>('deleteEntry'))
    );
  }
}
