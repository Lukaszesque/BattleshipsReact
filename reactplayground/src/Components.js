import { Ships, GenerateShips} from './ShipGenerators.js';

export function EmptyTile()
{
  console.log("Empty");
  return <button className='btn btn-outline-secondary m-1' ></button>
}

export function BattleshipTile()
{
  return <button className='btn btn-outline-secondary m-1 battleship' ></button>
}

export function CruiserTile()
{
  return <button className='btn btn-outline-secondary m-1 cruiser' ></button>
}

export function Game() 
{ 
  const buttons = [];
  let rows;
  rows = GenerateShips();

  for (var column = 0; column < 9; column++) 
  {
    for (var row = 0; row <9; row++) 
    {
      if(rows[column][row] === Ships.Battleship) 
      {
        buttons.push(<BattleshipTile></BattleshipTile>)
      }
      else if (rows[column][row] === Ships.Cruiser)
      {
        buttons.push(<CruiserTile></CruiserTile>)
      }
      else
      {
        buttons.push(<EmptyTile></EmptyTile>)
      }
    }
    buttons.push(<br></br>);
  }

  return buttons;
}