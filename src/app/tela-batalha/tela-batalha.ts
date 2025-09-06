import { Component } from '@angular/core';

@Component({
  selector: 'app-tela-batalha',
  imports: [],
  templateUrl: './tela-batalha.html',
  styleUrl: './tela-batalha.css'
})
export class TelaBatalha {
// --- Nossos Dados Falsos (Mock) ---
  jogador = {
    nome: 'V',
    hp: 100,
    ep: 20,
    stims: 2
  };

  inimigo = {
    nome: 'Drone de Segurança',
    hp: 50
  };

  mensagem = 'O que você vai fazer?';
  // --- Fim dos Dados Falsos ---

  constructor() { }

}
