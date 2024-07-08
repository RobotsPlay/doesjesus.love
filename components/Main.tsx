'use client';

import { getAffirmative, whitelist } from "@/data";
import { useEffect, useState } from "react";

export default function Main({ defaultAnswer }: { defaultAnswer?: string }) {
	const [answer, setAnswer] = useState('');
	const [affirmative, setAffirmative] = useState('Yes');
  
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
			<form>
				<label htmlFor="did-he-mean">Did He mean</label>
				<select id="did-he-mean" value={answer} onChange={(e) => setAnswer(e.target.value)}>
					<option value=""></option>
					{whitelist.map((item) => (
						<option value={item.id} key={item.id}>{item.label}</option>
					))}
				</select>
				?
			</form>
	
			{answer && (<div>{affirmative}</div>)}

		</>
	);
}
