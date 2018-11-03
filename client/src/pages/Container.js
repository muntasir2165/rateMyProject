import Navbar from "../components/Navbar"
import LoginPage from "./LoginPage"
import DashBoard from "./DashBoard"
import Features from "./Features"
import AboutUs from "./AboutUs"
import CreateUser from "./CreateUser"

import React, { Component } from "react";
//import { unwatchFile } from "fs";
class Container extends Component {
    state = {
        currentPage: "createUser"
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    renderPage = () => {
        if (this.state.currentPage === "DashBoard") {
            return <DashBoard />
        } else if (this.state.currentPage === "Features") {
            return <Features />
        } else if (this.state.currentPage === "LoginPage") {
            return <LoginPage />
        } else if (this.state.currentPage === "AboutUs") {
            return <AboutUs />
        }else if(this.state.currentPage==="CreateUser"){
            return <CreateUser />
        }
        else {

        }
    };

    render() {
        return (
            <div>
                <Navbar
                    currentPage={this.state.currentPage}
                    handlePageChange={this.handlePageChange}
                />
                {this.renderPage()}
            </div>
        );
    }
}

export default Container;