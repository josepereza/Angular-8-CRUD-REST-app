import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs'
import { catchError, tap, map } from 'rxjs/operators';
import { Character } from './character';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = "/api/v1/characters";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: pass the error to logging infrastructure

      console.error(error);

      // App continues running by returning empty.
      return of(result as T);
    };
  }

  // CRUD Stuff

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(apiUrl)
      .pipe(
        tap(heroes => console.log('fetched Characters from API')),
        catchError(this.handleError('getCharacters', []))
      );
  }

  getCharacter(id: number): Observable<Character> {
    const url = `${apiUrl}/${id}`;

    return this.http.get<Character>(url)
      .pipe(
        tap(_ => console.log(`fetched character id=${id}`)),
        catchError(this.handleError<Character>(`getCharacter id=${id}`))
      );
  }


}
