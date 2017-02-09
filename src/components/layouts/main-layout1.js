import { default as React,  Component } from "react";
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';

import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

import Drawer from 'material-ui/Drawer';

const style = {
  margin: 5,
};


export default class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {openL: false, openR: false};
  }

  handleToggleL = () => this.setState({openL: !this.state.openL});
  handleToggleR = () => this.setState({openR: !this.state.openR});

  render() {
      return (
        <MuiThemeProvider>
        <div   className = 'fullWidth'>
            <div className='titleApp'>
            <AppBar
             title="Title App"
             iconClassNameRight="muidocs-icon-navigation-expand-more"
              onTitleTouchTap={this.handleToggleL}
              onLeftIconButtonTouchTap={this.handleToggleL}
              onRightIconButtonTouchTap={this.handleToggleR}
            />
            </div>
            <div className = 'flex-container'>
            <div className='nav'>
                <Drawer open={this.state.openL}
                   width={300} >
                  <Paper style={style} zDepth={3}>
                  <MenuItem primaryText="Home" containerElement={<Link to="/" />}/>
                  <MenuItem primaryText="Styled Map" containerElement={<Link to="/maps2" />}/>
                  <MenuItem primaryText="МО Ярославской области Redux" containerElement={<Link to="/maps_modb" />}/>
                  <MenuItem primaryText="MongoDB counter" containerElement={<Link to="/counter" />}/>
                  </Paper>
               </Drawer>
               <Drawer open={this.state.openR}
                  width={300}
                  openSecondary = {true} >
                 <Paper style={style} zDepth={3}>
                 <MenuItem primaryText="Home" containerElement={<Link to="/" />}/>
                 <MenuItem primaryText="Styled Map" containerElement={<Link to="/maps2" />}/>
                 <MenuItem primaryText="МО Ярославской области Redux" containerElement={<Link to="/maps_modb" />}/>
                 <MenuItem primaryText="MongoDB counter" containerElement={<Link to="/counter" />}/>
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
/*
<Paper style={style} zDepth={3}>
<Menu>
  <MenuItem primaryText="Home" containerElement={<Link to="/" />}/>
  <MenuItem primaryText="Styled Map" containerElement={<Link to="/maps2" />}/>
  <MenuItem primaryText="МО Ярославской области Redux" containerElement={<Link to="/maps_modb" />}/>
  <MenuItem primaryText="MongoDB counter" containerElement={<Link to="/counter" />}/>
</Menu>
</Paper>
*/
