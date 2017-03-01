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
          <p>
             Новый взгляд на отображение информации. Наглядно и понятно.
         </p>
          <p>
            <strong>Медицинские организации ЯО</strong> отображены по сведениям  <a href='https://monitoring.egisz.rosminzdrav.ru'>федерального
            геопортала</a>
          </p>
          <p>
            <strong>Запись к врачу в электронной форме 2016</strong>  по сведениям представленной отчетности
          </p>
          <p>
            <strong>Показатели МО (Условно)</strong> показывает способ вывода различных показателей
          </p>
          <p>
            <strong>Дополнительные возможности</strong> показывают что еще можно выводить на карту
         </p>

        </div>
      </MuiThemeProvider>
    );
  }
});

export default Home;
