import React from "react";
import FooterImg1 from '../../dist/images/L1.png'
import FooterImg2 from '../../dist/images/L2.png'

const Footer = () => {
    return (
        <div>
            <div class="container">
                <hr class="border-gold" />
                <div class="footer-links">
                    <div class="row">
                        <div>
                            <ul class="footer-items">
                                <li class="footer-item">
                                    <a href="#" trn-key="contactUs">إتصل بنا</a>
                                </li>
                                <ul class="footer-contacts">
                                    <li>
                                        <div class="footer-contacts-title heading-7 color-gold" trn-key="AirOffice">مكتب المطار: </div>
                                        <div class="heading-8" trn-key="email">البريد الالكتروني: </div>
                                        <span class="heading-7">permits.a @mod.gov.ae </span>
                                        <div class="heading-8" trn-key="contact">ارقام التواصل: </div>
                                        <span class="heading-7">04-2285558 </span>
                                    </li>
                                    <li>
                                        <div class="footer-contacts-title heading-7" trn-key="DubOffice">مكتب دبي: </div>
                                        <div class="heading-8" trn-key="email">البريد الالكتروني: </div>
                                        <span class="heading-7">permits.g @mod.gov.ae</span>
                                        <div class="heading-8" trn-key="contact">ارقام التواصل: </div>
                                        <span class="heading-7">  04-3136136 </span>
                                    </li>
                                    <li>
                                        <div class="footer-contacts-title heading-7" trn-key="IndustOffice">مكتب مجمع توازن الصناعي: </div>
                                        <div class="heading-8" trn-key="email">البريد الالكتروني: </div>
                                        <span class="heading-7">permits.t @mod.ae </span>
                                        <div class="heading-8" trn-key="contact">ارقام التواصل: </div>
                                        <span class="heading-7">    4928434/5/2 -02  </span>
                                    </li>


                                </ul>
                            </ul>
                        </div>

                        <div class="col-md-2 footer-logo p-0">
                            <span class="footer-logo-item">
                                <a href="#" class="footer-logo-link">
                                    <img src={FooterImg1} />
                                </a>
                            </span>
                            <span class="footer-logo-item">
                                <a href="#" class="footer-logo-link">
                                    <img src={FooterImg2} />
                                </a>
                            </span>
                        </div>

                    </div>

                </div>
            </div>
            <div class="footer-copy-right">
                <span trn-key="copyrights">حقوق الطبع النشر © 2021 - وزارة الدفاع جميع الحقوق محفوظة</span>
            </div>
        </div>
    )
}

export default Footer;