import { default as React,  Component } from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import NavigationRight from 'material-ui/svg-icons/content/filter-list';
import { connect } from 'react-redux';
import store from '../../store';
import { toogleLeftSlider,  toogleRightSlider } from '../../actions/slider-actions';


const style = {
  margin: 5
};


class MainLayout extends Component {
  constructor(props) {
    super(props);
  }
  handleToggleL = () => this.props.toogleLeft();
  handleToggleR = () => this.props.toogleRight();
  handleToggle = () => {
    if (this.props.openR)        {
      this.handleToggleR();
    }    else        {
      this.handleToggleL();
    }
  }
  render() {
    return (
      <MuiThemeProvider>
        <div   className = 'fullWidth'>
          <div className ='titleApp'>
            <AppBar
              title='Med Map'
              iconElementRight = {<IconButton><NavigationRight/></IconButton>}
              onTitleTouchTap = {this.handleToggle}
              onLeftIconButtonTouchTap = {this.handleToggleL}
              onRightIconButtonTouchTap = {this.handleToggleR}
            />
          </div>
          <div className = 'flex-container'>
            <div className='nav'>
              <Drawer open={this.props.openL}
                width={300}
              >
                <div className = 'headSlider' onClick =  {this.handleToggleL} />
                <MenuItem primaryText='Home' containerElement={<Link to='/' />}/>
                <MenuItem primaryText='Styled Map' containerElement={<Link to='/maps2' />}/>
                <MenuItem primaryText='МО ЯО Redux (JSON)' containerElement={<Link to='/maps_mojs' />}/>
                <MenuItem primaryText='МО ЯО Redux (Mongo)' containerElement={<Link to='/maps_modb' />}/>
                <MenuItem primaryText='MongoDB counter' containerElement={<Link to='/counter' />}/>
              </Drawer>
              <Drawer open={this.props.openR}
                width={300}
                openSecondary
              >
                <Paper style={style} zDepth={3}>
                  <MenuItem primaryText='Home' containerElement={<Link to='/' />}/>
                  <MenuItem primaryText='Styled Map' containerElement={<Link to='/maps2' />}/>
                  <MenuItem primaryText='МО Ярославской области Redux' containerElement={<Link to='/maps_modb' />}/>
                  <MenuItem primaryText='MongoDB counter' containerElement={<Link to='/counter' />}/>
                </Paper>
              </Drawer>
            </div>
            <div className='mainContext'>
              {this.props.children}
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const layoutStateToProps = function (store) {
  return {
    openL: store.sliderState.openL,
    openR: store.sliderState.openR
  };
};

const layoutDispatchToActions = {
  toogleLeft : toogleLeftSlider, // мы связываем getMOSuccess и диспатчер,
  toogleRight: toogleRightSlider
};

export default connect(
  layoutStateToProps,
  layoutDispatchToActions // для этого передаем объект в коннект вторым аргументом
)(MainLayout);

// export default MainLayout;
