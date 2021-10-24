import React, { Component } from 'react';
import { useTranslation } from "react-i18next";
import "../../translations/i18n"
import Slider from '../Slider/Slider.component';
import ServicesCardList from '../ServiceCardList/ServiceCardList';
import data from '../../dist/data/serviceDetails.json'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      services: data.filter(function (item) {
        return item.IsPublicPageService == 'true'
      })
    };
  }

  // componentDidMount() {
  //   fetch('../../dist/data/serviceDetails.json', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     }
  //   }).then(function (response) {
  //     console.log(response)
  //     return response.json();
  //   }).then(
  //     (result) => {
  //       console.log(result);
  //       this.setState({
  //         isLoaded: true,
  //         services: result.ServicePath.filter(function (item) {
  //           return item.IsPublicPageService == 'true'
  //         })
  //       });
  //     },
  //     (error) => {
  //       console.error(error);
  //       this.setState({
  //         isLoaded: true,
  //         error
  //       });
  //     }
  //   )
  // }

  render() {
    const { error, isLoaded, services } = this.state;
    return (
      <div class="page-content">
        <Slider></Slider>
        <ServicesCardList services={services}></ServicesCardList>
      </div>
    )
  }
}

export default Home;
