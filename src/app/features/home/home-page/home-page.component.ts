import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MasterClassService } from 'src/app/services/master-class/master-class.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  masterClass: any[]|undefined;
  constructor(
    private readonly _service: MasterClassService
  ) { }

  ngOnInit(): void {
    this.masterClass = this._service.getAllMasterClass();
  }

}
