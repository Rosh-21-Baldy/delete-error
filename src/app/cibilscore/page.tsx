"use client";
import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/navbar";

export default function cibilscore() {
  return (
    <>
    <Navbar/>
      <div>
        <div className="container-fluid py-5 bg-light text-center">
          <div className="d-flex justify-content-center">
            <img
              src="https://media.istockphoto.com/id/2165081882/vector/coming-soon-announcement-tag-business-brand-opening-invitation-banner-poster-template-modern.jpg?s=612x612&w=0&k=20&c=IXWJZmdqF-4b5UZdGuhE7Talg5e8CYO7shsGITGMtqc="
              alt="Coming Soon"
              className="img-fluid"
              style={{ maxHeight: '400px', border: '10px solid #000' }} 
            />
          </div>

          <p className="lead text-muted mb-4 mt-5" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}>
            We will be adding more features to our site very soon!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
