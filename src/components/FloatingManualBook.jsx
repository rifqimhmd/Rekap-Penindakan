import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  MessageCircle,
} from "lucide-react";

export default function FloatingManualBook() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FLOATING BUTTON */}
      <div
        className="
          fixed
          left-0
          top-1/2
          -translate-y-1/2
          z-50
          flex
          items-center
        "
      >
        {/* BUTTON */}
        <motion.button
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.94 }}
          animate={{
            boxShadow: open
              ? "0 8px 30px rgba(239,68,68,0.35)"
              : "0 6px 20px rgba(0,0,0,0.15)",
          }}
          transition={{ duration: 0.2 }}
          onClick={() => setOpen(!open)}
          className="
            relative
            overflow-hidden

            w-11 h-14
            sm:w-12 sm:h-16
            md:w-14 md:h-16

            rounded-r-2xl
            sm:rounded-r-[22px]

            bg-gradient-to-b
            from-red-500
            via-red-500
            to-orange-500

            text-white

            flex
            items-center
            justify-center

            border border-white/20
            backdrop-blur-xl
            shadow-2xl
          "
        >
          {/* glow */}
          <div
            className="
              absolute
              inset-0
              bg-white/10
              opacity-40
            "
          />

          {/* animated arrow */}
          <motion.div
            animate={{
              x: open ? -2 : 2,
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.8,
            }}
            className="relative z-10"
          >
            {open ? (
              <ChevronLeft
                size={18}
                strokeWidth={2.5}
                className="sm:w-5 sm:h-5"
              />
            ) : (
              <ChevronRight
                size={18}
                strokeWidth={2.5}
                className="sm:w-5 sm:h-5"
              />
            )}
          </motion.div>
        </motion.button>

        {/* PANEL */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="
                ml-2 sm:ml-3

                w-[240px]
                sm:w-64
                md:w-72

                rounded-2xl

                bg-white/95
                backdrop-blur-xl

                border border-gray-200
                shadow-2xl
                overflow-hidden
              "
            >
              {/* HEADER */}
              <div
                className="
                  px-3 sm:px-4
                  pt-3 sm:pt-4
                  pb-3
                  border-b border-gray-100
                "
              >
                <h3
                  className="
                    text-xs sm:text-sm
                    font-semibold
                    text-gray-800
                  "
                >
                  Menu Akses
                </h3>

                <p
                  className="
                    text-[10px]
                    sm:text-xs
                    text-gray-500
                    mt-1
                  "
                >
                  Shortcut bantuan & dokumentasi
                </p>
              </div>

              {/* MENU */}
              <div className="p-2 space-y-1">
                {/* MANUAL BOOK */}
                <a
                  href="/manual-book.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-3

                    px-2.5 sm:px-3
                    py-2.5 sm:py-3

                    rounded-xl

                    hover:bg-red-50
                    transition-all
                    group
                  "
                >
                  <div
                    className="
                      w-9 h-9
                      sm:w-10 sm:h-10

                      rounded-xl
                      bg-red-100

                      flex
                      items-center
                      justify-center

                      shrink-0
                    "
                  >
                    <FileText
                      size={16}
                      className="text-red-500 sm:w-[18px] sm:h-[18px]"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p
                      className="
                        text-xs sm:text-sm
                        font-medium
                        text-gray-700
                        group-hover:text-red-600
                        truncate
                      "
                    >
                      Download Manual Book
                    </p>

                    <p
                      className="
                        text-[10px]
                        sm:text-xs
                        text-gray-400
                        truncate
                      "
                    >
                      Preview PDF di tab baru
                    </p>
                  </div>
                </a>

                {/* WHATSAPP */}
                <a
                  href="https://wa.me/62895805377222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-3

                    px-2.5 sm:px-3
                    py-2.5 sm:py-3

                    rounded-xl

                    hover:bg-green-50
                    transition-all
                    group
                  "
                >
                  <div
                    className="
                      w-9 h-9
                      sm:w-10 sm:h-10

                      rounded-xl
                      bg-green-100

                      flex
                      items-center
                      justify-center

                      shrink-0
                    "
                  >
                    <MessageCircle
                      size={16}
                      className="text-green-500 sm:w-[18px] sm:h-[18px]"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p
                      className="
                        text-xs sm:text-sm
                        font-medium
                        text-gray-700
                        group-hover:text-green-600
                        truncate
                      "
                    >
                      Kontak Admin
                    </p>

                    <p
                      className="
                        text-[10px]
                        sm:text-xs
                        text-gray-400
                        truncate
                      "
                    >
                      Hubungi melalui WhatsApp
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
