"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Test = () => {
  const [open, setOpen] = useState(false);

  //   const variants = {
  //     visible: {
  //       opacity: 1,
  //     //   x: 500,
  //       //   duration: 2000,
  //       //   transition: { type: "spring", stiffness: 100, damping: 100 }, //tween or spring
  //     //   transition: { staggerChildren: 0.2 },
  //     },
  //     hidden: { opacity: 0 },
  //   };

  //custom variants

  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      x: 100,
      transition: { delay: i * 0.3 },
    }),
  };

  const items = ["item1", "item2", "item3", "item4"];

  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item, i) => (
          <motion.li variants={variants} key={item} custom={i}>
            {item}
          </motion.li>
        ))}
      </motion.ul>

      {/* <motion.div
        className="box"
        variants={variants}
        animate={open ? "visible" : "hidden"}
        // initial={{ opacity: 0.5, scale: 0.5 }}
        // animate={{ opacity: 1, scale: 1, x: 100, y: 100 }}
        transition={{ duration: 2 }}
        // whileHover={{ opacity: 1, scale: 2 }}
        // whileTap={{ opacity: 1, scale: 2 }}
        // whileInView={{ opacity: 1, scale: 2 }}
        // drag
      />
      <button onClick={() => setOpen((prev) => !prev)}>Click me!</button> */}
    </div>
  );
};

export default Test;
