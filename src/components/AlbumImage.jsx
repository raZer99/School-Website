import React from "react";
function AlbumImage({ img }) {
  return (
    <div>
      <div
        style={{
          margin: "4rem",
          display: "block",
          width: "fit-content",
        }}
        class=""
      >
        <div class="col-lg-4 col-md-12 mt-3 mb-4 mb-lg-0">
          <button
            style={{
              background: "none",
              border: "none",
              position: "relative",
            }}
            class="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src={img}
              class="w-100"
              alt="random"
              style={{ opacity: 0.7 }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AlbumImage;
