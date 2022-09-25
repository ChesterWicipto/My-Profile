import Link from "next/link";

export default function Footer() {
  return (
    <div className="container">
      <footer className="py-3 ">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link px-2 text-white ">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link px-2 text-white ">About</a>
            </Link>
          </li>
          <li className="nav-item">
            <a href="#project" className="nav-link px-2 text-white ">
              Project
            </a>
          </li>
          <li className="nav-item">
            <Link href="#contact">
              <a className="nav-link px-2 text-white ">Contact</a>
            </Link>
          </li>
        </ul>
        <p className="text-center text-white ">2022 Chester Wicipto</p>
      </footer>
    </div>
  );
}
