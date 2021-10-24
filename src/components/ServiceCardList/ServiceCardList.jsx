import React from "react";
import ServiceCard from '../ServiceCard/ServiceCard.component'
import { useTranslation } from "react-i18next";

const ServicesCardList = (props) => {
    const { t } = useTranslation();
    const middleIndex = Math.ceil(props.services.length / 2);
    const firstHalf = props.services.splice(0, middleIndex);
    const secondHalf = props.services.splice(-middleIndex);
    return (
        <div class='container'>
            <div class="services-title mt-4 mb-4">
                <div class="bordered-title">
                    <span class="heading-2 title-gold">{t('ourServices')}</span>
                </div>
            </div>
            <div class='card-group aos-init aos-animate'>
                {
                    firstHalf.map(service => (
                        <ServiceCard key={service['RequestCode']} service={service}></ServiceCard>
                    ))
                }
            </div>
            <div class='card-group aos-init aos-animate'>
                {
                    secondHalf.map(service => (
                        <ServiceCard key={service['RequestCode']} service={service}></ServiceCard>
                    ))
                }
            </div>
        </div>
    )
}

export default ServicesCardList;