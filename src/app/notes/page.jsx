"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MagnifyingGlass, X } from "phosphor-react";
import PlusButton from "../components/PlusButton";
import Note from "../components/Note";

const tabs = ["All notes", "Folders"];

const Page = () => {
  const [activeTab, setActiveTab] = useState("All notes");
  const [showSearch, setShowSearch] = useState(false);
  const [showLogoutTag, setShowLogoutTag] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center p-16 bg-[#252628] min-h-screen relative">
      {/* Header */}
      <div className="flex justify-between items-center max-w-[50rem] w-full md:mx-auto mx-4 relative">
        <div className="logo text-3xl font-bold text-[#6B7280]">Padi</div>
        <div className="flex items-center space-x-4 relative">
          <div className="relative">
            <img
              onClick={() => setShowLogoutTag(!showLogoutTag)}
              className="h-7 w-7 cursor-pointer rounded-full object-cover"
              src="/img.jpg"
              alt="UserImage"
            />
            <AnimatePresence>
              {showLogoutTag && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 bg-[#1f2022] text-white text-sm rounded-md px-4 py-2 shadow-xl z-50"
                >
                  <button
                    className="hover:text-red-400 w-32 transition-colors"
                    onClick={() => {
                      setShowLogoutTag(false);
                      alert("Logged out");
                    }}
                  >
                    Log out
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {showSearch ? (
            <X size={21} className="text-[#6B7280] cursor-pointer" onClick={() => setShowSearch(false)} />
          ) : (
            <MagnifyingGlass size={21} className="text-[#6B7280] cursor-pointer" onClick={() => setShowSearch(true)} />
          )}
        </div>
      </div>

      {/* Search Bar Slide Down */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-[50rem] mt-4"
          >
            <input
              type="text"
              placeholder="Search notes..."
              className="w-full bg-[#1f2022] border border-[#3A3B3D] text-sm text-white px-4 py-3 rounded-xl outline-none placeholder:text-gray-400"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tab Switcher */}
      <div className="relative bg-white/5 mb-5 mt-6 rounded-full flex items-center justify-between w-72 text-sm text-gray-300 font-medium">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="relative z-10 w-1/2 py-3 px-3 rounded-full transition-colors duration-200"
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 z-0 bg-white/10 rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Notes */}
      <div className="flex flex-col gap-4">
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </div>

      <PlusButton />
    </div>
  );
};

export default Page;
