import React from 'react';
import './App.css';
import Cards from './Cards';

function App() {
  const alertOnClick = (message) => {
    alert(message);
  };

  const players = [
    {
      photo: 'https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Ftherealchamps.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1436713160.jpeg',
      name: 'Mbappé',
      age: 22,
      country: 'France',
    },
    {
      photo: 'https://assets-fr.imgfoot.com/cristiano-ronaldo-al-nassr.jpg',
      name: 'Ronaldo',
      age: 38,
      country: 'Portugal',
    },
    {
      photo: 'https://www.mykhel.com/thumb/250x90x250/football/players/4/19054.jpg',
      name: 'Messi',
      age: 34,
      country: 'Argentine',
    },
    {
      photo: 'https://icdn.football-espana.net/wp-content/uploads/2022/06/Zinedine-Zidane2.jpeg',
      name: 'Zidane',
      age: 51,
      country: 'France',
    },
    {
      photo: 'https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1425x199:1427x197)/origin-imgresizer.eurosport.com/2023/05/07/3698723-75264388-2560-1440.jpg',
      name: 'Benzima',
      age: 35,
      country: 'France',
    },
    {
      photo: 'https://upload.wikimedia.org/wikipedia/commons/6/65/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Neymar_850_1705.jpg',
      name: 'Neymar',
      age: 31,
      country: 'Brazil',
    },
  ];

  return (
    <div className='App'>
      <h1>This player's cards</h1>
      <Cards players={players} alertOnClick={alertOnClick} />
    </div>
  );
}

export default App;
