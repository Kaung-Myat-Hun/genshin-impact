"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Motion.module.css";

export default function Motion(props: any) {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  return (
    <AnimatePresence>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
          className={styles.motiondiv}
        >
          {props.children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
