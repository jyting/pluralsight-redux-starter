import React from 'react';

// Stateless function not used because hot reloading has a limitation where at least a parent must be a class
class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This application uses React, Redux, React Router, and a variety of other helpful libraries.</p>
      </div>
    );
  }
}

export default AboutPage;
