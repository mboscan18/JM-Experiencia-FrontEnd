import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constantes } from '../../imports/url';
import { Storage } from '@ionic/storage';


/*
  Generated class for the ManejoMesasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ManejoMesasProvider {

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello ManejoMesasProvider Provider');
  }

  // Get Mesas Activas
  //----------------------------------------------------------
  getMesasActive() {
    return new Promise(resolve => {
      let token;
      this.storage.get('token').then((val) => {
        //console.log("Token: "+val);
        token =  'Bearer '+val;
      });
      token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiOGZmZWFjYjliY2M2ODdlZDNhMTFlMGUxYjBjYTQ4Y2NkMGU1ZDdmNTNiMDIwMjVmMmNjNTI1NDBlNjdmMDUyYWY1YTE3YzI3MjNmMzRhIn0.eyJhdWQiOiIxIiwianRpIjoiZGI4ZmZlYWNiOWJjYzY4N2VkM2ExMWUwZTFiMGNhNDhjY2QwZTVkN2Y1M2IwMjAyNWYyY2M1MjU0MGU2N2YwNTJhZjVhMTdjMjcyM2YzNGEiLCJpYXQiOjE1NDEwODgwNzIsIm5iZiI6MTU0MTA4ODA3MiwiZXhwIjoxNTcyNjI0MDcyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.AufQk8pXPVFg0oexiQV5ixlXtnlRM0hy19IdrC-0Txi789zqy4lxSYbhLneF9Fi4ExWXlZTiWNAJnfia8AvMmEv1LlOvaHPSVj8BNNMFYiniX7RnaVYN7-SNlFc8XEALVbBX749Ns_6fmks0BDuTJ1n7o7OKqFkZUGBn7dtmlPT-J00O966lOTUBgHr7ka0HtCRm_PsOcIC3Bhus-Rtgn0yRcYjXmFqldxgN_VDAuL84cpfgEgsnf5Ky4heCMbh0W1cJ-28nM8dbzgkKNPKjBHBHKSHPwGjwsu0mPyJCf6-kHyj8Flwjx0LzXkWaqgKvrWBc3GjJSQk_k5Q1b5ngKV9llNIAEpE5EtD_Ve6WDaeRqBsXYy6haqNaXOs4ZBuE7E8Y1hf57l2dO3u8LovnCF3dXs2mKdjUTKysufnyIanEsYZ91Q33TS7X-FHJnWz0VOvDRv1ycHzAGRDV5Oqw1lFt2haJ2aZWpCh8uBfI5xYmSPqrRWjdhWV1-GcNuh6AAGyT5ZGVAse8A2MUHuL9Z7LwQZ6iejqPtH-uNfruuNePn346vWnzZ6iItovRHv6Vuv2x2GoAkMiOUwJ5ufNwaKackXDfZYOUeEkkeMoDl41CI4DGE5WUTIVfPN4UsHVzrgnnKdWCt-Q1Gt20vGCQo5R-OvfmsPvPDwVbOeGSaD0';
      
      this.http.get(constantes.API_URL+'mesas_active', {
        headers: new HttpHeaders().set('Authorization', token)
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  // Crea una Mesa
  //----------------------------------------------------------
  crearMesa(data) {
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
        'Authorization': token
      });
      
      console.log(JSON.stringify(data));
      
      this.http.post(constantes.API_URL+'mesa', JSON.stringify(data), {headers})
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        resolve(err);
      });
    });
  }

  // Edita una Mesa
  //----------------------------------------------------------
  editarMesa(data, id) {
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
        'Authorization': token
      });
      
      console.log(JSON.stringify(data));
      
      this.http.put(constantes.API_URL+'mesa/'+id, JSON.stringify(data), {headers})
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        resolve(err);
      });
    });
  }

  // Get Clientes de una Mesa
  //----------------------------------------------------------
  getClientesMesa(mesa_id) {
    return new Promise(resolve => {
      let token;
      this.storage.get('token').then((val) => {
        //console.log("Token: "+val);
        token =  'Bearer '+val;
      });
      token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiOGZmZWFjYjliY2M2ODdlZDNhMTFlMGUxYjBjYTQ4Y2NkMGU1ZDdmNTNiMDIwMjVmMmNjNTI1NDBlNjdmMDUyYWY1YTE3YzI3MjNmMzRhIn0.eyJhdWQiOiIxIiwianRpIjoiZGI4ZmZlYWNiOWJjYzY4N2VkM2ExMWUwZTFiMGNhNDhjY2QwZTVkN2Y1M2IwMjAyNWYyY2M1MjU0MGU2N2YwNTJhZjVhMTdjMjcyM2YzNGEiLCJpYXQiOjE1NDEwODgwNzIsIm5iZiI6MTU0MTA4ODA3MiwiZXhwIjoxNTcyNjI0MDcyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.AufQk8pXPVFg0oexiQV5ixlXtnlRM0hy19IdrC-0Txi789zqy4lxSYbhLneF9Fi4ExWXlZTiWNAJnfia8AvMmEv1LlOvaHPSVj8BNNMFYiniX7RnaVYN7-SNlFc8XEALVbBX749Ns_6fmks0BDuTJ1n7o7OKqFkZUGBn7dtmlPT-J00O966lOTUBgHr7ka0HtCRm_PsOcIC3Bhus-Rtgn0yRcYjXmFqldxgN_VDAuL84cpfgEgsnf5Ky4heCMbh0W1cJ-28nM8dbzgkKNPKjBHBHKSHPwGjwsu0mPyJCf6-kHyj8Flwjx0LzXkWaqgKvrWBc3GjJSQk_k5Q1b5ngKV9llNIAEpE5EtD_Ve6WDaeRqBsXYy6haqNaXOs4ZBuE7E8Y1hf57l2dO3u8LovnCF3dXs2mKdjUTKysufnyIanEsYZ91Q33TS7X-FHJnWz0VOvDRv1ycHzAGRDV5Oqw1lFt2haJ2aZWpCh8uBfI5xYmSPqrRWjdhWV1-GcNuh6AAGyT5ZGVAse8A2MUHuL9Z7LwQZ6iejqPtH-uNfruuNePn346vWnzZ6iItovRHv6Vuv2x2GoAkMiOUwJ5ufNwaKackXDfZYOUeEkkeMoDl41CI4DGE5WUTIVfPN4UsHVzrgnnKdWCt-Q1Gt20vGCQo5R-OvfmsPvPDwVbOeGSaD0';
      
      this.http.get(constantes.API_URL+'clientes_mesa/'+mesa_id, {
        headers: new HttpHeaders().set('Authorization', token)
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  // Get Celebraciones de una Mesa
  //----------------------------------------------------------
  getCelebracionesMesa(mesa_id) {
    return new Promise(resolve => {
      let token;
      this.storage.get('token').then((val) => {
        //console.log("Token: "+val);
        token =  'Bearer '+val;
      });
      token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiOGZmZWFjYjliY2M2ODdlZDNhMTFlMGUxYjBjYTQ4Y2NkMGU1ZDdmNTNiMDIwMjVmMmNjNTI1NDBlNjdmMDUyYWY1YTE3YzI3MjNmMzRhIn0.eyJhdWQiOiIxIiwianRpIjoiZGI4ZmZlYWNiOWJjYzY4N2VkM2ExMWUwZTFiMGNhNDhjY2QwZTVkN2Y1M2IwMjAyNWYyY2M1MjU0MGU2N2YwNTJhZjVhMTdjMjcyM2YzNGEiLCJpYXQiOjE1NDEwODgwNzIsIm5iZiI6MTU0MTA4ODA3MiwiZXhwIjoxNTcyNjI0MDcyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.AufQk8pXPVFg0oexiQV5ixlXtnlRM0hy19IdrC-0Txi789zqy4lxSYbhLneF9Fi4ExWXlZTiWNAJnfia8AvMmEv1LlOvaHPSVj8BNNMFYiniX7RnaVYN7-SNlFc8XEALVbBX749Ns_6fmks0BDuTJ1n7o7OKqFkZUGBn7dtmlPT-J00O966lOTUBgHr7ka0HtCRm_PsOcIC3Bhus-Rtgn0yRcYjXmFqldxgN_VDAuL84cpfgEgsnf5Ky4heCMbh0W1cJ-28nM8dbzgkKNPKjBHBHKSHPwGjwsu0mPyJCf6-kHyj8Flwjx0LzXkWaqgKvrWBc3GjJSQk_k5Q1b5ngKV9llNIAEpE5EtD_Ve6WDaeRqBsXYy6haqNaXOs4ZBuE7E8Y1hf57l2dO3u8LovnCF3dXs2mKdjUTKysufnyIanEsYZ91Q33TS7X-FHJnWz0VOvDRv1ycHzAGRDV5Oqw1lFt2haJ2aZWpCh8uBfI5xYmSPqrRWjdhWV1-GcNuh6AAGyT5ZGVAse8A2MUHuL9Z7LwQZ6iejqPtH-uNfruuNePn346vWnzZ6iItovRHv6Vuv2x2GoAkMiOUwJ5ufNwaKackXDfZYOUeEkkeMoDl41CI4DGE5WUTIVfPN4UsHVzrgnnKdWCt-Q1Gt20vGCQo5R-OvfmsPvPDwVbOeGSaD0';
      
      this.http.get(constantes.API_URL+'celebraciones_mesa/'+mesa_id, {
        headers: new HttpHeaders().set('Authorization', token)
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  // Elimina un Cliente de la Mesa
  //----------------------------------------------------------
  deleteClienteMesa(id_cliente) {
    return new Promise(resolve => {

      let token;
      this.storage.get('token').then((val) => {
        //console.log("Token: "+val);
        token =  'Bearer '+val;
      });
      token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiOGZmZWFjYjliY2M2ODdlZDNhMTFlMGUxYjBjYTQ4Y2NkMGU1ZDdmNTNiMDIwMjVmMmNjNTI1NDBlNjdmMDUyYWY1YTE3YzI3MjNmMzRhIn0.eyJhdWQiOiIxIiwianRpIjoiZGI4ZmZlYWNiOWJjYzY4N2VkM2ExMWUwZTFiMGNhNDhjY2QwZTVkN2Y1M2IwMjAyNWYyY2M1MjU0MGU2N2YwNTJhZjVhMTdjMjcyM2YzNGEiLCJpYXQiOjE1NDEwODgwNzIsIm5iZiI6MTU0MTA4ODA3MiwiZXhwIjoxNTcyNjI0MDcyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.AufQk8pXPVFg0oexiQV5ixlXtnlRM0hy19IdrC-0Txi789zqy4lxSYbhLneF9Fi4ExWXlZTiWNAJnfia8AvMmEv1LlOvaHPSVj8BNNMFYiniX7RnaVYN7-SNlFc8XEALVbBX749Ns_6fmks0BDuTJ1n7o7OKqFkZUGBn7dtmlPT-J00O966lOTUBgHr7ka0HtCRm_PsOcIC3Bhus-Rtgn0yRcYjXmFqldxgN_VDAuL84cpfgEgsnf5Ky4heCMbh0W1cJ-28nM8dbzgkKNPKjBHBHKSHPwGjwsu0mPyJCf6-kHyj8Flwjx0LzXkWaqgKvrWBc3GjJSQk_k5Q1b5ngKV9llNIAEpE5EtD_Ve6WDaeRqBsXYy6haqNaXOs4ZBuE7E8Y1hf57l2dO3u8LovnCF3dXs2mKdjUTKysufnyIanEsYZ91Q33TS7X-FHJnWz0VOvDRv1ycHzAGRDV5Oqw1lFt2haJ2aZWpCh8uBfI5xYmSPqrRWjdhWV1-GcNuh6AAGyT5ZGVAse8A2MUHuL9Z7LwQZ6iejqPtH-uNfruuNePn346vWnzZ6iItovRHv6Vuv2x2GoAkMiOUwJ5ufNwaKackXDfZYOUeEkkeMoDl41CI4DGE5WUTIVfPN4UsHVzrgnnKdWCt-Q1Gt20vGCQo5R-OvfmsPvPDwVbOeGSaD0';
      
      let headers = new HttpHeaders({
        'X-Requested-With': 'XMLHttpRequest ',
        'Authorization': token
      });
      
      this.http.delete(constantes.API_URL+'cliente_mesa/'+id_cliente, {headers})
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        resolve(err);
      });
    });
  }

  // Elimina una Celebración de la Mesa
  //----------------------------------------------------------
  deleteCelebracionMesa(id_cliente) {
    return new Promise(resolve => {

      let token;
      this.storage.get('token').then((val) => {
        //console.log("Token: "+val);
        token =  'Bearer '+val;
      });
      token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiOGZmZWFjYjliY2M2ODdlZDNhMTFlMGUxYjBjYTQ4Y2NkMGU1ZDdmNTNiMDIwMjVmMmNjNTI1NDBlNjdmMDUyYWY1YTE3YzI3MjNmMzRhIn0.eyJhdWQiOiIxIiwianRpIjoiZGI4ZmZlYWNiOWJjYzY4N2VkM2ExMWUwZTFiMGNhNDhjY2QwZTVkN2Y1M2IwMjAyNWYyY2M1MjU0MGU2N2YwNTJhZjVhMTdjMjcyM2YzNGEiLCJpYXQiOjE1NDEwODgwNzIsIm5iZiI6MTU0MTA4ODA3MiwiZXhwIjoxNTcyNjI0MDcyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.AufQk8pXPVFg0oexiQV5ixlXtnlRM0hy19IdrC-0Txi789zqy4lxSYbhLneF9Fi4ExWXlZTiWNAJnfia8AvMmEv1LlOvaHPSVj8BNNMFYiniX7RnaVYN7-SNlFc8XEALVbBX749Ns_6fmks0BDuTJ1n7o7OKqFkZUGBn7dtmlPT-J00O966lOTUBgHr7ka0HtCRm_PsOcIC3Bhus-Rtgn0yRcYjXmFqldxgN_VDAuL84cpfgEgsnf5Ky4heCMbh0W1cJ-28nM8dbzgkKNPKjBHBHKSHPwGjwsu0mPyJCf6-kHyj8Flwjx0LzXkWaqgKvrWBc3GjJSQk_k5Q1b5ngKV9llNIAEpE5EtD_Ve6WDaeRqBsXYy6haqNaXOs4ZBuE7E8Y1hf57l2dO3u8LovnCF3dXs2mKdjUTKysufnyIanEsYZ91Q33TS7X-FHJnWz0VOvDRv1ycHzAGRDV5Oqw1lFt2haJ2aZWpCh8uBfI5xYmSPqrRWjdhWV1-GcNuh6AAGyT5ZGVAse8A2MUHuL9Z7LwQZ6iejqPtH-uNfruuNePn346vWnzZ6iItovRHv6Vuv2x2GoAkMiOUwJ5ufNwaKackXDfZYOUeEkkeMoDl41CI4DGE5WUTIVfPN4UsHVzrgnnKdWCt-Q1Gt20vGCQo5R-OvfmsPvPDwVbOeGSaD0';
      
      let headers = new HttpHeaders({
        'X-Requested-With': 'XMLHttpRequest ',
        'Authorization': token
      });
      
      this.http.delete(constantes.API_URL+'celebracion_mesa/'+id_cliente, {headers})
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        resolve(err);
      });
    });
  }

   // Agrega Celebraciones a una mesa
  //----------------------------------------------------------
  agregarCelerebracionesMesa(data) {
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
        'Authorization': token
      });
      
      this.http.post(constantes.API_URL+'celebracion_mesa', JSON.stringify(data), {headers})
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        resolve(err);
      });
    });
  }

   // Agrega clientes a una mesa
  //----------------------------------------------------------
  agregarClienteMesa(data) {
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
        'Authorization': token
      });
      
      this.http.post(constantes.API_URL+'cliente_mesa', JSON.stringify(data), {headers})
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        resolve(err);
      });
    });
  }

  // Get All Clientes indicando si estan en la mesa
  //----------------------------------------------------------
  getClientesMesaCheck(mesa_id: any) {
    return new Promise(resolve => {
      let token;
      this.storage.get('token').then((val) => {
        //console.log("Token: "+val);
        token =  'Bearer '+val;
      });
      token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiOGZmZWFjYjliY2M2ODdlZDNhMTFlMGUxYjBjYTQ4Y2NkMGU1ZDdmNTNiMDIwMjVmMmNjNTI1NDBlNjdmMDUyYWY1YTE3YzI3MjNmMzRhIn0.eyJhdWQiOiIxIiwianRpIjoiZGI4ZmZlYWNiOWJjYzY4N2VkM2ExMWUwZTFiMGNhNDhjY2QwZTVkN2Y1M2IwMjAyNWYyY2M1MjU0MGU2N2YwNTJhZjVhMTdjMjcyM2YzNGEiLCJpYXQiOjE1NDEwODgwNzIsIm5iZiI6MTU0MTA4ODA3MiwiZXhwIjoxNTcyNjI0MDcyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.AufQk8pXPVFg0oexiQV5ixlXtnlRM0hy19IdrC-0Txi789zqy4lxSYbhLneF9Fi4ExWXlZTiWNAJnfia8AvMmEv1LlOvaHPSVj8BNNMFYiniX7RnaVYN7-SNlFc8XEALVbBX749Ns_6fmks0BDuTJ1n7o7OKqFkZUGBn7dtmlPT-J00O966lOTUBgHr7ka0HtCRm_PsOcIC3Bhus-Rtgn0yRcYjXmFqldxgN_VDAuL84cpfgEgsnf5Ky4heCMbh0W1cJ-28nM8dbzgkKNPKjBHBHKSHPwGjwsu0mPyJCf6-kHyj8Flwjx0LzXkWaqgKvrWBc3GjJSQk_k5Q1b5ngKV9llNIAEpE5EtD_Ve6WDaeRqBsXYy6haqNaXOs4ZBuE7E8Y1hf57l2dO3u8LovnCF3dXs2mKdjUTKysufnyIanEsYZ91Q33TS7X-FHJnWz0VOvDRv1ycHzAGRDV5Oqw1lFt2haJ2aZWpCh8uBfI5xYmSPqrRWjdhWV1-GcNuh6AAGyT5ZGVAse8A2MUHuL9Z7LwQZ6iejqPtH-uNfruuNePn346vWnzZ6iItovRHv6Vuv2x2GoAkMiOUwJ5ufNwaKackXDfZYOUeEkkeMoDl41CI4DGE5WUTIVfPN4UsHVzrgnnKdWCt-Q1Gt20vGCQo5R-OvfmsPvPDwVbOeGSaD0';
      
      this.http.get(constantes.API_URL+'clientes_mesa_check/'+mesa_id, {
        headers: new HttpHeaders().set('Authorization', token)
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        resolve(err);
      });
    });
  }

  // Get All Celebraciones_CLientes indicando si estan en la mesa
  //----------------------------------------------------------
  getCelebracionesMesaCheck(mesa_id: any) {
    return new Promise(resolve => {
      let token;
      this.storage.get('token').then((val) => {
        //console.log("Token: "+val);
        token =  'Bearer '+val;
      });
      token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiOGZmZWFjYjliY2M2ODdlZDNhMTFlMGUxYjBjYTQ4Y2NkMGU1ZDdmNTNiMDIwMjVmMmNjNTI1NDBlNjdmMDUyYWY1YTE3YzI3MjNmMzRhIn0.eyJhdWQiOiIxIiwianRpIjoiZGI4ZmZlYWNiOWJjYzY4N2VkM2ExMWUwZTFiMGNhNDhjY2QwZTVkN2Y1M2IwMjAyNWYyY2M1MjU0MGU2N2YwNTJhZjVhMTdjMjcyM2YzNGEiLCJpYXQiOjE1NDEwODgwNzIsIm5iZiI6MTU0MTA4ODA3MiwiZXhwIjoxNTcyNjI0MDcyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.AufQk8pXPVFg0oexiQV5ixlXtnlRM0hy19IdrC-0Txi789zqy4lxSYbhLneF9Fi4ExWXlZTiWNAJnfia8AvMmEv1LlOvaHPSVj8BNNMFYiniX7RnaVYN7-SNlFc8XEALVbBX749Ns_6fmks0BDuTJ1n7o7OKqFkZUGBn7dtmlPT-J00O966lOTUBgHr7ka0HtCRm_PsOcIC3Bhus-Rtgn0yRcYjXmFqldxgN_VDAuL84cpfgEgsnf5Ky4heCMbh0W1cJ-28nM8dbzgkKNPKjBHBHKSHPwGjwsu0mPyJCf6-kHyj8Flwjx0LzXkWaqgKvrWBc3GjJSQk_k5Q1b5ngKV9llNIAEpE5EtD_Ve6WDaeRqBsXYy6haqNaXOs4ZBuE7E8Y1hf57l2dO3u8LovnCF3dXs2mKdjUTKysufnyIanEsYZ91Q33TS7X-FHJnWz0VOvDRv1ycHzAGRDV5Oqw1lFt2haJ2aZWpCh8uBfI5xYmSPqrRWjdhWV1-GcNuh6AAGyT5ZGVAse8A2MUHuL9Z7LwQZ6iejqPtH-uNfruuNePn346vWnzZ6iItovRHv6Vuv2x2GoAkMiOUwJ5ufNwaKackXDfZYOUeEkkeMoDl41CI4DGE5WUTIVfPN4UsHVzrgnnKdWCt-Q1Gt20vGCQo5R-OvfmsPvPDwVbOeGSaD0';
      
      this.http.get(constantes.API_URL+'celebraciones_mesa_check/'+mesa_id, {
        headers: new HttpHeaders().set('Authorization', token)
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        resolve(err);
      });
    });
  }

  // Get Fotos de una Mesa
  //----------------------------------------------------------
  getFotosMesa(mesa_id) {
    return new Promise(resolve => {
      let token;
      this.storage.get('token').then((val) => {
        //console.log("Token: "+val);
        token =  'Bearer '+val;
      });
      token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiOGZmZWFjYjliY2M2ODdlZDNhMTFlMGUxYjBjYTQ4Y2NkMGU1ZDdmNTNiMDIwMjVmMmNjNTI1NDBlNjdmMDUyYWY1YTE3YzI3MjNmMzRhIn0.eyJhdWQiOiIxIiwianRpIjoiZGI4ZmZlYWNiOWJjYzY4N2VkM2ExMWUwZTFiMGNhNDhjY2QwZTVkN2Y1M2IwMjAyNWYyY2M1MjU0MGU2N2YwNTJhZjVhMTdjMjcyM2YzNGEiLCJpYXQiOjE1NDEwODgwNzIsIm5iZiI6MTU0MTA4ODA3MiwiZXhwIjoxNTcyNjI0MDcyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.AufQk8pXPVFg0oexiQV5ixlXtnlRM0hy19IdrC-0Txi789zqy4lxSYbhLneF9Fi4ExWXlZTiWNAJnfia8AvMmEv1LlOvaHPSVj8BNNMFYiniX7RnaVYN7-SNlFc8XEALVbBX749Ns_6fmks0BDuTJ1n7o7OKqFkZUGBn7dtmlPT-J00O966lOTUBgHr7ka0HtCRm_PsOcIC3Bhus-Rtgn0yRcYjXmFqldxgN_VDAuL84cpfgEgsnf5Ky4heCMbh0W1cJ-28nM8dbzgkKNPKjBHBHKSHPwGjwsu0mPyJCf6-kHyj8Flwjx0LzXkWaqgKvrWBc3GjJSQk_k5Q1b5ngKV9llNIAEpE5EtD_Ve6WDaeRqBsXYy6haqNaXOs4ZBuE7E8Y1hf57l2dO3u8LovnCF3dXs2mKdjUTKysufnyIanEsYZ91Q33TS7X-FHJnWz0VOvDRv1ycHzAGRDV5Oqw1lFt2haJ2aZWpCh8uBfI5xYmSPqrRWjdhWV1-GcNuh6AAGyT5ZGVAse8A2MUHuL9Z7LwQZ6iejqPtH-uNfruuNePn346vWnzZ6iItovRHv6Vuv2x2GoAkMiOUwJ5ufNwaKackXDfZYOUeEkkeMoDl41CI4DGE5WUTIVfPN4UsHVzrgnnKdWCt-Q1Gt20vGCQo5R-OvfmsPvPDwVbOeGSaD0';
      
      this.http.get(constantes.API_URL+'fotos_mesa/'+mesa_id, {
        headers: new HttpHeaders().set('Authorization', token)
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

   // Delete Fotos de una Mesa
  //----------------------------------------------------------
  deleteFotoMesa(foto_mesa_id) {
    return new Promise(resolve => {

      let token;
      this.storage.get('token').then((val) => {
        //console.log("Token: "+val);
        token =  'Bearer '+val;
      });
      token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiOGZmZWFjYjliY2M2ODdlZDNhMTFlMGUxYjBjYTQ4Y2NkMGU1ZDdmNTNiMDIwMjVmMmNjNTI1NDBlNjdmMDUyYWY1YTE3YzI3MjNmMzRhIn0.eyJhdWQiOiIxIiwianRpIjoiZGI4ZmZlYWNiOWJjYzY4N2VkM2ExMWUwZTFiMGNhNDhjY2QwZTVkN2Y1M2IwMjAyNWYyY2M1MjU0MGU2N2YwNTJhZjVhMTdjMjcyM2YzNGEiLCJpYXQiOjE1NDEwODgwNzIsIm5iZiI6MTU0MTA4ODA3MiwiZXhwIjoxNTcyNjI0MDcyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.AufQk8pXPVFg0oexiQV5ixlXtnlRM0hy19IdrC-0Txi789zqy4lxSYbhLneF9Fi4ExWXlZTiWNAJnfia8AvMmEv1LlOvaHPSVj8BNNMFYiniX7RnaVYN7-SNlFc8XEALVbBX749Ns_6fmks0BDuTJ1n7o7OKqFkZUGBn7dtmlPT-J00O966lOTUBgHr7ka0HtCRm_PsOcIC3Bhus-Rtgn0yRcYjXmFqldxgN_VDAuL84cpfgEgsnf5Ky4heCMbh0W1cJ-28nM8dbzgkKNPKjBHBHKSHPwGjwsu0mPyJCf6-kHyj8Flwjx0LzXkWaqgKvrWBc3GjJSQk_k5Q1b5ngKV9llNIAEpE5EtD_Ve6WDaeRqBsXYy6haqNaXOs4ZBuE7E8Y1hf57l2dO3u8LovnCF3dXs2mKdjUTKysufnyIanEsYZ91Q33TS7X-FHJnWz0VOvDRv1ycHzAGRDV5Oqw1lFt2haJ2aZWpCh8uBfI5xYmSPqrRWjdhWV1-GcNuh6AAGyT5ZGVAse8A2MUHuL9Z7LwQZ6iejqPtH-uNfruuNePn346vWnzZ6iItovRHv6Vuv2x2GoAkMiOUwJ5ufNwaKackXDfZYOUeEkkeMoDl41CI4DGE5WUTIVfPN4UsHVzrgnnKdWCt-Q1Gt20vGCQo5R-OvfmsPvPDwVbOeGSaD0';
      
      let headers = new HttpHeaders({
        'X-Requested-With': 'XMLHttpRequest ',
        'Authorization': token
      });
      
      this.http.delete(constantes.API_URL+'foto_mesa/'+foto_mesa_id, {headers})
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        resolve(err);
      });
    });
  }

  
   // Agrega clientes a una mesa
  //----------------------------------------------------------
  agregarFotoMesa(data) {
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
        'Authorization': token
      });
      
      this.http.post(constantes.API_URL+'foto_mesa', JSON.stringify(data), {headers})
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        resolve(err);
      });
    });
  }

  // Get Mesas History
  //----------------------------------------------------------
  getMesasHistory(date) {
    return new Promise(resolve => {
      let token;
      this.storage.get('token').then((val) => {
        //console.log("Token: "+val);
        token =  'Bearer '+val;
      });
      token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiOGZmZWFjYjliY2M2ODdlZDNhMTFlMGUxYjBjYTQ4Y2NkMGU1ZDdmNTNiMDIwMjVmMmNjNTI1NDBlNjdmMDUyYWY1YTE3YzI3MjNmMzRhIn0.eyJhdWQiOiIxIiwianRpIjoiZGI4ZmZlYWNiOWJjYzY4N2VkM2ExMWUwZTFiMGNhNDhjY2QwZTVkN2Y1M2IwMjAyNWYyY2M1MjU0MGU2N2YwNTJhZjVhMTdjMjcyM2YzNGEiLCJpYXQiOjE1NDEwODgwNzIsIm5iZiI6MTU0MTA4ODA3MiwiZXhwIjoxNTcyNjI0MDcyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.AufQk8pXPVFg0oexiQV5ixlXtnlRM0hy19IdrC-0Txi789zqy4lxSYbhLneF9Fi4ExWXlZTiWNAJnfia8AvMmEv1LlOvaHPSVj8BNNMFYiniX7RnaVYN7-SNlFc8XEALVbBX749Ns_6fmks0BDuTJ1n7o7OKqFkZUGBn7dtmlPT-J00O966lOTUBgHr7ka0HtCRm_PsOcIC3Bhus-Rtgn0yRcYjXmFqldxgN_VDAuL84cpfgEgsnf5Ky4heCMbh0W1cJ-28nM8dbzgkKNPKjBHBHKSHPwGjwsu0mPyJCf6-kHyj8Flwjx0LzXkWaqgKvrWBc3GjJSQk_k5Q1b5ngKV9llNIAEpE5EtD_Ve6WDaeRqBsXYy6haqNaXOs4ZBuE7E8Y1hf57l2dO3u8LovnCF3dXs2mKdjUTKysufnyIanEsYZ91Q33TS7X-FHJnWz0VOvDRv1ycHzAGRDV5Oqw1lFt2haJ2aZWpCh8uBfI5xYmSPqrRWjdhWV1-GcNuh6AAGyT5ZGVAse8A2MUHuL9Z7LwQZ6iejqPtH-uNfruuNePn346vWnzZ6iItovRHv6Vuv2x2GoAkMiOUwJ5ufNwaKackXDfZYOUeEkkeMoDl41CI4DGE5WUTIVfPN4UsHVzrgnnKdWCt-Q1Gt20vGCQo5R-OvfmsPvPDwVbOeGSaD0';
      
      this.http.get(constantes.API_URL+'historial_mesas/'+date, {
        headers: new HttpHeaders().set('Authorization', token)
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        resolve(err);
      });
    });
  }

  // Get Mesas History Headers
  //----------------------------------------------------------
  getMesasHistoryHeaders(date) {
    return new Promise(resolve => {
      let token;
      this.storage.get('token').then((val) => {
        //console.log("Token: "+val);
        token =  'Bearer '+val;
      });
      token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiOGZmZWFjYjliY2M2ODdlZDNhMTFlMGUxYjBjYTQ4Y2NkMGU1ZDdmNTNiMDIwMjVmMmNjNTI1NDBlNjdmMDUyYWY1YTE3YzI3MjNmMzRhIn0.eyJhdWQiOiIxIiwianRpIjoiZGI4ZmZlYWNiOWJjYzY4N2VkM2ExMWUwZTFiMGNhNDhjY2QwZTVkN2Y1M2IwMjAyNWYyY2M1MjU0MGU2N2YwNTJhZjVhMTdjMjcyM2YzNGEiLCJpYXQiOjE1NDEwODgwNzIsIm5iZiI6MTU0MTA4ODA3MiwiZXhwIjoxNTcyNjI0MDcyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.AufQk8pXPVFg0oexiQV5ixlXtnlRM0hy19IdrC-0Txi789zqy4lxSYbhLneF9Fi4ExWXlZTiWNAJnfia8AvMmEv1LlOvaHPSVj8BNNMFYiniX7RnaVYN7-SNlFc8XEALVbBX749Ns_6fmks0BDuTJ1n7o7OKqFkZUGBn7dtmlPT-J00O966lOTUBgHr7ka0HtCRm_PsOcIC3Bhus-Rtgn0yRcYjXmFqldxgN_VDAuL84cpfgEgsnf5Ky4heCMbh0W1cJ-28nM8dbzgkKNPKjBHBHKSHPwGjwsu0mPyJCf6-kHyj8Flwjx0LzXkWaqgKvrWBc3GjJSQk_k5Q1b5ngKV9llNIAEpE5EtD_Ve6WDaeRqBsXYy6haqNaXOs4ZBuE7E8Y1hf57l2dO3u8LovnCF3dXs2mKdjUTKysufnyIanEsYZ91Q33TS7X-FHJnWz0VOvDRv1ycHzAGRDV5Oqw1lFt2haJ2aZWpCh8uBfI5xYmSPqrRWjdhWV1-GcNuh6AAGyT5ZGVAse8A2MUHuL9Z7LwQZ6iejqPtH-uNfruuNePn346vWnzZ6iItovRHv6Vuv2x2GoAkMiOUwJ5ufNwaKackXDfZYOUeEkkeMoDl41CI4DGE5WUTIVfPN4UsHVzrgnnKdWCt-Q1Gt20vGCQo5R-OvfmsPvPDwVbOeGSaD0';
      
      this.http.get(constantes.API_URL+'historial_mesas_headers/'+date, {
        headers: new HttpHeaders().set('Authorization', token)
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        resolve(err);
      });
    });
  }

}
