import React from 'react'
import {Button, Container, Grid, Icon, Dimmer, Segment, Header} from 'semantic-ui-react'
import styles from './index.css'
const Login = () =>{
  return(
      <Grid textAlign="center"  verticalAlign="middle" className='login' padded >
        <Grid.Column style={{maxWidth: 650}}>
          <Segment style={{}} >
            <Header as='h3' textAlign='center' icon color='teal'>
              <Icon name='user outline'>
              </Icon>
              Login
            </Header>
            </Segment>
          </Grid.Column>

      </Grid> 
  )
}
export default Login 
