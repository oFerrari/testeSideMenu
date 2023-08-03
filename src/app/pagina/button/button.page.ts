import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {

  constructor(public nav: NavController) { }

  //Eventos
  abrirPagina(page: string){
    //alert("!!!")
    //this.nav.navigateForward('home')
    this.nav.navigateForward(page)
    this.nav.navigateForward(page)
  }


  ngOnInit() {
  }

}
