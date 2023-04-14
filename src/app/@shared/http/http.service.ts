import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private cache: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  public content(): Observable<any> {
    if (this.cache.getValue() !== null) {
      return new Observable<any>((observer) => {
        observer.next(this.cache.getValue());
      });
    }

    return this.http.get('../../../assets/.*').pipe(
      map((res) => {
        this.cache.next(res);
        return this.cache.getValue();
      })
    );
  }

  httpGet(url: any) {
    return this.http.get(url);
  }

  httpPost(url: any, {}) {
    return this.http.post(url, { name: 'Subrat' });
  }

  sendEmail(url: any, data: any) {
    console.log(data);
    return this.http.post(url, data);
  }
}
