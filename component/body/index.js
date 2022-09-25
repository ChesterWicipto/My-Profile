import Link from "next/link";
import React from "react";

export default function Body() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse justify-content-center align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6 ">
          <img src="/chester.png" className="d-block mx-lg-auto img-fluid " alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 text-white fw-bold lh-1 mb-3">
            Hi I am <span className="chester">Chester Wicipto</span>
          </h1>
          <h2 className="text-white">I am a fresh graduate</h2>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-outline-warning button rounded-pill btn-lg px-4 me-md-2">
              <Link href={"/about"}>
                <a className="text-decoration-none text-white  fw-bold  ">About Me</a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
