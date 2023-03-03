// import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from 'react'
import Display from './Display';
import {Container,Button,TextField} from '@mui/material';

const App = () => {

  const [endTime, setEndTime] = useState(new Date('march 22, 2023 12:00:00').getTime());
  const [currentTime, setCurrentTime] = useState(new Date().getTime());
  const [newEndTime, setNewEndTime] = useState('');

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setCurrentTime(new Date().getTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleNewEndTime = (e) => {
    e.preventDefault();
    const newTime = new Date(newEndTime).getTime();
    setEndTime(newTime);
    setNewEndTime('');
  }

  const gap = endTime - currentTime; 
  const seconds = 1000; // in milliseconds
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  let remainingDays = Math.floor(gap / days);
  let remainingHours = Math.floor( (gap % days) / hours);
  let remainingMinutes = Math.floor( (gap % hours) / minutes);
  let remainingSeconds = Math.floor( (gap % minutes) / seconds);

  // if (remainingDays < 0) remainingDays = 0;
  // if (remainingHours < 0) remainingHours = 0;
  // if (remainingMinutes < 0) remainingMinutes = 0;
  // if (remainingSeconds < 0) remainingSeconds = 0;

  return (
    <div>
      <Container>
        <center>
          <Display 
            days={remainingDays} 
            hours={remainingHours} 
            minutes={remainingMinutes}
            seconds={remainingSeconds} 
          />
          {/* incease you dont mention the localtime its display time date year days also */}
          <p>Current Time: {new Date().toLocaleTimeString()}</p>
          <form  onSubmit={handleNewEndTime}>
            
          <TextField id="outlined-basic"  variant="outlined"
              placeholder="Enter new end time (e.g. March 02, 2024 12:00:00)" 
              value={newEndTime} size='small'
              onChange={(event) => setNewEndTime(event.target.value)}
            />
              <Button  type='submit' size='large' variant="contained"  color='primary'style={{padding:'6px', textalign:'center'}}>Update end time</Button>
            {/* <button type="submit">Update end time</button> */}
          </form>
        </center>
      </Container>
    </div>
  )
}

export default App;



