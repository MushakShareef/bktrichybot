"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        style={{
          borderBottom: "1px solid #ffffff",
          padding: "15px 20px",
          backgroundColor: "#8903ef",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo + Title */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img
              src="/images/baba.png"
              alt="Shiv Baba"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <div>
              <div style={{ fontWeight: "bold", fontSize: "16px" }}>
                Brahma Kumaris
              </div>
              <div style={{ fontSize: "13px", color: "#e6d9f2" }}>
                Gyan Bot
              </div>
            </div>
          </div>

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <a
              href="https://spin-wheel-nu-three.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="desktop-only"
              style={{
                marginRight: "16px",
                padding: "6px 12px",
                border: "1px solid #ffffff",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "13px",
                backgroundColor: "#ffffff",
                color: "#8903ef",
              }}

            >
              Thought for the Day
            </a>

            <nav className="desktop-only" style={{ display: "flex", gap: "16px" }}>
              <a href="/"
                 style={{
                        padding: "6px 14px",
                        border: "1px solid #ffffff",
                        borderRadius: "6px",
                        color: "#ffffff",
                        textDecoration: "none",
                        fontSize: "13px",
                      }}
              >
                Home
              </a>

              <a
                href="https://bk-trichy02.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                padding: "6px 14px",
                border: "1px solid #ffffff",
                borderRadius: "6px",
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "13px",
              }}
              >
                About Us
              </a>
              <a href="/gallery"
                 style={{
                  padding: "6px 14px",
                  border: "1px solid #ffffff",
                  borderRadius: "6px",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: "13px",
                }}
              >
                Gallery
              </a>

              <a href="/address"
                 style={{
                  padding: "6px 14px",
                  border: "1px solid #ffffff",
                  borderRadius: "6px",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: "13px",
                }}
              >
                Address
              </a>
              
            </nav>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="mobile-only"
              style={{
                fontSize: "22px",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        
        <div
          className="mobile-only"
          style={{
            width: "100%",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            gap: "12px",
            background: "#fff",
            borderTop: "1px solid #eee",
          }}
        >
          <a
            href="https://spin-wheel-nu-three.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textAlign: "center",   // 👈 centers text
              alignSelf: "center",   // 👈 centers THIS item only
              padding: "12px",
              borderRadius: "8px",
              background: "#8903ef",
              color: "#fff",
              fontWeight: "600",
              width: "100%",
            }}
          >
            Thought for the Day
          </a>

          <a href="/">Home</a>
          <a
            href="https://bk-trichy02.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Us
          </a>

          <a href="/gallery">Gallery</a>
          <a href="/address">Address</a><br />
          
        </div>
      )}
    </>
  );
}
