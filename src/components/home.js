import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const Home = React.createClass({
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className='home-page'>
          <h1>Медицина на карте</h1>
          <h3>
             Новый взгляд на получение информации. Наглядно и понятно.
         </h3>
          <h5>
             Прототип приложения v0.0.1
         </h5>
          <p>
            Нажмите на заголовок для продолжения
          </p>

        </div>
      </MuiThemeProvider>
    );
  }
});

export default Home;
