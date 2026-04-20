import { motion } from "framer-motion";
import logo from "../assets/logo.png";

export default function Profile() {
  return (
    <div className="text-center space-y-5 sm:space-y-6">
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative inline-flex items-center justify-center"
      >
        <div
          className="
          absolute 
          w-28 h-28 
          sm:w-36 sm:h-36 
          lg:w-44 lg:h-44 
          bg-gradient-to-r 
          from-red-300 
          via-orange-300 
          to-yellow-200 
          blur-2xl 
          opacity-30 
          rounded-full
        "
        ></div>

        <img
          src={logo}
          alt="logo"
          className="
            relative 
            w-24 h-24 
            sm:w-28 sm:h-28 
            lg:w-32 lg:h-32 
            rounded-full 
            object-cover 
            shadow-xl 
            ring-2 ring-white/60
          "
        />
      </motion.div>

      <div className="px-2 sm:px-0">
        <h1
          className="
          text-lg 
          sm:text-2xl 
          md:text-3xl 
          lg:text-4xl 
          font-semibold 
          tracking-tight
          leading-snug
        "
        >
          Rekapitulasi Pelaporan
        </h1>

        <p
          className="
          text-gray-500 
          text-[11px] 
          sm:text-sm 
          md:text-base 
          mt-2 
          max-w-md 
          mx-auto
          leading-relaxed
        "
        >
          Subdit Penindakan Tanggap Darurat dan Pemulihan Pengelolaan Crisis
          Center
        </p>
      </div>
    </div>
  );
}
