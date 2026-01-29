"use client";

type Props = {
  videoUrl?: string;
};

export default function VideoPlayer({ videoUrl }: Props) {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "10px",
        border: "1px solid #ccc",
      }}
    >
      <h3>Answer (Video)</h3>

      {videoUrl ? (
        <video width="100%" controls>
          <source src={videoUrl} type="video/mp4" />
        </video>
      ) : (
        <p>No video available yet.</p>
      )}
    </div>
  );
}
