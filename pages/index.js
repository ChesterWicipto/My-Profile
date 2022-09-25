import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="body">
      <div>
        <header className="navbar-style container d-flex justify-content-center py-3 fixed-top">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link href="/">
                <a className="text-decoration-none nav-link  fw-bold text-dark fs-4 ">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#about">
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
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse justify-content-center align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6 ">
            <img src="/Leehong.png" className="d-block mx-lg-auto img-fluid " alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 text-white fw-bold lh-1 mb-3">
              Hi I am <span className="chester">Chester Wicipto</span>
            </h1>
            <h2 className="text-white">I am a fresh graduate</h2>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-outline-warning button rounded-pill btn-lg px-4 me-md-2">
                <Link href={"https://drive.google.com/file/d/1q21oZ-nu7ulqaQkKCowdrlFof7B2Z91C/view?usp=sharing"}>
                  <a target={"_blank"} className="text-decoration-none text-white  fw-bold  ">
                    Download My CV
                  </a>
                </Link>
              </button>
              <button type="button" className="btn btn-outline-warning button rounded-pill btn-lg px-4 me-md-2">
                <Link href={"https://drive.google.com/file/d/1EEKHToVsN6RsdbC2d4zGcI52S0uKnGFs/view?usp=sharing://drive.google.com/file/d/1q21oZ-nu7ulqaQkKCowdrlFof7B2Z91C/view?usp=sharing"}>
                  <a target={"_blank"} className="text-decoration-none text-white  fw-bold  ">
                    Download My Resume
                  </a>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="body" id="about">
        <div className="container col-xxl-8 px-4 py-5 mb-5">
          <div className="row flex-lg-row-reverse justify-content-center align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6 ">
              <img src="/chester.png" className="d-block mx-lg-auto img-fluid " alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 text-white fw-bold lh-1 mb-3">
                About <span className="chester">Me</span>
              </h1>
              <p className="text-white fw-bold fs-5">
                I am very motivated to work hard with a variety of skills and good attitude, I am used to operating graphic design applications such as Photoshop and have obtained a valid certificate. I am a front-end developer, I have
                proficiency with the javascript programming language. I can also work in a team or individually. committed to using all my skills to realize the company is vision and mission to be more advanced.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div id="project" className="text-center text-white mt-5">
          <h1>Project</h1>
          <br></br>
          <br></br>
        </div>
        <section>
          <div className="container bg-dark p-3">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100">
                  <img src="/MovieApp.png" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Movie App</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button type="button" className="btn btn-outline-warning">
                      <a href="https://web-movie-six.vercel.app" target={"_blank"} rel="noreferrer">
                        Go to View
                      </a>
                    </button>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">24-July-2022</small>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src="/MinistryApp.png" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Ministry App</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <button type="button" className="btn btn-outline-warning">
                      <a href="https://www.figma.com/file/RR7Y5GiLf8ld8EvRiKMfFT/Mobile-App-Ministry-Fastwork?node-id=0%3A1" target={"_blank"} rel="noreferrer">
                        Go to View
                      </a>
                    </button>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">2-Aug-2022</small>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src="/BotChat.png" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Bot Chat</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">22-May-2020</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id="contact" className="container text-center justify-content-center bg-light text-dark rounded mt-5">
        <section class="section_padding contact" id="contact">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h2 class="section_heading text-center">Contact</h2>
              </div>
            </div>
            <div class="contact-info">
              <p>Drop me a line for inquiries, collaborations, speaking engagements, or just to say hello.</p>
              <div class="contact-info__text">
                <h6>Say hi,</h6>
                <p>s21710323@student.unklab.ac.id</p>
              </div>
              <div class="contact-info__text">
                <h6>Call me</h6>
                <p>+62 812 4244 0674</p>
              </div>
              <div class="contact-info__links">
                <h6>Find me socials</h6>
                <a href="https://wa.me/6281242440674" target={"_blank"} rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 448 512">
                    <path d="M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z" />
                  </svg>
                </a>
                <a href="https://web.facebook.com/profile.php?id=100010584555008" rel="noreferrer" target={"_blank"}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512">
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/chester-wicipto-749a4a248/" target={"_blank"} rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 448 512">
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/lee_hongw/" target={"_blank"} rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container">
        <footer className="py-3 ">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <Link href="#">
                <a className="nav-link px-2 text-white ">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#about">
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
          <p className="text-center text-white ">2022 ❤ Chester Wicipto</p>
        </footer>
      </div>
    </div>
  );
}
