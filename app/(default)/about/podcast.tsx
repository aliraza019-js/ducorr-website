import React from "react";

const Podcast = () => {
  return (
    <div
      style={{
        backgroundColor: "#d9823f",
        borderRadius: 20,
        maxWidth: 600,
        margin: "40px auto",
        color: "#fff",
        fontFamily: "Segoe UI, sans-serif",
        overflow: "hidden",
        boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
      }}
    >
      <img
        src="https://i.postimg.cc/85rpsRg4/james-mckinven-z-VLCus-XQSzs-unsplash.jpg"
        alt="Podcast"
        style={{ width: "100%", height: 300, objectFit: "cover" }}
      />
      <div style={{ padding: 24 }}>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: "bold", color: "#000000" }}>
          Origin Story of Ducorr
        </h2>
        <p style={{ margin: "4px 0 12px", fontSize: 14, color: "#000000" }}>Episode 1</p>
        <p style={{ fontSize: 15, color: "#000000" }}>
          In this episode, we dive into the journey and foundation of Ducorr the vision, struggles, and the road ahead.
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#d9823f",
          borderTop: "1px solid #4a5568",
          padding: "16px 24px 24px",
        }}
      >
        <audio controls style={{ width: "100%", outline: "none" }}>
          <source src="https://www.dropbox.com/scl/fi/6jxri19huehx2spmjpdot/DA-S1-Origin-Story-of-Ducorr.wav?rlkey=5h51lkb4fnm2327tkwzv7kcf9&dl=1" type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default Podcast; 