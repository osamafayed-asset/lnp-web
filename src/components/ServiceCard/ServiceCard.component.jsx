import React from "react";

const ServiceCard = (props) => {
    return (
        <div class="card LP-main-cards bordered">
            <div class="card-body">
                <div class="card-serface">
                    <div class="LPmainitem">
                        <span className={`LPicon icon-addcomp ${props.service.IconCSSClass}`}></span>
                        <span>{props.service.ServiceName_ar}</span>
                    </div>
                </div>
                <div class="lp-card-details">
                    <span class="overlay-details" >{props.service.ServiceDesc_ar}</span>
                    <a>
                        <span class="icon-arrow-left"></span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard;