import React from "react";
import "./App.css";
import ImageAddSection from "./components/imageAdd";
import TopBar from "./components/topBar";
import { items } from "./data";
import LongCard from "./components/longCard";

function App() {
	return (
		<div className='w-full h-screen overflow-hidden flex text-blue-800'>
			<div className='w-[25vw] h-full bg-gray-400'></div>
			<div className='w-[75vw] h-full '>
				<TopBar />
				<div className='p-[30px]'>
					<ImageAddSection />
					<div className='w-full  pt-4'>
						<h5 className='font-[500]  mb-2'>Kies een onderdeel</h5>
						<div className='w-full max-h-[60vh] overflow-auto'>
							{items &&
								items.length > 0 &&
								items.map((item, i) => {
									return (
										<LongCard
											key={i}
											url={item.url}
											description={item.description}
										/>
									);
								})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
