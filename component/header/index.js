import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <header className="navbar-style container d-flex justify-content-center py-3 fixed-top">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link href="/">
              <a className="text-decoration-none nav-link  fw-bold text-dark fs-4 ">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className="text-decoration-none nav-link fw-bold text-dark fs-4">About</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#project">
              <a className="text-decoration-none nav-link fw-bold text-dark fs-4">Project</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#contact">
              <a className="text-decoration-none nav-link fw-bold text-dark fs-4">Contact</a>
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
