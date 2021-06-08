import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MasterClassService } from 'src/app/services/master-class/master-class.service';
import { NotifyModalComponent } from '../notify-modal/notify-modal.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  masterClass: any[]|undefined;
  constructor(
    private readonly _service: MasterClassService,
    private _modalCtrl: ModalController
  ) { }

  ngOnInit(): void {
    this.masterClass = this._service.getAllMasterClass();
  }

  async notifyMe() {
    const ionModal = await this._modalCtrl.create({
      component: NotifyModalComponent
    });
    await ionModal.present();
  }
}
