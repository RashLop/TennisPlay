import TennisScorer from "./tennisScore"
describe("TennisScore",  () => {

    it("game empieza con ambos en cero",() =>{
        const scorer = new TennisScorer(); 
        expect(scorer.showScore()).toEqual("Love - Love")
        
    }); 

    it("jugador 1 marca cun punto y jugador 2 en cero ",() =>{
        const scorer = new TennisScorer(); 
        scorer.player1Score(); 
        expect(scorer.showScore()).toEqual("15 - Love")
    }); 

    it("jugador 1 marca 2 punto y jugador 2 en cero  ",() =>{
        const scorer = new TennisScorer(); 
        scorer.player1Score(); 
        scorer.player1Score();         
        expect(scorer.showScore("30 - Love")).toEqual("30 - Love")
    });

    it("jugador 1 marca 3 puntos y jugador 2 en cero  ",() =>{
        const scorer = new TennisScorer(); 
        scorer.player1Score(); 
        scorer.player1Score();         
        scorer.player1Score();         
        expect(scorer.showScore("40 - Love")).toEqual("40 - Love")
    });
    
}); 