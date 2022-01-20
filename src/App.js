import { Grid } from '@mui/material';
import './App.css';
import CardComponent from './components/card.js';





function App() {

const players = [{
  name: "Neymar",
  age : 29,
  club : 'PSG',
  country: 'Brazil',
  net_Worth: 'EST 200M',
  sport : 'soccer',
  Image:"https://idsb.tmgrup.com.tr/ly/uploads/images/2020/09/12/57778.jpg"

},
{
  name: "lebron",
  age : 37,
  club : 'LA lakers',
  country: 'USA',
  net_Worth: 'EST 500M',
  sport : 'Basketball',
  Image:"https://www.golfdigest.com/content/dam/images/golfdigest/fullset/2021/4/LebronJames_April2021.jpg" 

},
{
  name: "Ronaldo",
  age : 36,
  club : 'MU',
  country: 'Portugal',
  net_Worth: 'EST 500M',
  sport : 'soccer',
  Image:"https://www.thesun.co.uk/wp-content/uploads/2022/01/38ae31f3-6511-4528-aa5a-51b8fc6af28e.jpg"

},
{
  name: "Messi",
  age : 35,
  club : 'PSG',
  country: 'Argentina',
  net_Worth: 'EST 600M',
  sport : 'soccer',
  Image:"https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg"
},

{
  name: "L.Hamilton",
  age : 37,
  club : 'NA',
  country: 'England',
  net_Worth: 'EST 300M',
  sport : 'Formula One',
  Image:"https://cdn-8.motorsport.com/images/mgl/6xEDbp10/s8/lewis-hamilton-mercedes-1.jpg"
}
];
  return (
    <div className="App">
      <h1>Players</h1>
      <br/>
      <Grid container spacing={4}>
      {players.map(player => {
        return(
          <Grid item xs={4}>
          <CardComponent name={player.name} age={player.age} 
          club={player.club} country={player.country} 
          sport={player.sport} Image={player.Image} net_Worth={player.net_Worth}
          />
          </Grid>
        )
      })}
      </Grid>
    </div>
  );
}

export default App;
