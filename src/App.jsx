import './App.css';
import ZombieFighter from './components/ZombieFighter/ZombieFighter.jsx'
import {useState} from "react"
let strength = 0;
let agility = 0;

const App = () => {
  const [team, setTeam] = useState ([]);
  const [money, setMoney] = useState (100);
  const [zombieFighters, setZombieFighters] = useState (
  [
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://images.unsplash.com/photo-1608337327397-174304d51df5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN1cnZpdm9yJTIwb2YlMjBhJTIwem9tYmllJTIwYXR0YWNrfGVufDB8fDB8fHww',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://images.unsplash.com/photo-1641719955747-69f9b22969fe?q=80&w=405&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://images.unsplash.com/photo-1609331817980-0ee8b603f8a5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://images.unsplash.com/photo-1591121768868-f537609281ba?q=80&w=962&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://images.unsplash.com/photo-1737216756611-54f57da1d94b?q=80&w=937&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://images.unsplash.com/photo-1601061122640-75971c51392b?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://images.unsplash.com/photo-1749411370080-519336abceab?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://images.unsplash.com/photo-1705105238704-a62b18e1b985?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://images.unsplash.com/photo-1686587847397-ab5882b8d34f?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ])
  console.log(team, money);

function handleAddFighter (fighter) {
  setTeam ([...team, fighter]);
  const updatedZombieFighters = zombieFighters.filter(f=>
    f.id !== fighter.id
  )
  setZombieFighters (updatedZombieFighters)
  strength+=fighter.strength;
  agility+=fighter.agility;
}
function handleMoney (price) {
  setMoney (money-price);
}

function handleAddMoney (price) {
  setMoney (money+price)
}

function handleRemoveFighter (fighter) {
  const updatedTeam = team.filter(f=>
    f.id !== fighter.id
  )
  setTeam (updatedTeam)
  setZombieFighters ([fighter, ...zombieFighters])
  strength-=fighter.strength;
  agility-=fighter.agility;
}

  return (
    <>
    <section className="firstSection">
    <h1>Zombie Fighters</h1>
    <h2>Money: {money}</h2>
    <h2>Team Strength: {strength}</h2>
    <h2>Team Agility: {agility}</h2>
    <h2>Team</h2>
    <ul>{team.length?team.map((fighter) => (
            <li key={fighter.id}><ZombieFighter
            fighter={fighter}
            handleAddFighter={handleAddFighter}
            handleMoney={handleMoney}
            handleAddMoney={handleAddMoney}
            handleRemoveFighter={handleRemoveFighter}
            isTeam = {true}
            /></li>
    )):<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pick some team members!</p>}
    </ul>
    <h2>Fighters</h2>
    </section>
    <section>
      <ul>
        
          {zombieFighters.map((fighter) => (
            <li key={fighter.id}><ZombieFighter
            fighter={fighter}
            handleAddFighter={handleAddFighter}
            handleMoney={handleMoney}
            handleAddMoney={handleAddMoney}
            handleRemoveFighter={handleRemoveFighter}
            isTeam = {false}
            /></li>
      ))}
      </ul>
    </section>
    </>
  );
}

export default App