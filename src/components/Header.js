import React from "react";
import Button from "./Button";

function Header() {
  return (
    <div className="headerBg">
      <div className="headerWrapper">
        <div className="row">


          <div className="col-8 d-flex justify-content-space-between align-items-center">
            <div className="col-2">
              <a className="text-decoration-none" href="#">
                <span>Home</span>
              </a>
            </div>
            <div className="col-2">
              <a className="text-decoration-none text-black" href="#">
                News
              </a>
            </div>
            <div className="col-2">
              <a className="text-decoration-none text-black" href="#">
                Hot
              </a>
            </div>
            <div className="col-2">
              <a className="text-decoration-none text-black" href="#">
                About
              </a>
            </div>
          </div>

          <div className="col-4 d-flex justify-content-end">
            <Button />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;