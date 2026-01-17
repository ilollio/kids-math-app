import { motion } from "framer-motion";

export default function BouncyButton({ children, onClick }) {
  return (
    <motion.button
      whileTap={{ scale: 0.8, rotate: -5 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 20,
      }}
      className="bouncing-buttons"
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}