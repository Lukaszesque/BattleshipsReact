import { GenerateBattleShips, GenerateShips }from "../ShipGenerators";

let testEmptyArray = Array(9).fill("0").map(() => Array(9).fill("0"));
let testEmptyArray2 = Array(9).fill("0").map(() => Array(9).fill("0"));

it('tests battleships render a value', () => {
    expect(GenerateBattleShips(testEmptyArray)).not.toBeUndefined();
    expect(GenerateBattleShips(testEmptyArray2)).not.toEqual(testEmptyArray);
})

it('tests ships method renders a value', () => {
    expect(GenerateShips(testEmptyArray)).not.toBeUndefined();
    expect(GenerateShips(testEmptyArray2)).not.toEqual(testEmptyArray);
})

