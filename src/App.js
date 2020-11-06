import React from 'react';
import logo from './logo.svg';
import {Affix, Button, Row, Col, Typography} from 'antd'
import * as Icons from 'grommet-icons'
import './App.css';
import 'antd/dist/antd.css'


const {Title} = Typography;
const styles = {
    headerContainer: {
      height: 80,
      top: 0,
      left: 0, 
      position: 'fixed',
      width: '100%',
    

    },
    mainContainer:{
      paddingTop: 80,
      height: '100vh',
      background: '#fec7d7'
    }
}

const Header = () =>(
  <div style={styles.headerContainer} >
    <Row style={{height: '100%'}}>
      <Col flex md={6} sm={24} className='header-logo-container' style={{backgroundColor: 'yellow', display: 'flex', alignItems: 'center', paddingLeft: 5}}>
        <Title level='1' type='success'>
          Mylogo
        </Title>
      </Col>
      <Col md={12} style={{backgroundColor: 'green'}}>
      </Col>
<Col md={6} style={{backgroundColor: 'blue'}}>
      </Col>
    </Row>
  </div>
)
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
