import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen mt-16">
      <h1 className="text-3xl text-center font-bold mb-4">
        Welcome to the Expositor's Bible
      </h1>
      <p className="text-lg text-center mb-6">
        Ranked the best Bible Study Version, The Expositor's Bible(KJV) is a
        unique collection of insights, commentary, and wisdom from various
        scholars and theologians. It provides a deeper understanding of the Holy
        Scriptures, helping readers to explore the Bible's rich teachings and
        historical context.
      </p>

      <p className="text-lg text-center mb-6">
        May your journey through the Word be enlightening and transformative.
      </p>
      <p className="text-lg text-center text-green-700">
        Use the Menu to start exploring or jump right in from{" "}
        <span>
          <Link href="/bible/genesis-01">The Beginning</Link>
        </span>
      </p>
    </div>
  );
}
