import React from "react";
export default function Footer() {
  return (
    <footer className="py-4 bg-light mt-5">
      <div className="container text-center">
        <small>© {new Date().getFullYear()} EduConsult — All rights reserved</small>
      </div>
    </footer>
  );
}
