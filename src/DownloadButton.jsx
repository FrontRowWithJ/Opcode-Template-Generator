import React from "react";
import "./download-button.css";
import DownloadSVG from "./DownloadSVG";
import html2canvas from "html2canvas";

const DownloadButton = (props) => {
  return (
    <button
      className="download-button"
      onClick={() => {
        html2canvas(props.downloadRef.current).then((canvas) => {
          const image = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
          download(image, props.filename);
        });
      }}
    >
      <DownloadSVG className="download-svg" />
    </button>
  );
};

const download = (image, filename) => {
  const link = document.createElement("a");
  const name = filename.slice(-4) === ".png" ? filename : filename + ".png";
  link.download = name === ".png" ? "default.png" : name;
  link.href = image;
  link.click();
};

export default DownloadButton;
