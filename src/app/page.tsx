"use client";

export default function Home() {
  const downloadTxt = (content: string, fileName = "file.txt") => {
    const blob = new Blob([content], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <button
        onClick={() =>
          downloadTxt("Hello from UI\nWorks on iOS & Android", "ui-file.txt")
        }
      >
        Download TXT
      </button>
    </div>
  );
}
