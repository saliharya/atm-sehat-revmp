import { ImageResponse } from "next/og";

export const alt = "ATM Sehat – Anjungan Telehealth Masyarakat Sehat";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #0c4a6e 60%, #0369a1 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "rgba(14, 165, 233, 0.2)",
            border: "1px solid rgba(14, 165, 233, 0.4)",
            borderRadius: "100px",
            padding: "8px 20px",
            marginBottom: "32px",
          }}
        >
          <span style={{ color: "#38bdf8", fontSize: "18px", fontWeight: 600 }}>
            Telehealth for Everyone
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.1,
            marginBottom: "24px",
            maxWidth: "800px",
          }}
        >
          ATM Sehat
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "28px",
            color: "#94a3b8",
            maxWidth: "700px",
            lineHeight: 1.4,
            marginBottom: "56px",
          }}
        >
          Cek Kesehatan Semudah Cek Saldo — IoT Kesehatan Terdepan di Indonesia
        </div>

        {/* Features */}
        <div style={{ display: "flex", gap: "16px" }}>
          {["Tekanan Darah", "Gula Darah", "Konsultasi Dokter", "HELENA AI"].map((f) => (
            <div
              key={f}
              style={{
                background: "rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "10px 20px",
                color: "#cbd5e1",
                fontSize: "18px",
              }}
            >
              {f}
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "80px",
            color: "#475569",
            fontSize: "20px",
          }}
        >
          atm-sehat.com
        </div>
      </div>
    ),
    { ...size }
  );
}
