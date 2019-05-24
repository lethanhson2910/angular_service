import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from "@angular/common/http";
import { tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class QuanLyPhimService {

  constructor(private http: HttpClient) { }

  layDanhSachPhim(): Observable<any>{
    const url = 'http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP06'
    return this.http.get(url).pipe(
      tap(
        () => {},
      catchError(err =>{
        return this.handleError(err);
      })
    ));
  }   

  handleError(err){
    // if(err.status === 400){

    // }
    return err;
  }
}
