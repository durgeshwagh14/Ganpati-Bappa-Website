import React from "react";

function BappaPhotos() {
  return (
    <>
      <div className="container2 container-style " id="BappaPhotos">
        <p className="sub-heading3">Ganpati Bappa Photos</p>

        {/* Add the YouTube video section */}
        <div className="video-container">
          <div className="video-wrap1">
            <img className="zoom" src="/BappaPhotos/Photos-P2.jpg" alt="" />
          </div>

          <div className="video-wrap1">
            <img className="zoom" src="/BappaPhotos/Photos-P1.jpg" alt="" />
          </div>

          <div className="video-wrap1">
            <img className="zoom" src="/BappaPhotos/Photos-P3.jpg" alt="" />
          </div>

          <div className="video-wrap1">
            <img className="zoom" src="/BappaPhotos/Photos-P4.jpg" alt="" />
          </div>

          <div className="video-wrap1">
            <img className="zoom" src="/BappaPhotos/Photos-P6.jpg" alt="" />
          </div>

          <div className="video-wrap1">
            <img className="zoom" src="/BappaPhotos/Photos-P5.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default BappaPhotos;
