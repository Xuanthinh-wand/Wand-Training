import React, { Component } from "react";
import "../../css/footer.css";
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="top">
            <div className="logo">
              <img
                src="https://docs.google.com/uc?id=1LWe6eb50m67fwYtVbqAuUKckAmUdSi8w"
                alt="logo"
              />
            </div>
            <div className="infomation">
              <p>Phone : 0987666767</p>
              <p>Address : Số 5 Nguyễn Trãi - Quán Bàu - Vinh - Nghệ An</p>
            </div>
          </div>
          <div className="bottom">
            <p>CopyRight@2022 - Coder By Sonnt</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
