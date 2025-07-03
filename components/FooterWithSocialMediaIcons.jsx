'use client';

import { Footer } from 'flowbite-react';
import { BsLinkedin, BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs';
import logo from "../assets/logoFinal.png"

export default function FooterWithSocialMediaIcons() {
    return (
        <Footer container>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <img
                            alt="Devinci Codes"
                            src={logo}
                            width={"250px"}
                        />
                        <p className='ml-2 mb-4'>Your vision, our code</p>
                        {/* <p className='ml-2'> <FontAwesomeIcon icon={faPhone} className='mr-2' /> 0323-0018893</p> */}
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="Links" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="https://devinci.codes">
                                    Home
                                </Footer.Link>
                                <Footer.Link href="#about">
                                    About
                                </Footer.Link>
                                <Footer.Link href="#skills">
                                    Services
                                </Footer.Link>
                                <Footer.Link href="#portfolio">
                                    Portfolio
                                </Footer.Link>
                                <Footer.Link href="#vision">
                                    Our Vision
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="https://www.instagram.com/devincicodes">
                                    Instagram
                                </Footer.Link>
                                <Footer.Link href="https://www.linkedin.com/company/devincicodes">
                                    Linkedin
                                </Footer.Link>
                                <Footer.Link href="https://www.fiverr.com/devinci_codes">
                                    Fiverr
                                </Footer.Link>
                                <Footer.Link href="https://www.upwork.com/freelancers/~01e772708606ade468">
                                    Upwork
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        by="DeVinci Codes™"
                        href="https://devinci.codes"
                        year={2023}
                    />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon
                            href="https://www.instagram.com/devincicodes"
                            icon={BsInstagram}
                        />


                        <Footer.Icon
                            href="https://www.linkedin.com/company/devincicodes"
                            icon={BsLinkedin}
                        />
                        <Footer.Icon
                            href="https://www.facebook.com/profile.php?id=61552020426746"
                            icon={BsFacebook}

                        /> <Footer.Icon
                            href="https://twitter.com/devincicodes"
                            icon={BsTwitter}

                        />
                    </div>
                </div>
            </div>
        </Footer>
    )
}