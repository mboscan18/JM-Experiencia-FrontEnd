import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { constantes } from '../../imports/url';

import 'rxjs/add/operator/map';
  

@Injectable()
export class AuthServiceProvider {
 

  constructor(public http: HttpClient,
              private storage: Storage) {
    console.log('Hello AuthServiceProvider Provider');
  }

  login(credentials) {
    return new Promise((resolve, reject) => {
        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        });
      
        this.http.post(constantes.API_URL+'login', JSON.stringify(credentials), {headers})
          .subscribe(data => {
            resolve(data);
            console.log(data);

            this.storage.set('user_id', data['user']['id']);
            this.storage.set('user_email', data['user']['email']);
            this.storage.set('user_name', data['user']['name']);
            this.storage.set('user_picture', data['user']['picture']);
            this.storage.set('user_rol', data['user']['rol']);
            this.storage.set('token', data['access_token']);
            this.storage.set('status', 'logged');
            this.storage.set('log_message', 'Success Login');

          },(error) => {
            reject(error);
            console.log(error);
            this.storage.remove('token');
            this.storage.set('status', 'logged');
            this.storage.set('log_message', 'Failed Login');
          });  
    });    
}

register(data) {
  return new Promise((resolve, reject) => {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'text/javascript'
    });

    

      this.http.post(constantes.API_URL+'guest/signup', JSON.stringify(data), {headers})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
  });
}

logout(){
  return new Promise((resolve, reject) => {
      let token;
      this.storage.get('token').then((val) => {
        console.log("Token: "+val);
        token =  val;
      });

       let headers = new HttpHeaders({
        'Authorization': 'Bearer '+token
      });

      this.http.get(constantes.API_URL+'logout', {headers})
      .subscribe(data => {
        resolve(data);
        this.storage.clear();
      }, err => {
        console.log(err);
      });
  });
}

}
