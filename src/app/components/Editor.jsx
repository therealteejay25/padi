"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import { useCallback } from "react";

import {
  TextBolder,
  TextItalic,
  TextUnderline,
  Strikethrough,
  TextHOne,
  CodeBlock,
  Quotes,
  ListBullets,
  ListNumbers,
  TextAlignLeft,
  TextAlignCenter,
  TextAlignRight,
  Trash,
  TextStrikethrough,
  Code,
} from "phosphor-react";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";

const TiptapEditor = ({ content = "", onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: { keepMarks: true },
        orderedList: { keepMarks: true },
        heading: { levels: [1] },
      }),
      Underline,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Placeholder.configure({
        placeholder: "Start typing your notes here...",
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "prose prose-invert prose-sm sm:prose lg:prose-lg xl:prose-xl focus:outline-none",
      },
    },
    content,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  const isActive = useCallback(
    (format, opts = {}) =>
      editor?.isActive(format, opts)
        ? "bg-white/10 text-white"
        : "text-gray-400 hover:text-white",
    [editor]
  );

  const Button = ({ onClick, active, children }) => (
    <button
      onClick={onClick}
      className={`p-2 rounded transition-colors duration-200 ${active}`}
    >
      {children}
    </button>
  );

  return (
    <div className="w-full">
      <SimpleEditor />
    </div>
  );
};

export default TiptapEditor;
