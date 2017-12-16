import React, {Component} from 'react';
import DevCarousel from './carousel';

class AboutDevs extends Component {
    render() {
        return(
          <section className="s-dark p-5">
              <div className="container pb-4">
                  <h1 className="display-4 pb-2">About LIT devs</h1>
                  <DevCarousel/>
              </div>
          </section>
        );
    }
}

export default AboutDevs;