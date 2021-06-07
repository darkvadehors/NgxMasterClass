import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterClassService } from 'src/app/services/master-class/master-class.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  masterClass: any;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _service: MasterClassService
  ) { }

  ngOnInit(): void {
    const url = this._route.snapshot.params.name;
    console.log('>>', url);
    this.masterClass = this._service.getAllMasterClass().find(m => m.url === url)
  }

}
