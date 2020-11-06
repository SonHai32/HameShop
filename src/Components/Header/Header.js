import React from 'react'

import {Typography, Row, Col, Drawer} from 'antd'
import { SearchOutlined, ShoppingCartOutlined, UserOutlined} from '@ant-design/icons'
import './index.css'

const styles = {
    headerContainer: {
      height: 80,
      top: 0,
      left: 0, 
      position: 'fixed',
      width: '100%',
      background: '#fff',
      boxShadow: '0px 1px 4px rgba(0,21,41,.08)'
    },
    headerLogoContainer:{
display: 'flex', alignItems: 'center', paddingLeft: 5,
    justifyContent: 'center',
   },
   navItem: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '2px 5px',
    position: 'relative',
    cursor: 'pointer',
    fontWeight: 400,
    margin: '0 5px',
    color: '#0e172c'
   },
   iconContainer: {
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center'
   },
   icon: {
       margin: '0 5px',
       fontSize: '26px',
       cursor: 'pointer',
       color: '#0e172c'
   }
}
const {Title} = Typography;
const NavMenu = () => (
<React.Fragment>

            <div className='nav-item nav-before-line' style={styles.navItem}>
                <span>
                    Thoi Trang
                </span>
            </div>
            <div className='nav-item nav-before-line' style={styles.navItem}>
                <span>
                    Thoi Trang
                </span>
            </div>
            <div className='nav-item nav-before-line' style={styles.navItem}>
                <span>
                    Thoi Trang
                </span>
            </div>

</React.Fragment>

);


const Header = () =>{

   const [userDrawer, setUserDrawer] = React.useState(false) 
   const [searchDrawer, setSearchDrawer] = React.useState(false) 
   const [cartDrawer, setCartDrawer] = React.useState(false) 

const IconController = () =>(
    <React.Fragment>
        <SearchOutlined style={styles.icon} onClick={() => setSearchDrawer(true)} />
        <UserOutlined style={styles.icon} onClick={() => setUserDrawer(true)} />
        <ShoppingCartOutlined style={styles.icon} onClick={() => setCartDrawer(true)} />
    </React.Fragment>
)

const UserDrawer = () =>(
    <Drawer key='userDrawer'visible={userDrawer} placement='right' onClose={() => setUserDrawer(false)}>
        <h1>
            User
        </h1>
    </Drawer>
)
const SearchDrawer = () =>(
    <Drawer key='searchDrawer'visible={searchDrawer} placement='right' onClose={() => setSearchDrawer(false)}>
        <h1>
            Search
        </h1>
    </Drawer>
)
const CartDrawer = () =>(
    <Drawer key='cartDrawer'visible={cartDrawer} placement='right' onClose={() => setCartDrawer(false)}>
        <h1>
            Cart
        </h1>
    </Drawer>
)
    return(
    <React.Fragment>

  <div style={styles.headerContainer} >
    <Row style={{height: '100%'}}>
      <Col flex md={6} sm={24} className='header-logo-container' style={styles.headerLogoContainer}>
        <Title level={1} type='success'>
            Logo
        </Title>
      </Col>
      <Col md={12} style={styles.headerLogoContainer}>
         <NavMenu /> 
      </Col>
<Col md={6} style={styles.iconContainer}>
    <IconController />
      </Col>
    </Row>
  </div>
  <UserDrawer />
  <CartDrawer />
  <SearchDrawer />

    </React.Fragment>
)}

export default Header