import { Inter } from "next/font/google";
import Main from "@/components/Main";

const inter = Inter({ subsets: ["latin"] });

export default function AnswerPage({ params }: { params: { answer: string } }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full">
        <h1 className="text-4xl">Jesus said to love one another...</h1>
        
        <Main defaultAnswer={params.answer} />
      </div>
    </main>
  );
}
