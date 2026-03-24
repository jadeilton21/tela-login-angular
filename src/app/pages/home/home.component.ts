import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userName: string = 'Visitante'; // Nome fixo ou vindo do seu AuthService
  messageIntro: string = 'É hora de desacelerar. Bem-vindo à sua zona de calma.';
  quote: string = '"A arte de descansar é parte da arte de trabalhar." — John Lubbock';

  // Dados abstratos para os cards
  visualStats = [
    { value: '72%', label: 'Umidade', icon: '💧' },
    { value: '24°C', label: 'Temperatura', icon: '☀️' },
    { value: 'Leve', label: 'Brisa', icon: '🍃' }
  ];
}