import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http :HttpClient) { }

  Post(url:string,data:{}){
    let promise = new Promise((resolve,reject) => {
      this.http.post(url,data)
      .toPromise()
      .then((res:any) => {
        console.log(res)
        resolve(res)
      })
    })
    return promise
  }
  public urlLocal:string = "http://localhost:4200"
}
