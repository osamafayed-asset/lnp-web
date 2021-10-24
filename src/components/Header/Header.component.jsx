import React from 'react';
import logo from "../../dist/images/uae_logo_ar.jpg";
import faqicon from "../../dist/images/faq.svg";
import usericon from "../../dist/images/user.svg";
import HomeIcon from "../../dist/images/home.png";
import SearchIcon from "../../dist/images/Search.svg";
import '../../App.css'
import { Link } from 'react-router-dom';
import i18n from "i18next";
import { useTranslation } from "react-i18next";

import { Navbar, Nav, Container, NavItem, NavDropdown } from 'react-bootstrap';

const Header = () => {
    const { t } = useTranslation();
    document.body.dir = i18n.dir();
    return (
        <div>
            <header class="header ">
                <div class="header-contain container">
                    <div class="col-lg-4 col-md-4 header-logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div class="header-menu-bordered">
                        <ul>
                            <li>
                                <Link to="/faq">
                                    <img src={faqicon} alt="faqicon" />
                                </Link>
                            </li>
                            <li>
                                <a onClick={changeLanguage}> {t('language')} </a>
                            </li>
                            <li>
                                <Link to="/login">
                                    <img src={usericon} />
                                    <span class="login" trn-key="login">تسجيل الدخول</span>
                                </Link>
                            </li>
                        </ul>
                        {/* <ul>
                            <li class="mt-3">
                                <span class="title-bold heading-2 title-dark-gold">مديرية التراخيص وأمن الصناعات الدفاعية</span>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </header>
            <div class="header-golden">
                <div class="container">
                    <Navbar collapseOnSelect expand="lg" bg="header-golden" variant="dark">
                        <Container class="header-golden">
                            <Navbar.Brand href="/">
                                <img class="home-img" src={HomeIcon} />
                                <span>مديرية التراخيص وأمن الصناعات الدفاعية</span>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="/about">من نحن</Nav.Link>
                                    <NavDropdown title="الخدمات الإلكترونية" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="licensequery"> الإستعلام عن التراخيص</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="المستندات" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Nav>
                                    <Nav.Link href="/faq">الأسئلة الشائعة</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </div>
    )
}

const changeLanguage = (props) => {
    i18n.changeLanguage(i18n.language == "ar" ? "en" : "ar");
    document.body.dir = i18n.dir();
}

export default Header;