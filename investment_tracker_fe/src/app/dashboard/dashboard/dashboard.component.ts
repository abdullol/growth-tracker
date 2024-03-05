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
import { LoaderComponent } from 'src/app/shared/component/loader/loader.component';
import { LoaderService } from 'src/app/shared/utilities/loader.service';
import { InvestmentFundLog } from 'src/app/shared/models/investmentFundLog';
import { ResponseViewModel } from 'src/app/shared/models/responseViewModel';
import { HttpStatusCodes } from 'src/app/shared/enums/HttpStatusCodes.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  myDateValue: Date;
  form: FormGroup;
  logEnteriesLst: InvestmentFundLog[] = [];
  constructor(
    private dashboardService: DashboardService,
    private fb: FormBuilder,
    private ldrService: LoaderService
  ) {
    this.myDateValue = new Date();

    this.form = this.fb.group({
      id: 0,
      assetsClass: '',
      investmentAmount: 0,
      transactionPerformDate: '',
      assetImageUrl: '',
      currencyId: 0,
      statusId: 0,
      description: '',
      location: '',
      transactionPerformBy : ''
    });
  }

  async ngOnInit() {
    await this.loadTableData();
  }

  async saveEntry() {
    this.ldrService.showLoader();
    try {
      var resp: ResponseViewModel<InvestmentFundLog[]> =
        await this.dashboardService.saveInvestmentEntry(this.form.value);
      if (
        resp &&
        (resp as ResponseViewModel<InvestmentFundLog[]>).statusCode ===
          HttpStatusCodes.OK
      ) {
        this.ldrService.hideLoader();
        await this.loadTableData();
      }
    } catch (error) {
      console.log(error);
    }

    console.log('saveEntry', resp);
  }

  async loadTableData() {
    this.ldrService.showLoader();
    try {
      this.logEnteriesLst = new Array<InvestmentFundLog>();
      var resp: ResponseViewModel<InvestmentFundLog[]> =
        await this.dashboardService.getLogEnteries();
      if (resp && (resp as ResponseViewModel<InvestmentFundLog[]>).data) {
        this.logEnteriesLst = resp.data;
      }
      this.ldrService.hideLoader();
    } catch (error) {
      console.log(error);
    }
  }

  // =======================

  faTh = faTh;
  faCheck = faCheck;
  faTrash = faTrash;
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;

  heading = 'Analytics Dashboard';
  subheading =
    'This is an example dashboard created using build-in elements and components.';
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
}
