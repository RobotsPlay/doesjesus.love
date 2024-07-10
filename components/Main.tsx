'use client';

import { citations, getAffirmative, site_url, whitelist } from "@/data";
import { useEffect, useState } from "react";

export default function Main({ defaultAnswer }: { defaultAnswer?: string }) {
	const [answer, setAnswer] = useState('');
	const [affirmative, setAffirmative] = useState('Yes');
  const [isCopyUrl, setIsCopyUrl] = useState(false);

  const onAnswerUpdate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAnswer(e.target.value);
    window.history.pushState({}, '', `/${e.target.value}`);
  };

  const onCopyUrl = () => {
    navigator.clipboard.writeText(`${site_url}${answer}`);
    setIsCopyUrl(true);
  };
  
	useEffect(() => {
		if (!defaultAnswer) {
			return;
		}
  
	  setAnswer(whitelist.find((item) => item.id === defaultAnswer)?.id || 'everyone');
	}, [defaultAnswer]);
  
	useEffect(() => {
    setIsCopyUrl(false);
		setAffirmative(getAffirmative());
	}, [answer]);
  
	return (
		<>
			<form className="font-black text-xl md:text-3xl my-16 md:my-24">
				<label htmlFor="did-he-mean" className="font-black">Did He Mean</label>
				<select id="did-he-mean" 
					value={answer} 
					onChange={onAnswerUpdate}
					className="font-black text-red-700 border-b-4 border-red-700 ml-2 bg-transparent max-w-full"
				>
					<option value=""></option>
					{whitelist.map((item) => (
						<option value={item.id} key={item.id}>{item.label}</option>
					))}
				</select>
				?
			</form>
	
			{answer && (
				<>
					<div className="font-black text-3xl md:text-6xl">{affirmative}</div>

					<div className="mt-16 md:mt-24">
						<div className="text-sm font-bold">Share:</div>
						<div className="text-xl md:text-2xl font-bold flex flex-col md:flex-row justify-center items-center">
							<div>
								{site_url}<span className="text-red-700">{answer}</span>
							</div>
							<span className="relative">
								<button type="button" className="ml-2" title="Copy Url" onClick={onCopyUrl}>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6" />
								</svg>
								</button>
								{isCopyUrl && <span className="text-xs font-normal absolute top-1 ml-1 left-full">Copied!</span>}
							</span>
						</div>
					</div>

					<div className="flex flex-col md:flex-row flex-wrap mt-24 md:mt-36">
						{citations.map((citation) => (
							<div key={citation.reference} className="mb-16 basis-6/12 px-6 text-left">
								<div className="text-sm font-black">{citation.reference}</div>
								<div className="text-md font-normal">{citation.text}</div>
							</div>
						))}
					</div>
				</>
			)}
		</>
	);
}
