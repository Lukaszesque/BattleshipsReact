import {Ships} from './ShipGenerators'

export function ValidateVerticalCruisers(xStartCoordinate, yStartCoordinate, rows) {
    let error = false;
    console.log(rows);
  
    for (var i = 0; i < 3; i++) 
    {
      if (xStartCoordinate > 0) 
      {
        if (rows[yStartCoordinate + i][xStartCoordinate - 1] === Ships.Battleship || rows[yStartCoordinate + i][xStartCoordinate - 1] === Ships.Cruiser) 
        {
          error = true;
          break;
        }
      }
  
      if (xStartCoordinate < 7) 
      {
        if (rows[yStartCoordinate + i][xStartCoordinate + 1] === Ships.Battleship || rows[yStartCoordinate + i][xStartCoordinate + 1] === Ships.Cruiser) 
        {
          error = true;
          break;
        }
      }
      if (rows[yStartCoordinate + i][xStartCoordinate] === Ships.Battleship) 
      {
        error = true;
      } 
    }

    if (!error) 
    {
        for (var i = 0; i < 3; i++) 
        {
          rows[yStartCoordinate + i][xStartCoordinate] = Ships.Cruiser;
        }
    }

    return error;
  }
  
export function ValidateHorizontalCruisers(xStartCoordinate, yStartCoordinate, rows) {
    let error = false;
    //let newArray = rows[yStartCoordinate].slice();
    for (var i = 0; i <3; i++) 
    {
      let validatedSector = rows[xStartCoordinate + i];
      if (validatedSector.includes(Ships.Battleship) || validatedSector.includes(Ships.Cruiser)) 
      {
        error = true;
      }
  
        if (yStartCoordinate > 0) {
        let arrayAbove = rows[yStartCoordinate -1].slice();
  
        if (arrayAbove[xStartCoordinate + i] === Ships.Battleship || arrayAbove[xStartCoordinate + i] === Ships.Cruiser ) 
          {
            error = true;
          }
        }
  
        if (yStartCoordinate < 8) {
        let arrayBelow = rows[yStartCoordinate +1].slice();
  
        if (arrayBelow[xStartCoordinate + i] === Ships.Battleship || arrayBelow[xStartCoordinate + i] === Ships.Cruiser ) 
          {
            error = true;
          }
        }
    }
    if (xStartCoordinate > 0 && (rows[xStartCoordinate - 1] == Ships.Battleship || rows[xStartCoordinate - 1] == Ships.Cruiser  ))
    {
      error = true;
    }
  
    if (xStartCoordinate < 7 && (rows[xStartCoordinate + 3] == Ships.Battleship || rows[xStartCoordinate + 3] == Ships.Cruiser  ))
    {
      error = true;
    }
  
    return error;
  
  }