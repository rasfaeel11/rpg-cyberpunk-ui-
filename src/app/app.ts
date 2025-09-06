import { Component, signal } from '@angular/core';
import { TelaBatalha } from "./tela-batalha/tela-batalha";

@Component({
  selector: 'app-root',
  imports: [TelaBatalha],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('rpg-ui');
}
