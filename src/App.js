import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyButton from './components/first';
import Button from './components/Button';
import Card from './components/Card';
import Profile from './components/Profile';
import Second from './components/Second';
// In the App.js create an instance of the Button component.


const CustomHeading = () => {
  return ( 
  <>
  <h2>Learning React is a fun</h2>
  <a href="https://react.dev/learn">
  <button > Learn React</button>
  </a>
  </>
  );


};

function App() {
  return (
    <div>
    <div className="App">
      <h1>Hello World !!!</h1>
      <MyButton/>
    </div>
    <div> 
      <Card>
      <Button> Learn React</Button>
      <Button> Learn ReactNative</Button>
      </Card>
      <Card>
        <p> loremipsum

        </p>
      </Card>
      <Card>
        <Profile/>
      </Card>
    </div>
    <div>
    <Second>
    <CustomHeading/>

    </Second>

    </div>
    

    </div>
  );
}

export default App;
