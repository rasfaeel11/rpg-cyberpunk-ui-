import { Component, OnInit } from '@angular/core';
import { GameApi, GameState } from '../services/game-api';

@Component({
  selector: 'app-tela-batalha',

  templateUrl: './tela-batalha.html',
  styleUrls: ['./tela-batalha.css']
})
export class TelaBatalhaComponent implements OnInit { 
  gameState?: GameState; 

  constructor(private gameApi: GameApi) { }

  ngOnInit(): void {
    const dadosParaEnviar = {
      nomeJogador: 'V',
      escolhaClasse: 3,
      dificuldade: 2
    };

    this.gameApi.iniciarJogo(dadosParaEnviar).subscribe(resposta => {
      console.log('Dados recebidos da API!', resposta);
      this.gameState = resposta;
    });
  }



  public ataqueFisico(): void {
    console.log('Ataque Físico Funcionando');
    if (this.gameState) {
      this.gameState.hpInimigo -= 10;
    }
  }

  public ataqueCibernetico(): void {
    console.log('Ataque Cibernético Funcionando');
    if (this.gameState) {
      this.gameState.hpInimigo -= 15;
      this.gameState.epJogador -= 5;
    }
  }

  public usarStim(): void {
    if (this.gameState && this.gameState.stimsJogador > 0) {
      console.log('Usar Stim Funcionando');
      this.gameState.hpJogador += 20;
      this.gameState.stimsJogador -= 1;
    } else {
      console.log('Você não tem mais Stims!');
    }
  }

} 