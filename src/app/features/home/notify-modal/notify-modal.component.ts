import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-notify-modal',
  templateUrl: './notify-modal.component.html',
  styleUrls: ['./notify-modal.component.scss']
})
export class NotifyModalComponent implements OnInit {

  constructor(
    public modalCtrl: ModalController
  ) { }

  ngOnInit(): void {
  }

  sendForm(){

  }
}
