"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Motion.module.css";

import { Suspense } from "react";
import  Loading  from "./loading";

export default function Motion(props: any) {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <AnimatePresence>
      {loading ? (
        <Loading />
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
