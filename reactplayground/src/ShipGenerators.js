import { ValidateHorizontalCruisers, ValidateVerticalCruisers } from './ShipValidators.js';

export const Ships = 
{
  Battleship: "Battleship",
  Cruiser: "Cruiser",
  Destroyer: "Destroyer",
  Submarine: "Submarine"
}

export function GenerateShips() 
{
let rows = Array(9).fill("0").map(() => Array(9).fill("0"));
let totalRuns=0;

rows = GenerateBattleShips(rows);
totalRuns++;
// rows = GenerateCruisers(totalRuns, rows);
// totalRuns++;
// rows = GenerateCruisers(totalRuns, rows);

//console.log(rows);
//console.log("Total runs: " + totalRuns)
return rows;
}

export function GenerateBattleShips(rows) {


    let isVertical = Math.random() > 0.5
    let xStartCoordinate;
    let yStartCoordinate;
    
    if (isVertical) 
    {
    xStartCoordinate = Math.floor(Math.random() * 9);
    yStartCoordinate = Math.floor(Math.random() * 6);

    for (var i = 0; i < 4; i++) 
    {
      rows[yStartCoordinate + i][xStartCoordinate] = Ships.Battleship;
    }
    
    
    } else   
    {
    xStartCoordinate = Math.floor(Math.random() * 6);
    yStartCoordinate = Math.floor(Math.random() * 9);
    
      var newArray = rows[yStartCoordinate].slice();
    
      if (xStartCoordinate === 0) {
      newArray.splice(xStartCoordinate, 4, Ships.Battleship, Ships.Battleship, Ships.Battleship, Ships.Battleship);
    
      } else if (xStartCoordinate >= 5) {
        newArray.splice(xStartCoordinate, 4, Ships.Battleship, Ships.Battleship, Ships.Battleship, Ships.Battleship);
    
    
      } else 
      {
        newArray.splice(xStartCoordinate - 1, 4, Ships.Battleship, Ships.Battleship, Ships.Battleship, Ships.Battleship);
      }
    
      rows[yStartCoordinate] = newArray;
    }

    return rows;
}


export function GenerateCruisers(totalRuns, rows) 
{
let error = false;
let isVertical = Math.random() > 0.5;
let xStartCoordinate;
let yStartCoordinate
isVertical = false;
if (isVertical) {
  xStartCoordinate = Math.floor(Math.random() * 9);
  yStartCoordinate = Math.floor(Math.random() * 7);
  
  error = ValidateVerticalCruisers(xStartCoordinate, yStartCoordinate, rows)

  if (error) {
    totalRuns++;
    GenerateCruisers();
  } else {
  }

} else {
  xStartCoordinate = Math.floor(Math.random() * 7);
  yStartCoordinate = Math.floor(Math.random() * 9);
  
  let error = ValidateHorizontalCruisers(xStartCoordinate, yStartCoordinate, rows)

  if (error) {totalRuns++; GenerateCruisers();}
  else {rows[yStartCoordinate].splice(xStartCoordinate, 3, Ships.Cruiser, Ships.Cruiser, Ships.Cruiser)}
}

return rows;
}