"use client";

import Image from "next/image";
import "./navbar.scss";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="main-name"
        >
          Abhi X
        </motion.span>
        <div className="social">
          <a href="#">
            <Image src="/facebook.png" alt="fb" width="18" height="18" />
          </a>
          <a href="#">
            <Image src="/instagram.png" alt="fb" width="18" height="18" />
          </a>
          <a href="#">
            <Image src="/youtube.png" alt="fb" width="18" height="18" />
          </a>
          <a href="#">
            <Image src="/dribbble.png" alt="fb" width="18" height="18" />
          </a>
        </div>
      </div>
    </nav>
  );
}
