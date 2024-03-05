import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { error } from '@angular/compiler/src/util';
import { InvestmentFundLog } from 'src/app/shared/models/investmentFundLog';
import { ResponseViewModel } from 'src/app/shared/models/responseViewModel';
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  apiUrl: string = environment.apiUrl + 'api/Dashboard';
  saveActionEndpoint: string = `${this.apiUrl}/PostLogEntry`;
  logEntriesEndpoint: string = `${this.apiUrl}/GetLogEntry`;

  constructor(private http: HttpClient) {}

  async saveInvestmentEntry(postPbj: InvestmentFundLog):Promise<ResponseViewModel<InvestmentFundLog[]>> {
    const resp = await this.http.post<ResponseViewModel<InvestmentFundLog[]>>(this.saveActionEndpoint, postPbj).toPromise();
    return resp;
  }

  async getLogEnteries():Promise<ResponseViewModel<InvestmentFundLog[]>> {
    try {
      const res = await this.http.get<ResponseViewModel<InvestmentFundLog[]>>(this.logEntriesEndpoint).toPromise();
      return res;
    } catch (error) {
      console.error('Error fetching log entries:', error);
      throw error; // Rethrow the error to propagate it to the caller
    }
  }
}
