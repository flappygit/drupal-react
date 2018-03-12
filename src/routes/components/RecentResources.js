import React, { Component } from 'react';

import * as Utilities from '../api';
import { Link } from "react-router-dom";
import axios from 'axios';

class RecentResources extends Component {
  constructor() {
     super();
     this.state = {
        data: []
     }
   }

   // calling the componentDidMount() method after a component is rendered for the first time
  componentDidMount() {
    let th = this;
    this.serverRequest = axios.get(Utilities.getFromView('recent-resources'))
    .then(function(results) {
       th.setState({
         data: results.data
       });
     })
   }

  render() {
    let itemData = []
    this.state.data.map((item, index) => {
      itemData.push(<div key={index} className="block-cta__item bg--dark-blue--overlay" style={{backgroundImage: "url(" + item.field_resource_image[0].url + ")"}}>
          <div className="block-cta__content">
          <h3 className="block-cta__title">{item.title[0].value}</h3>
          <Link to={"resources/" + item.nid[0].value} className="btn">{item.field_text_link[0].value}</Link>
        </div>
       </div>);
       return itemData;
    })

    return (
      <div className="block-cta">
        <div className="container">
          <h2 className="block-cta__heading">Resources</h2>
          <div className="block-cta__grid">
            {itemData}
          </div>
        </div>
      </div>
    );
  }
}

export default RecentResources;
