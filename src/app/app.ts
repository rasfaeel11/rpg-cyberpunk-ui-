import { Component, signal } from '@angular/core';
import {  TelaBatalhaComponent } from "./tela-batalha/tela-batalha";

@Component({
  selector: 'app-root',
  imports: [TelaBatalhaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('rpg-ui');
}
