import './ZombieFighter.css';

const ZombieFighter = ({fighter, handleAddFighter, handleMoney, handleAddMoney, handleRemoveFighter, isTeam}) => {
    function handleTeam () {
        if (isTeam) {
            handleRemoveFighter(fighter);
            handleAddMoney(fighter.price);
        } else {
            handleAddFighter(fighter);
            handleMoney(fighter.price);
        }   
    }

    return (
        <>
        <section class="selectedClass">
            <img src={fighter.img} />
            <h4>{fighter.name}</h4>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={ handleTeam }>{isTeam?"Remove":"Add"}</button>
        </section>
        </>
    );
};

export default ZombieFighter