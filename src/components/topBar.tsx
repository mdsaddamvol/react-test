const TopBar = () => {
	return (
		<div className='w-full h-[70px] border-b border-gray-300 flex justify-between items-center px-6 '>
			<h1 className='font-[600] text-[30px] text-blue-900'>
				Onderdeel inbeoken
			</h1>
			<div className='w-[40px] h-[40px] flex justify-center items-center text-[30px] rounded-[50%] border-2 border-blue-800 p-[5px]'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
					className='feather '
				>
					<line fill='blue' x1='18' y1='6' x2='6' y2='18'></line>
					<line x1='6' y1='6' x2='18' y2='18'></line>
				</svg>
			</div>
		</div>
	);
};

export default TopBar;
