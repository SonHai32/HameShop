import React from 'react';
import './App.css';
import 'antd/dist/antd.css'

import Header from './Components/Header/Header'


const styles = {
    
    mainContainer:{
      paddingTop: 80,
      height: '100vh',
      background: '#fec7d7'
    }
}




const MainContainer = () =>(
  <div style={styles.mainContainer}>

  </div>
)

function App() {
  return (
    <React.Fragment>
      <Header />
      <MainContainer />
    </React.Fragment>
  );
}

export default App;
