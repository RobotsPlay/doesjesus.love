import { Inter } from "next/font/google";
import { getAffirmative, whitelist } from "@/data";
import Affirmative from "@/components/Affirmative";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [answer, setAnswer] = useState('');
  const [affirmative, setAffirmative] = useState('Yes');

  useEffect(() => {
    setAffirmative(getAffirmative());
  }, [answer]);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full">
        <h1 className="text-4xl">Jesus said to love one another...</h1>

        <form>
          <label htmlFor="did-he-mean">Did He mean</label>
          <select id="did-he-mean" onChange={(e) => setAnswer(e.target.value)}>
            <option value=""></option>
            {whitelist.map((item) => (
              <option value={item.id} key={item.id} selected={answer === item.id}>{item.label}</option>
            ))}
          </select>
          ?
        </form>

        {answer && (<div>{affirmative}</div>)}
      </div>
    </main>
  );
}
