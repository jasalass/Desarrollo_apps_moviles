import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-dueno',
  templateUrl: './home-dueno.page.html',
  styleUrls: ['./home-dueno.page.scss'],
})
export class HomeDuenoPage implements OnInit {
  usuario: any = null

  constructor() { }

  ngOnInit() {  
    this.usuario = JSON.parse(localStorage.getItem('userRole') || '{}');
    
  }
}
