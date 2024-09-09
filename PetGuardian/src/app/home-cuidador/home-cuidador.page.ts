import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-cuidador',
  templateUrl: './home-cuidador.page.html',
  styleUrls: ['./home-cuidador.page.scss'],
})
export class HomeCuidadorPage implements OnInit {

  usuario: any = null

  constructor() { }

  ngOnInit() {  
    this.usuario = JSON.parse(localStorage.getItem('userRole') || '{}');
    
  }

  

}
