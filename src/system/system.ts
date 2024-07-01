import { Game } from './game'

export abstract class System {

    game: Game;

    constructor(game: Game){
        this.game = game;
    }
}
