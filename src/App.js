import './App.css';
import wally from './img/wally.jpg';
import wallyLogo from './img/wallyLogo.png';
import wizardLogo from './img/wizardE.png';
import burglarLogo from './img/burglarE.png';
import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';

function App() {
  const [charList, setCharList] = useState(true);
  const [charsLeft, setCharsLeft] = useState(3);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hours, setHours] = useState(0);
  const [charLogos, setCharLogos] = useState([
    {
      logo: wallyLogo,
      name: 'Wally',
    },
    {
      logo: wizardLogo,
      name: 'Wizard',
    },
    { logo: burglarLogo, name: 'Burglar' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sec < 59) {
        setSec(sec + 1);
      } else if (sec === 59) {
        if (min < 59) {
          setSec(0);
          setMin(min + 1);
        } else if (min === 59) {
          setSec(0);
          setMin(0);
          setHours(hours + 1);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  const toggleCharMenu = (event) => {
    return setCharList(!charList);
  };

  const closeCharMenu = (event) => {
    if (charList === false) {
      return setCharList(true);
    }
  };

  let listItems = charLogos.map((el) => (
    <li key={uniqid()}>
      <div>
        <img className="logos" src={el.logo} />
        {el.name}
      </div>
    </li>
  ));

  let charsNumber = (
    <div className="charsLeft" onClick={toggleCharMenu}>
      <div>{charsLeft}</div>
    </div>
  );
  let charsList = (
    <div className="charsList">
      <ul>{listItems}</ul>
    </div>
  );

  return (
    <div onClick={closeCharMenu}>
      <div className="header">
        <div id="findUs">
          <div style={{ color: 'white' }}>find</div>Us
        </div>
        <div id="time">
          <div>{hours < 10 ? '0' + hours : hours}</div>
          <div> : </div>
          <div>{min < 10 ? '0' + min : min}</div>
          <div> : </div>
          <div>{sec < 10 ? '0' + sec : sec}</div>
        </div>
        <div id="charList">{charList === true ? charsNumber : charsList}</div>
      </div>
      <div id="img">
        <img src={wally} />
      </div>
    </div>
  );
}

export default App;
