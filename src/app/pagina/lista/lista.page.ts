import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  /* nomeAtor1 = "Daenerys Targaryen";
  avatarAtor1 = "/assets/pexels-imustbedead-10960315.jpg"
  nomeAtor2 = "Rick";
  avatarAtor2 = "/assets/michael-marais-OVqrDBM0afM-unsplash.jpg" */


      nomeCard= "Daenerys Targaryen"
      avatarCard= "/assets/pexels-imustbedead-10960315.jpg"


  elenco = [
    {
      nome: "Daenerys Targaryen",
      avatar: "/assets/pexels-imustbedead-10960315.jpg",
      curtidas: "30"
    },
    {
      nome: "Rick",
      avatar: "/assets/michael-marais-OVqrDBM0afM-unsplash.jpg",
      curtidas: "5"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
