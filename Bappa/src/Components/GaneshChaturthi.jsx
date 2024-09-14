import React from "react";

function GaneshChaturthi() {
  return (
    <>
      <div className="container2  container-style" id="Bappa">
        <h2 className="heading2 "> Ganesh Chaturthi 2024 </h2>
        <p className="sub-heading2">Ganpati Bappa Aarti</p>

        {/* Add the YouTube video section */}
        <div className="video-container">
          <div className="video-wrap">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/MnuL0F2kicc?si=_PHNY6OZO7_W6R3j"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="video-wrap">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/CAKZlI5UaeQ?si=0QmDMhQDA5wlO24B"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="video-wrap">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/smKeQo9FYuE?si=k98bBM2hW5lKp_Xw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default GaneshChaturthi;
