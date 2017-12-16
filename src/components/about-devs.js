import React, {Component} from 'react';
import DevCarousel from './carousel';

class AboutDevs extends Component {
    render() {
        return(
          <section className="s-dark p-5">
              <div className="container pb-4">
                  <DevCarousel/>
              </div>
          </section>
        );
    }
}

export default AboutDevs;