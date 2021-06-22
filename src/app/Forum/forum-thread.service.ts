import { Injectable } from '@angular/core';
import { Forumthread } from './forumpost';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ForumThreadService {

  url: string = "http://localhost:8080/studiekamer/prikbord";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getThreads(): Observable<Forumthread[]>{
    return this.http.get<Forumthread[]>(this.url).pipe(
      catchError(this.handleError<any>('getThreads', [])),
      map(result => result["_embedded"]["forumThreadList"])
      );
  }

  addThread(thread: Forumthread): Observable<Forumthread>{
    return this.http.post<Forumthread>(this.url + '/new', thread, this.httpOptions).pipe(
      catchError(this.handleError<Forumthread>('addThread'))
    );
  }

  updateThread(thread: Forumthread) : Observable<Forumthread>{
    return this.http.put<Forumthread>(this.url + `/${thread.id}`, thread, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateThread'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
