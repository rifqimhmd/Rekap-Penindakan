import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function LinkCard({ title, url, password }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = () => {
    if (input === password) {
      window.open(url, "_blank");
      setOpen(false);
      setInput("");
      setError("");
    } else {
      setError("Password tidak sesuai");
    }
  };

  const waMessage = `Mohon izin mengajukan akses data dan password.

Nama :
NIP :
Email :
Rekap Data yang Ingin Diakses : ${title}

Terima kasih.`;

  const waLink = `https://wa.me/62895805377222?text=${encodeURIComponent(
    waMessage,
  )}`;

  return (
    <>
      {/* CARD */}
      <motion.div
        onClick={() => setOpen(true)}
        whileHover={{ y: -4, scale: 1.01 }}
        whileTap={{ scale: 0.97 }}
        className="
          cursor-pointer group relative flex items-center justify-between
          px-4 sm:px-5 py-3 sm:py-4
          rounded-xl
          bg-white
          border border-gray-200
          shadow-sm hover:shadow-lg
          transition
        "
      >
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-100/50 to-orange-100/50 opacity-0 group-hover:opacity-100 transition"></div>

        <span className="relative text-xs sm:text-sm font-medium text-gray-800 group-hover:text-red-600">
          {title}
        </span>

        <span className="relative text-gray-300 group-hover:text-red-500 group-hover:translate-x-1 transition text-sm">
          →
        </span>
      </motion.div>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                className="fixed inset-0 z-[9999] bg-black/20 backdrop-blur-sm flex items-center justify-center px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
              >
                <motion.div
                  onClick={(e) => e.stopPropagation()}
                  initial={{ scale: 0.95, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="
                    w-full max-w-sm
                    p-5 sm:p-6
                    rounded-2xl
                    bg-white
                    shadow-2xl
                    relative
                  "
                >
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-lg"
                  >
                    ✕
                  </button>

                  <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">
                    🔐 Akses Data
                  </h2>

                  <p className="text-xs sm:text-sm text-gray-500 mb-4">
                    Masukkan password untuk membuka file
                  </p>

                  <div className="relative">
                    <input
                      type={show ? "text" : "password"}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                      autoFocus
                      className="
                        w-full px-3 py-2 pr-10 rounded-lg
                        border border-gray-200
                        focus:outline-none focus:ring-2 focus:ring-red-400
                        text-sm
                      "
                      placeholder="Masukkan password..."
                    />

                    <button
                      type="button"
                      onClick={() => setShow(!show)}
                      className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
                    >
                      {show ? "🙈" : "👁️"}
                    </button>
                  </div>

                  {error && (
                    <motion.p
                      initial={{ x: -5 }}
                      animate={{ x: 5 }}
                      transition={{ repeat: 2, duration: 0.1 }}
                      className="text-red-500 text-xs mt-2"
                    >
                      {error}
                    </motion.p>
                  )}

                  <div className="mt-3">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-500 hover:text-red-600 transition"
                    >
                      Lupa password? Hubungi admin
                    </a>
                  </div>

                  <div className="flex justify-end gap-2 mt-5">
                    <button
                      onClick={() => setOpen(false)}
                      className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700"
                    >
                      Batal
                    </button>

                    <button
                      onClick={handleSubmit}
                      className="
                        px-4 py-1.5 text-sm
                        bg-gradient-to-r from-red-500 to-orange-500
                        text-white rounded-lg
                        shadow hover:opacity-90 transition
                      "
                    >
                      Buka
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.getElementById("modal-root"),
        )}
    </>
  );
}
