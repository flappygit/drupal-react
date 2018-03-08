import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import axios from 'axios';

class ResourcesList extends Component {
  constructor() {
     super();
     this.state = {
        data: []
     }
   }

   // calling the componentDidMount() method after a component is rendered for the first time
  componentDidMount() {
    var th = this;
    this.serverRequest = axios.get("http://dev-d8react.pantheonsite.io/api/resources")
    .then(function(results) {
       th.setState({
         data: results.data
       });
     })
   }

  render() {
    var itemData = []
    this.state.data.map((item, index) => {
      itemData.push(<div className="resources-view__item">
         <div className="resources-view__link-img">
            <a href={"resources/" + item.nid[0].value } style={{backgroundImage: "url(" + item.field_resource_image[0].url + ")"}}>
              <div className="read-more">Read More</div>
            </a>
          </div>
          <div className="resources-view__type">{item.field_type[0].value}</div>
          <div className="resources-view__title">{item.title[0].value}</div>
       </div>);

       return itemData;
    })

    return (
      <div className="resources-view ">
        <div className="container">
          <div className="resources-view__grid">
            {itemData}
          </div>
        </div>
      </div>
    );
  }
}

export default ResourcesList;
