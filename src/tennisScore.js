class TennisScorer {
    constructor(){
        this.player1Points = 0; 
    }
    showScore(){
        if (this.player1Points === 1){
            return "15 - Love"; 
        }
        if(this.player1Points === 2)
        {
            return "30 - Love"; 

        }
        return "Love - Love"; 
}
player1Score(){
    this.player1Points++; 
}
}


export default TennisScorer; 