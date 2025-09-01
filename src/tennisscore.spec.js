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
        expect(scorer.showScore()).toEqual("30 - Love")
    });

    it("jugador 1 marca 3 puntos y jugador 2 en cero  ",() =>{
        const scorer = new TennisScorer(); 
        scorer.player1Score(); 
        scorer.player1Score();         
        scorer.player1Score();         
        expect(scorer.showScore()).toEqual("40 - Love")
    });

    it("jugador 1 marca 3 puntos y jugador 2 marca 1 punto", ()=> {
        const scorer = new TennisScorer(); 
        scorer.player1Score(); 
        scorer.player1Score(); 
        scorer.player1Score(); 
        scorer.player2Score(); 
        expect(scorer.showScore()).toEqual("40 - 15")
    });
    
}); 