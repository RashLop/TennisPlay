class TennisScorer {
    constructor(){
        this.player1Points = 0; 
        this.player2Points = 0; 
    }
    showScore(){
        const labels = ["Love", "15", "30", "40"]; 
            return labels[this.player1Points] + " - " + labels[this.player2Points]; 
    }
player1Score(){
    this.player1Points++; 
}
player2Score(){
    this.player2Points++; 
}
}


export default TennisScorer; 