type Props = {
	url: string;
	description: string;
};

const LongCard = (props: Props) => {
	const { url, description } = props;
	return (
		<div className='w-full h-[80px] flex justify-between items-center gap-[20px] border rounded mb-1'>
			<img className='h-full' src={url} />
			<div className='grow'>{description}</div>
			<div className='w-[40px] h-[40px] rounded-[50%] p-[10px] border-2 mr-4 text-center flex justify-center items-center text-[30px]'>
				<span className='mb-1'>+</span>
			</div>
		</div>
	);
};

export default LongCard;
