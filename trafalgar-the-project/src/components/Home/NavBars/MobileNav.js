import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import logoImage from "../../../images/logo.svg";
import Image from "react-bootstrap/Image";
import classes from "./MobileNav.module.css";
import Nav from "react-bootstrap/Nav";
import { HiOutlineMenu } from "react-icons/hi";
import { navData } from "../navbarData";

const MobileNav = ({ ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const menu = <HiOutlineMenu className={`${"text-dark "}`} />;

  return (
    <div className={`${classes["mobile-nav"]} ${"w-100 justify-content-end"}`}>
      <Button
        onClick={handleShow}
        className={`${"bg-white d-flex justify-content-center align-items-center"} ${
          classes["mobile-icon"]
        }`}
      >
        {menu}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Image src={logoImage} />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className={`${"d-flex flex-column flex-grow-1"}`}>
            {navData.map(({ page, id, links }) => {
              return (
                <Nav.Link
                  href={links}
                  key={id}
                  className={`${classes.anchor} ${"py-2 px-1"}`}
                  onClick={handleClose}
                  collapseonselect
                  children
                >
                  {page}
                </Nav.Link>
              );
            })}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default MobileNav;
