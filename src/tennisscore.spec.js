import TennisScorer from "./tennisScore"
describe("TennisScore",  () => {

    it("game empieza con ambos en cero",() =>{
        const scorer = new TennisScorer(); 
        expect(scorer.showScore()).toEqual("Love - Love")
        
    }); 

    it("Jugador 1 Marca un punto ---> 15  0  ",() =>{
        const scorer = new TennisScorer(); 
        scorer.player1Score(); 
        expect(scorer.showScore()).toEqual("15 - Love")
    }); 

    it("Jugador 1 Marca un punto ---> 15  0  ",() =>{
        const scorer = new TennisScorer(); 
        scorer.player1Score(); 
        scorer.player1Score();         
        expect(scorer.showScore("30 - Love")).toEqual("30 - Love")
    });
}); 