import React from 'react';
import Content from '../components/subwallets/content';
import { Redirect } from 'react-router';

class Wallets extends React.Component {
  constructor(props) {
    super(props);
    this.state = { auth: false };
  }

  render() {
    if (!ls.get('auth?')) {
      return <Redirect to="/" />;
    }
    return (
      <div className="app_pageBackground_1crd0">
        <div className="app_pageWrapper_2GcaG">
          <div className="container">
            <div className="row">
              <div className="col-sm-offset-2 col-xs-8">
                <Content />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Wallets;
