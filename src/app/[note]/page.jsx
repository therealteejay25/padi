"use client";
import { useState, useEffect } from "react";
import TiptapEditor from "../components/Editor";

const NotesPage = () => {
  const [note, setNote] = useState("");
  
  // Load from localStorage
  useEffect(() => {
    const storedNote = localStorage.getItem("note");
    if (storedNote) setNote(storedNote);
  }, []);

  // Save to localStorage on change
  const handleNoteChange = (newContent) => {
    setNote(newContent);
    localStorage.setItem("note", newContent);
  };

  return (
    <div className="min-h-screen bg-[#252628] p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">New Note</h1>
      <TiptapEditor content={note} onChange={handleNoteChange} />
    </div>
  );
};

export default NotesPage;
