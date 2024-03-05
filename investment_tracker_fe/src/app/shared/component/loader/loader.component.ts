import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../utilities/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  initiateLoader: boolean = false;

  constructor(public ldrService: LoaderService) {}

  ngOnInit() {}
}
