import { Component } from '@angular/core';

@Component({
  selector: 'gofooter',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor() { }

  obterAno() {    
    return new Date().getFullYear();
  }
}