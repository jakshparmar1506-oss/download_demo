"use client";

export default function Home() {
  const downloadTxtIOS = (content: string, fileName = "file.txt") => {
    const blob = new Blob([content], {
      type: "application/octet-stream", // 👈 IMPORTANT
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

  const downloadTxtIOS1 = () => {
    window.location.href = "/api/download";
  };

  return (
    <div>
      <button
        onClick={() =>
          downloadTxtIOS("Hello from UI\nWorks on iOS & Android", "ui-file.txt")
        }
      >
        Download TXT
      </button>
      <button onClick={() => downloadTxtIOS1()}>Download IOS1</button>
    </div>
  );
}
