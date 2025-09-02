export class TennisScorer {
    constructor(){
        this.player1Points = 0; 
        this.player2Points = 0; 
    }
    showScore(){

        const labels = ["Love", "15", "30", "40"]; 
        let Scorer = labels[this.player1Points] + " - " + labels[this.player2Points]; 
        if(this.player1Points === 3 && this.player2Points === 3)
        {
            Scorer = "Deuce"; 
        }
        if (this.player1Points >= 4 || this.player2Points >= 4) {
        let diff = this.player1Points - this.player2Points;
        if (diff === 1) {
            Scorer = "Advantage Player 1";
        } else if (diff === -1) {
            Scorer = "Advantage Player 2";
        } else if (diff >= 2) {
            Scorer = "Game to Player 1";
        } else {
            Scorer = "Game to Player 2";
        }
    }

        return Scorer; 
    }
player1Score(){
    this.player1Points++; 
}
player2Score(){
    this.player2Points++; 
}

}

