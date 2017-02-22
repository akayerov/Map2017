import { default as React,  Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { toogleLeftSlider,  toogleRightSlider, toogleTheme } from '../../actions/slider-actions';

import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import NavigationRight from 'material-ui/svg-icons/content/filter-list';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from '../../themes//myLightBaseTheme';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Toggle from 'material-ui/Toggle';

const style = {
  margin: 5
};


class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseTheme : getMuiTheme(lightBaseTheme)
//      toggledTheme: true
    };
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

  handleToogleTheme = () => {
    let themeNew = null;

    if (this.props.toggledTheme === true) {
      themeNew = getMuiTheme(darkBaseTheme);
    }    else {
      themeNew = getMuiTheme(lightBaseTheme);
    }
    this.setState({ baseTheme : themeNew });
    this.props.toogleTheme();
  }


  render() {
    let proc_brightness = 100;

    if (this.props.openL == true || this.props.openR == true)       {
      proc_brightness = 50;
    }
    const styles = {
      filter: `brightness(${proc_brightness}%)`
    };

    return (
      <MuiThemeProvider muiTheme={this.state.baseTheme}>
        <div   className = 'fullWidth'>
          <div className ='titleApp'  style={styles}>
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
                <div className = 'headSlider' onClick =  {this.handleToggleL} style={{  'backgroundColor':this.state.baseTheme.palette.primary1Color }} />
                <MenuItem onTouchTap={this.handleToggleL} primaryText='Home' containerElement={<Link to='/' />}/>
                <MenuItem onTouchTap={this.handleToggleL} primaryText='МО ЯО (Mongo id=2)' containerElement={<Link to='/map/2' />}/>
                <MenuItem onTouchTap={this.handleToggleL} primaryText='Показатели МО (Mongo id=3)' containerElement={<Link to='/map/3' />}/>
                <MenuItem onTouchTap={this.handleToggleL} primaryText='Запись 2016 (Mongo id=4)' containerElement={<Link to='/map/4' />}/>
              </Drawer>
              <Drawer open={this.props.openR}
                openSecondary
              >
                <div className = 'headSlider' onClick =  {this.handleToggleR} style={{  'backgroundColor':this.state.baseTheme.palette.primary1Color }}/>
                <Paper style={style} zDepth={3}>
                  <Toggle
                    label='Цвета' labelPosition = 'right' onToggle = {this.handleToogleTheme}
                    defaultToggled={this.props.toggledTheme}
                  />
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
    openR: store.sliderState.openR,
    toggledTheme: store.sliderState.toggledTheme
  };
};

const layoutDispatchToActions = {
  toogleLeft : toogleLeftSlider, // мы связываем getMOSuccess и диспатчер,
  toogleRight: toogleRightSlider,
  toogleTheme
};

export default connect(
  layoutStateToProps,
  layoutDispatchToActions // для этого передаем объект в коннект вторым аргументом
)(MainLayout);

// export default MainLayout;
