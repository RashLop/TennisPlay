import showScore from "./tennisScore"

describe("TennisScore",  () => {
    it("game empieza con ambos en cero",() =>{
        expect(showScore()).toEqual("Love - Love")
    })
})

