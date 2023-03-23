import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CalculatorService{
  apiEndPoints = { calculator: 'api/operations'};
  url = 'http://localhost:8080/calculator';
  constructor(private http: HttpClient) {
  }

  add(firstParam: string, secondParam: string): Observable<number> {
    const httpParam = new HttpParams().set('param1',firstParam).set('param2',secondParam);
    return this.http.get<number>(`${this.url}/${this.apiEndPoints.calculator}/add`,{params: httpParam});
  }

  substract(firstParam: string, secondParam: string): Observable<number> {
    const httpParam = new HttpParams().set('param1',firstParam).set('param2',secondParam);
    return this.http.get<number>(`${this.url}/${this.apiEndPoints.calculator}/substract`,{params: httpParam});
  }

  multiply(firstParam: string, secondParam: string): Observable<number> {
    const httpParam = new HttpParams().set('param1',firstParam).set('param2',secondParam);
    return this.http.get<number>(`${this.url}/${this.apiEndPoints.calculator}/multiply`,{params: httpParam});
  }

  divide(firstParam: string, secondParam: string): Observable<number> {
    const httpParam = new HttpParams().set('param1',firstParam).set('param2',secondParam);
    return this.http.get<number>(`${this.url}/${this.apiEndPoints.calculator}/divide`,{params: httpParam});
  }
}
