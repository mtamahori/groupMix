import React from 'react'
import {
  Button,
  Container,
  Menu,
  Icon,
  Segment,
  Header,
  Divider,
} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { logout } from '../store/user'
import '../styles/_logo.scss'

const Navbar = (props) => {
  const {
    handleClick, isLoggedIn, isHost,
  } = props

  return (

    <Segment
      inverted
      textAlign="center"
      style={{ padding: '0em', marginBottom: '-2em' }}
      vertical
    >
    <Header inverted as="h1" color="blue" floated="left" style={{ marginTop: '.7em', marginLeft: '50px'}}>
    <Icon name="music" size="large" color="blue" className="heartbeat" />
    groupMix
    </Header>
      <Container>
        <Menu inverted pointing secondary size="large" style={{ paddingTop: '1em'}}>
          {
          isLoggedIn
          ?
            <Menu.Item position="right" >
              {/* The navbar will show these links after you log in */}
              <Button inverted as={Link} to="/" name="home"  ><Icon name="home" />Home</Button>


              <Button inverted as={Link} to="/eventList" style={{ marginLeft: '0.5em' }}><Icon name="list layout" />Events</Button>

              <Button inverted as={Link} to="/newevent" style={{ marginLeft: '0.5em' }}><Icon name="users" />Host Event</Button>

              <Button inverted as={Link} onClick={handleClick} to="/login" style={{ marginLeft: '0.5em' }}><Icon name="user circle outline" />Log Out</Button>

            </Menu.Item>
          :
            <Menu.Item position="right">
              {/* The navbar will show these links before you log in */}
              <Button inverted as={Link} to="/" name="home"  ><Icon name="home" />Home</Button>
              <Button inverted as={Link} to="/login" style={{ marginLeft: '0.5em' }}>Log In</Button>
              <Button inverted as={Link} to="/signup" style={{ marginLeft: '0.5em' }}>Sign Up</Button>
            </Menu.Item>
            }
        </Menu>
      </Container>
      <Divider inverted />
    </Segment>
  )
}


const mapState = state => ({
  isLoggedIn: !!state.user.id,
  isHost: !!state.user.id && state.user.isHost,
})

const mapDispatch = dispatch => ({
  handleClick: () => {
    dispatch(logout())
    // browserHistory.push('/');
  },
});

export default connect(mapState, mapDispatch)(Navbar);
/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
}
