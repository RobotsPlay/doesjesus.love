'use client';

import { getAffirmative, whitelist } from "@/data";
import { useEffect, useState } from "react";

export default function Main({ defaultAnswer }: { defaultAnswer?: string }) {
	const [answer, setAnswer] = useState('');
	const [affirmative, setAffirmative] = useState('Yes');

  const onAnswerUpdate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAnswer(e.target.value);
    window.history.pushState({}, '', `/${e.target.value}`);
  };
  
	useEffect(() => {
		if (!defaultAnswer) {
			return;
		}
  
    setAnswer(whitelist.find((item) => item.id === defaultAnswer)?.id || 'everyone');
	}, [defaultAnswer]);
  
	useEffect(() => {
		setAffirmative(getAffirmative());
	}, [answer]);
  
	return (
		<>
			<form className="font-black text-3xl my-12">
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
        <div className="font-black text-6xl">{affirmative}</div>
      )}

		</>
	);
}
