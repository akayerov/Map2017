import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const Home = React.createClass({
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className='home-page'>
          <h1>The app is now using Redux</h1>
          <p>
          While the <a href='#'>CSS-Tricks article</a> for
          this guide covers an explanation of <strong>Redux</strong>, there
          are still many implementation details in this code that the article
          doesn't cover. For a better understanding of those details, see
          the <a href='https://github.com/bradwestfall/CSS-Tricks-React-Series'>Github documentation</a> for
          this guide.
        </p>
        </div>
      </MuiThemeProvider>
    );
  }
});

export default Home;
