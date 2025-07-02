import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to Saber Tooth</h1>
      <p>Quick Links:</p>
      <ul className="bulleted-list">
        <li><Link href="">Cell Schedule</Link></li>
      </ul>
    </main>
  );
}
