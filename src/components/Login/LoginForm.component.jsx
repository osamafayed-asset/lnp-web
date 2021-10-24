import React from "react";

import UAEpassLoginBanner from "../../dist/images/UAE-Pass_Banner_ar.jpg"
import UAEPassLoginBtn from "../../dist/images/UAEPass_Login_ar.png"
import EmpLogin from "../../dist/images/emp-login.png"

const Login = () => {
    return (
        <div id="login-page" class="container">
            <div class="row">
                <div class="card border-0 col-sm-12 col-md-6 aos-init aos-animate" data-aos="fade-up">
                    <div class="slide-container">
                        <img data-bind="click: function(){ window.open('https://selfcare.uaepass.ae/','_blank')} ,attr: {src:'dist/images/UAE-Pass_Banner_'+language+'.jpg'}" src={UAEpassLoginBanner} />
                    </div>
                </div>
                <div class="card border-0 col-sm-12 col-md-6 aos-init aos-animate" data-aos="fade-up">
                    <div class="login-btn-cont row" >
                        <div>
                            <img data-bind="click: redirectToUaePass , attr: {src: 'dist/images/UAEPass_Login_'+ language+'.png'}" src={UAEPassLoginBtn} />
                        </div>
                        <div trn-key="uaePassText">هوية رقمية موحدة ومعتمدة لجميع للمواطنين والمقيمين والزوار</div>
                        <div>
                            <img src={EmpLogin} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;