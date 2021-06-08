import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ModalController, ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-notify-modal',
  templateUrl: './notify-modal.component.html',
  styleUrls: ['./notify-modal.component.scss']
})
export class NotifyModalComponent implements OnInit {

  public form: FormGroup|undefined;

  constructor(
    public readonly modalCtrl: ModalController,
    private readonly _toastCtrl: ToastController,
    private readonly _http: HttpClient
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
      ]))
    });
  }

  async sendForm(){
    if (this.form?.valid !== true) return;
    const url = environment.notifySlackUrl;
    const msg = {
      blocks: [
        {
          "type": "context",
          "elements": [
            {
              "type": "plain_text",
              "text": this.form.value.email,
              "emoji": true
            }
          ]
        },
        {
          "type": "divider"
        }
      ]
    };
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    await this._http.post(url, JSON.stringify(msg), {headers, responseType: 'arraybuffer'})
      .toPromise()
      .catch(err => {
        throw new Error('[ERROR] Send message error.');
      });
    const ionToast = await this._toastCtrl.create({
      message: 'Success message send',
      color: 'success',
      duration: 2000
    });
    ionToast.present();
    this.form.reset();
    this.modalCtrl.dismiss();
  }
}
