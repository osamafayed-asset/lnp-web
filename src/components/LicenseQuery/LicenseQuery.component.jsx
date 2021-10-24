import React from "react";
import SearchImage from "../../dist/images/search-img.png"

const LicenseQuery = () => {
    return (
        <div style={{ 'padding-top': '40px' }} class="container">
            <div>
                <div class="title title-gold title-bold pl-5 pr-5">
                    <span class="icon-"></span>
                    <h1 trn-key="inquiryTitle" class="inquiry-title">الإستعلام عن الرخص</h1>
                </div>
                <hr></hr>
            </div>
            <div class="row p-5 aos-init aos-animate" data-aos="fade-up">
                <div class="login-container col-md-8 col-sm-12">
                    <div class="card no-border aos-init aos-animate" data-aos="flip-left">
                        <div class="login-form-details p-3" >
                            <div class="row p-2">
                                <input type="text" class="form-control form-input inquiry-input col-md-8 ml-1 mr-2  mb-4" data-bind="value: licenseNumber,attr : {'placeholder' : translator.get('licenseNumberHere')}" placeholder="أدخل رقم الرخصة هنا" />
                                <input type="text" class="form-control form-input inquiry-input col-md  mb-4" data-bind="value: requestNumber , attr : {'placeholder' : translator.get('requestNumberHere')}" placeholder="أدخل رقم الطلب هنا" />
                            </div>
                            <div class="row justify-content-between no-gutters">
                                <div class="col-auto">
                                    <a href="javascript:;">
                                    </a>
                                </div>
                            </div>
                            <div class="row mb-3 mt-3">
                                <div class="col-md-12">
                                    <button trn-key="search" id="search-result" class="button button-third inquiry-button" data-bind="click: showResults">بحث</button>
                                    <span class="icon-Search1"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card col-md-4 pt-1 no-border aos-init aos-animate" data-aos="flip-left">
                    <div class="inquiry-container">
                        <div class="gears aos-init aos-animate" id="two-gears" data-aos="flip-left">
                            <div class="gears-container">
                                <div class="gear-rotate"></div>
                                <div class="gear-rotate-left"></div>
                            </div>

                        </div>
                        <img src={SearchImage} />
                    </div>
                </div>
            </div>
            <section id="results" class="p-4 search-result aos-init aos-animate" data-aos="fade-up">
                <hr />
                <div class="title title-gold title-bold pl-5 pr-5">
                    <span class="icon-"></span>
                    <h2 trn-key="searchresult">نتائج البحث</h2>
                </div>
                <div class="card-form border-0">
                    <div class="table-container aos-init aos-animate" data-aos="fade-up">
                        <div class="spinner" data-bind="visible: isLoading"></div><div class="text-center title-light pt-5 " data-bind="visible: showNoResult">
                            <span class="icon-no-files m-2 title-mid heading-big"></span>
                            <div class="heading-1 title-bold title-mid">
                                <p trn-key="noLicenses">لا يوجد رخص مطابقة</p>
                            </div>
                        </div>
                        <table class="main-table">

                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LicenseQuery;