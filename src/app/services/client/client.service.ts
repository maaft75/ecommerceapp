import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private rootUrl:string = 'https://localhost:44391/api/dtracks';

  constructor(private http : HttpClient) { }

  createClient(client): Observable<any> {
    return this.http.post<any>(this.rootUrl, client);
  }

  /* getConsumers(): Observable<IConsumer[]>{
    return this.http.get<IConsumer[]>(this.rootUrl);
  }
  getConsumersById(id:number):Observable<IConsumer[]>{
    return this.http.get<IConsumer[]>(`${this.rootUrl}/${id}`);
  }
  updateUser(user:IConsumer):  Observable<IConsumer> {
    return this.http.put<IConsumer>(this.rootUrl, user);
  }
  deleteUser(id:number): Observable<IConsumer>{
    return this.http.delete<IConsumer>(`${this.rootUrl}/${id}`);
  }*/
}
