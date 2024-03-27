import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { error } from '@angular/compiler/src/util';
import { InvestmentFundLog } from 'src/app/shared/models/investmentFundLog';
import { ResponseViewModel } from 'src/app/shared/models/responseViewModel';
import { PaginationFilter } from 'src/app/shared/models/paginationFilter';
@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  apiUrl: string = environment.apiUrl + 'api/Dashboard';
  saveActionEndpoint: string = `${this.apiUrl}/PostLogEntry`;
  logEntriesEndpoint: string = `${this.apiUrl}/GetLogEntry`;
  deleteEnteriesEndpoint: string = `${this.apiUrl}/DeleteLogEntry`;

  constructor(private http: HttpClient) {}

  async saveInvestmentEntry(postPbj: InvestmentFundLog):Promise<ResponseViewModel<InvestmentFundLog[]>> {
    const resp = await this.http.post<ResponseViewModel<InvestmentFundLog[]>>(this.saveActionEndpoint, postPbj).toPromise();
    return resp;
  }

  async getLogEnteries(pagination: PaginationFilter):Promise<ResponseViewModel<InvestmentFundLog[]>> {
    try {
      const payload = {
        PageSize: pagination.PageSize.toString(),
        PageNumber: pagination.PageNumber.toString()
      }
      return await this.http.get<ResponseViewModel<InvestmentFundLog[]>>(this.logEntriesEndpoint, { params: payload } ).toPromise();
    } catch (error) {
      console.error('Error fetching log entries:', error);
      throw error; // Rethrow the error to propagate it to the caller
    }
  }

  async deleteLogEntryAPI(id: number):Promise<ResponseViewModel<InvestmentFundLog[]>>  {
    try {
      var resp = await this.http.delete<ResponseViewModel<InvestmentFundLog[]>>(`${this.deleteEnteriesEndpoint}/${id}`).toPromise();
      return resp;
    } catch (error) {
      console.error('Error fetching log entries:', error);
      throw error; // Rethrow the error to propagate it to the caller
    }
  }
}
