import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constantes } from '../../imports/url';
import { Storage } from '@ionic/storage';

/*
  Generated class for the ClientesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClientesServiceProvider {

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello ClientesServiceProvider Provider');
  }

  // Get All Clientes
  //----------------------------------------------------------
  getClientes() {
    return new Promise(resolve => {
      let token;
      this.storage.get('token').then((val) => {
        //console.log("Token: "+val);
        token =  'Bearer '+val;
      });
      token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiOGZmZWFjYjliY2M2ODdlZDNhMTFlMGUxYjBjYTQ4Y2NkMGU1ZDdmNTNiMDIwMjVmMmNjNTI1NDBlNjdmMDUyYWY1YTE3YzI3MjNmMzRhIn0.eyJhdWQiOiIxIiwianRpIjoiZGI4ZmZlYWNiOWJjYzY4N2VkM2ExMWUwZTFiMGNhNDhjY2QwZTVkN2Y1M2IwMjAyNWYyY2M1MjU0MGU2N2YwNTJhZjVhMTdjMjcyM2YzNGEiLCJpYXQiOjE1NDEwODgwNzIsIm5iZiI6MTU0MTA4ODA3MiwiZXhwIjoxNTcyNjI0MDcyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.AufQk8pXPVFg0oexiQV5ixlXtnlRM0hy19IdrC-0Txi789zqy4lxSYbhLneF9Fi4ExWXlZTiWNAJnfia8AvMmEv1LlOvaHPSVj8BNNMFYiniX7RnaVYN7-SNlFc8XEALVbBX749Ns_6fmks0BDuTJ1n7o7OKqFkZUGBn7dtmlPT-J00O966lOTUBgHr7ka0HtCRm_PsOcIC3Bhus-Rtgn0yRcYjXmFqldxgN_VDAuL84cpfgEgsnf5Ky4heCMbh0W1cJ-28nM8dbzgkKNPKjBHBHKSHPwGjwsu0mPyJCf6-kHyj8Flwjx0LzXkWaqgKvrWBc3GjJSQk_k5Q1b5ngKV9llNIAEpE5EtD_Ve6WDaeRqBsXYy6haqNaXOs4ZBuE7E8Y1hf57l2dO3u8LovnCF3dXs2mKdjUTKysufnyIanEsYZ91Q33TS7X-FHJnWz0VOvDRv1ycHzAGRDV5Oqw1lFt2haJ2aZWpCh8uBfI5xYmSPqrRWjdhWV1-GcNuh6AAGyT5ZGVAse8A2MUHuL9Z7LwQZ6iejqPtH-uNfruuNePn346vWnzZ6iItovRHv6Vuv2x2GoAkMiOUwJ5ufNwaKackXDfZYOUeEkkeMoDl41CI4DGE5WUTIVfPN4UsHVzrgnnKdWCt-Q1Gt20vGCQo5R-OvfmsPvPDwVbOeGSaD0';
     

      this.http.get(constantes.API_URL+'cliente/', {})
      .subscribe(data => {
        resolve(data);
      }, err => {
        resolve(err);
      });
    });
  }

  // Get All Celebraciones
  //----------------------------------------------------------
  getCelebraciones() {
    return new Promise(resolve => {
      let token;
      this.storage.get('token').then((val) => {
        //console.log("Token: "+val);
        token =  'Bearer '+val;
      });

      token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiOGZmZWFjYjliY2M2ODdlZDNhMTFlMGUxYjBjYTQ4Y2NkMGU1ZDdmNTNiMDIwMjVmMmNjNTI1NDBlNjdmMDUyYWY1YTE3YzI3MjNmMzRhIn0.eyJhdWQiOiIxIiwianRpIjoiZGI4ZmZlYWNiOWJjYzY4N2VkM2ExMWUwZTFiMGNhNDhjY2QwZTVkN2Y1M2IwMjAyNWYyY2M1MjU0MGU2N2YwNTJhZjVhMTdjMjcyM2YzNGEiLCJpYXQiOjE1NDEwODgwNzIsIm5iZiI6MTU0MTA4ODA3MiwiZXhwIjoxNTcyNjI0MDcyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.AufQk8pXPVFg0oexiQV5ixlXtnlRM0hy19IdrC-0Txi789zqy4lxSYbhLneF9Fi4ExWXlZTiWNAJnfia8AvMmEv1LlOvaHPSVj8BNNMFYiniX7RnaVYN7-SNlFc8XEALVbBX749Ns_6fmks0BDuTJ1n7o7OKqFkZUGBn7dtmlPT-J00O966lOTUBgHr7ka0HtCRm_PsOcIC3Bhus-Rtgn0yRcYjXmFqldxgN_VDAuL84cpfgEgsnf5Ky4heCMbh0W1cJ-28nM8dbzgkKNPKjBHBHKSHPwGjwsu0mPyJCf6-kHyj8Flwjx0LzXkWaqgKvrWBc3GjJSQk_k5Q1b5ngKV9llNIAEpE5EtD_Ve6WDaeRqBsXYy6haqNaXOs4ZBuE7E8Y1hf57l2dO3u8LovnCF3dXs2mKdjUTKysufnyIanEsYZ91Q33TS7X-FHJnWz0VOvDRv1ycHzAGRDV5Oqw1lFt2haJ2aZWpCh8uBfI5xYmSPqrRWjdhWV1-GcNuh6AAGyT5ZGVAse8A2MUHuL9Z7LwQZ6iejqPtH-uNfruuNePn346vWnzZ6iItovRHv6Vuv2x2GoAkMiOUwJ5ufNwaKackXDfZYOUeEkkeMoDl41CI4DGE5WUTIVfPN4UsHVzrgnnKdWCt-Q1Gt20vGCQo5R-OvfmsPvPDwVbOeGSaD0';


      let headers = new HttpHeaders({
        'X-Requested-With': 'XMLHttpRequest '
      });

      this.http.get(constantes.API_URL+'celebracion/', {headers})
      .subscribe(data => {
        resolve(data);
      }, err => {
        resolve(err);
      });
    });
  }

  // Crea un Cliente
  //----------------------------------------------------------
  crearCliente(data) {
    return new Promise(resolve => {

      let token;
      this.storage.get('token').then((val) => {
        //console.log("Token: "+val);
        token =  'Bearer '+val;
      });
      token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiOGZmZWFjYjliY2M2ODdlZDNhMTFlMGUxYjBjYTQ4Y2NkMGU1ZDdmNTNiMDIwMjVmMmNjNTI1NDBlNjdmMDUyYWY1YTE3YzI3MjNmMzRhIn0.eyJhdWQiOiIxIiwianRpIjoiZGI4ZmZlYWNiOWJjYzY4N2VkM2ExMWUwZTFiMGNhNDhjY2QwZTVkN2Y1M2IwMjAyNWYyY2M1MjU0MGU2N2YwNTJhZjVhMTdjMjcyM2YzNGEiLCJpYXQiOjE1NDEwODgwNzIsIm5iZiI6MTU0MTA4ODA3MiwiZXhwIjoxNTcyNjI0MDcyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.AufQk8pXPVFg0oexiQV5ixlXtnlRM0hy19IdrC-0Txi789zqy4lxSYbhLneF9Fi4ExWXlZTiWNAJnfia8AvMmEv1LlOvaHPSVj8BNNMFYiniX7RnaVYN7-SNlFc8XEALVbBX749Ns_6fmks0BDuTJ1n7o7OKqFkZUGBn7dtmlPT-J00O966lOTUBgHr7ka0HtCRm_PsOcIC3Bhus-Rtgn0yRcYjXmFqldxgN_VDAuL84cpfgEgsnf5Ky4heCMbh0W1cJ-28nM8dbzgkKNPKjBHBHKSHPwGjwsu0mPyJCf6-kHyj8Flwjx0LzXkWaqgKvrWBc3GjJSQk_k5Q1b5ngKV9llNIAEpE5EtD_Ve6WDaeRqBsXYy6haqNaXOs4ZBuE7E8Y1hf57l2dO3u8LovnCF3dXs2mKdjUTKysufnyIanEsYZ91Q33TS7X-FHJnWz0VOvDRv1ycHzAGRDV5Oqw1lFt2haJ2aZWpCh8uBfI5xYmSPqrRWjdhWV1-GcNuh6AAGyT5ZGVAse8A2MUHuL9Z7LwQZ6iejqPtH-uNfruuNePn346vWnzZ6iItovRHv6Vuv2x2GoAkMiOUwJ5ufNwaKackXDfZYOUeEkkeMoDl41CI4DGE5WUTIVfPN4UsHVzrgnnKdWCt-Q1Gt20vGCQo5R-OvfmsPvPDwVbOeGSaD0';
      
      let headers = new HttpHeaders({
        'Content-Type': 'application/json ',
        'X-Requested-With': 'XMLHttpRequest ',
      });
      
      //console.log(JSON.stringify(data));
      
      this.http.post(constantes.API_URL+'cliente', JSON.stringify(data), {headers})
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        resolve(err);
      });
    });
  }

}
