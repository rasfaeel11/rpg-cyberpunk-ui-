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

  public ataqueFisico(): void {
    console.log('Ataque Físico Funcionando');
    this.inimigo.hp -= 10;
  }

  public ataqueCibernetico(): void {
    console.log('Ataque Cibernético Funcionando');
    this.inimigo.hp -= 15;
    this.jogador.ep -= 5;
  }

  public usarStim(): void {
    if (this.jogador.stims <= 0){
      return;
    }
    console.log('Usar Stim Funcionando');
    this.jogador.hp += 20;
    this.jogador.stims -= 1;

  }

  mensagem = 'O que você vai fazer?';
  // --- Fim dos Dados Falsos ---

  constructor() { }

}
