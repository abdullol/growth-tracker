import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Color } from 'ng2-charts/ng2-charts';
import {
  faTh,
  faCheck,
  faTrash,
  faAngleDown,
  faAngleUp,
} from '@fortawesome/free-solid-svg-icons';
import { DashboardService } from 'src/app/core/http/dashboard/dashboard.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoaderService } from 'src/app/shared/utilities/loader.service';
import { InvestmentFundLog } from 'src/app/shared/models/investmentFundLog';
import { ResponseViewModel } from 'src/app/shared/models/responseViewModel';
import { PaginationFilter } from 'src/app/shared/models/paginationFilter';
import { HttpStatusCodes } from 'src/app/shared/enums/HttpStatusCodes.enum';
import { DataInteractionServiceService } from 'src/app/core/services/data-interaction-service.service';
import { PageHeaderComponent } from 'src/app/shared/component/page-header/page-header.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  @ViewChild(PageHeaderComponent) childCom!: PageHeaderComponent;

  myDateValue: Date;
  form: FormGroup;
  logEnteriesLst: InvestmentFundLog[] = [];
  page = 1;
  pageSize = 5;
  paginate: PaginationFilter = {
    PageSize: 5,
    PageNumber: 1
  };
  totalRecords: number;
  constructor(
    private dashboardService: DashboardService,
    private fb: FormBuilder,
    private ldrService: LoaderService,
    private ddiService: DataInteractionServiceService
  ) {
    this.myDateValue = new Date();

    this.form = this.fb.group({
      logId: 0,
      assetsClass: '',
      investmentAmount: 0,
      transactionPerformDate: '',
      assetImageUrl: '',
      currencyId: 0,
      statusId: 0,
      description: '',
      location: '',
      transactionPerformedBy : '',
      currency: '',
      status: ''
    });
  }

  async ngOnInit() {
    await this.loadTableData(this.paginate);
  }

  async saveEntry() {
    this.ldrService.showLoader();
    try {
      var resp: ResponseViewModel<InvestmentFundLog[]> =
        await this.dashboardService.saveInvestmentEntry(this.form.value);
        await this.handleOperationResponse(resp);
    } catch (error) {
      console.log(error);
    }
  }

  private async handleOperationResponse(resp: ResponseViewModel<InvestmentFundLog[]>) {
    if (resp &&
      (resp as ResponseViewModel<InvestmentFundLog[]>).statusCode ===
      HttpStatusCodes.OK) {
      await this.loadTableData(this.paginate);
      this.ldrService.hideLoader();
      this.ddiService.closeModal();
      this.form.reset();
    }
  }

  async loadTableData(paginate) {
    this.ldrService.showLoader();
    try {
      this.logEnteriesLst = new Array<InvestmentFundLog>();
      var resp: ResponseViewModel<InvestmentFundLog[]> =
        await this.dashboardService.getLogEnteries(paginate);
      if (resp && (resp as ResponseViewModel<InvestmentFundLog[]>).data) {
        this.resetVariables();
        this.logEnteriesLst = resp.data;
        this.totalRecords = resp.totalRecords;
        this.ldrService.hideLoader();
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getPremiumData(event){
    console.log(event);
    this.paginate = {
      PageSize: 5,
      PageNumber: Number(event)
    }
    await this.loadTableData(this.paginate)
   }

  async deleteLogEntry(val: InvestmentFundLog){
    try {
      this.ldrService.showLoader()
      var resp = await this.dashboardService.deleteLogEntryAPI(val.logId);
      await this.handleOperationResponse(resp);
      
    } catch (error) {
      console.log(error);
    }
  }

  editLogEntry(val: InvestmentFundLog){
    console.log(val);
    this.form.setValue(val);
    this.childCom.openDialog();
  }

  // =======================

  faTh = faTh;
  faCheck = faCheck;
  faTrash = faTrash;
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;

  heading = 'Analytics Dashboard';
  subheading =
  "GROWTH personal finance dashboard displays asset classes and time-wise filtered investments."
  icon = 'pe-7s-plane icon-gradient bg-tempting-azure';

  slideConfig6 = {
    className: 'center',
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    adaptiveHeight: true,
    dots: true,
  };

  public datasets = [
    {
      label: 'My First dataset',
      data: [65, 59, 80, 81, 46, 55, 38, 59, 80],
      datalabels: {
        display: false,
      },
    },
  ];

  public datasets2 = [
    {
      label: 'My First dataset',
      data: [46, 55, 59, 80, 81, 38, 65, 59, 80],
      datalabels: {
        display: false,
      },
    },
  ];

  public datasets3 = [
    {
      label: 'My First dataset',
      data: [65, 59, 80, 81, 55, 38, 59, 80, 46],
      datalabels: {
        display: false,
      },
    },
  ];
  public lineChartColors: Color[] = [
    {
      // dark grey
      backgroundColor: 'rgba(247, 185, 36, 0.2)',
      borderColor: '#f7b924',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#f7b924',
      pointBackgroundColor: '#fff',
      pointHoverBorderWidth: 4,
      pointRadius: 6,
      pointBorderWidth: 5,
      pointHoverRadius: 8,
      pointHitRadius: 10,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#f7b924',
    },
  ];

  public lineChartColors2: Color[] = [
    {
      // dark grey
      backgroundColor: 'rgba(48, 177, 255, 0.2)',
      borderColor: '#30b1ff',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#30b1ff',
      pointBackgroundColor: '#ffffff',
      pointHoverBorderWidth: 4,
      pointRadius: 6,
      pointBorderWidth: 5,
      pointHoverRadius: 8,
      pointHitRadius: 10,
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#30b1ff',
    },
  ];

  public lineChartColors3: Color[] = [
    {
      // dark grey
      backgroundColor: 'rgba(86, 196, 121, 0.2)',
      borderColor: '#56c479',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#56c479',
      pointBackgroundColor: '#fff',
      pointHoverBorderWidth: 4,
      pointRadius: 6,
      pointBorderWidth: 5,
      pointHoverRadius: 8,
      pointHitRadius: 10,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#56c479',
    },
  ];

  public labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
  ];

  public options = {
    layout: {
      padding: {
        left: 0,
        right: 8,
        top: 0,
        bottom: 0,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            display: false,
            beginAtZero: true,
          },
          gridLines: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            display: false,
          },
          gridLines: {
            display: false,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  private resetVariables() {
    this.logEnteriesLst = [];
  }
}
