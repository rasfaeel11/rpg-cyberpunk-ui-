import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface GameState {
  nomeJogador: string;
  hpJogador: number;
  epJogador: number;
  stimsJogador: number;
  nomeInimigo: string;
  hpInimigo: number; // <-- A propriedade é 'hpInimigo'
  mensagem: string;
}

@Injectable({
  providedIn: 'root'
})
export class GameApi {
  private apiUrl = 'http://localhost:8080/jogo';
  constructor(private http: HttpClient) { }

  public iniciarJogo(dadosIniciais: any): Observable<GameState> {
    return this.http.post<GameState>(`${this.apiUrl}/iniciar`, dadosIniciais);
}
}
