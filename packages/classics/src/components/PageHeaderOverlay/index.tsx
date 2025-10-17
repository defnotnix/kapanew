"use client";

export function PageHeaderOverlay({ type = "kc" }) {
  return (
    <>
      <div
        style={{
          position: "absolute",
          display: "block",
          top: 0,
          width: "100%",
          height: "800px",
          background: `linear-gradient(to bottom, var(--${type}-color-300), var(--${type}-color-${type == "ke" ? 100 : 200}))`,
          zIndex: -1,
        }}
      />
    </>
  );
}
