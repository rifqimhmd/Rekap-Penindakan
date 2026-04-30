import { motion } from "framer-motion";
import Profile from "../components/Profile";
import LinkCard from "../components/LinkCard";
import Section from "../components/Section";
import Footer from "../components/Footer";
import links from "../data/links";
import { useEffect, useState } from "react";

export default function RekapPenindakan() {
  const [passwordData, setPasswordData] = useState([]);

  useEffect(() => {
    fetch(
      "https://opensheet.elk.sh/17GCqBBZ4zxJwIr09TX25xrqpWG2lGb_W75YimeVG9KE/Sheet1",
    )
      .then((res) => res.json())
      .then((data) => setPasswordData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden text-gray-900 bg-[#eef1f6]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.8),_transparent_60%)]"></div>

      <div className="absolute -top-32 -left-32 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-red-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -bottom-32 -right-32 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-orange-200 rounded-full blur-3xl opacity-20"></div>

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div
        className="relative 
        max-w-xl 
        md:max-w-2xl 
        lg:max-w-4xl 
        mx-auto 
        px-4 sm:px-6 lg:px-8 
        py-12 sm:py-16 
        space-y-10 sm:space-y-14"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Profile />
        </motion.div>
        {links.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Section title={section.category}>
              <div className="grid gap-4 sm:gap-5">
                {section.items.map((item, i) => {
                  const match = passwordData.find(
                    (d) => d["Nama Laporan"] === item.title,
                  );

                  return (
                    <LinkCard key={i} {...item} password={match?.Password} />
                  );
                })}
              </div>
            </Section>
          </motion.div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
