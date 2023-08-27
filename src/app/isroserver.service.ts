import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlconfigService } from './urlconfig.service';

@Injectable({
  providedIn: 'root'
})
export class IsroserverService {

  constructor(
    private http: HttpClient,
    private urlconfigService:UrlconfigService
  ) { }

  getData(endpoint: string): Observable<any> {
    return this.http.get(this.urlconfigService.ISRO_BASE_URL+endpoint)
  }
}
