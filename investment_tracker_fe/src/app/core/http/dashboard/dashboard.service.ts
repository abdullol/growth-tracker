import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { error } from '@angular/compiler/src/util';
import { InvestmentFundLog } from 'src/app/shared/models/investmentFundLog';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

apiUrl: string = environment.apiUrl;
saveAction: string = `${this.apiUrl}api/Dashboard/PostLogEntry`;


constructor(private http: HttpClient) {
  
 }

saveInvestmentEntry(postPbj: InvestmentFundLog){
  this.http.post(this.saveAction, postPbj).subscribe(x=>{
    console.log('successful');
  },(error) => {
    console.log(`{error}`);
  })
}

}
