import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlconfigService {
  ISRO_BASE_URL='https://isro.vercel.app/api/'
  constructor() { }
}
