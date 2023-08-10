import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(private toast: ToastController) { }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toast.create({
      message: 'Cuidado Voce nao pode apertar ai',
      duration: 1500,   /*milissegundos*/
      position: position,
    });

    await toast.present();
  }

  ngOnInit() {
  }

}
