const DeveloperCard = ({ developer: {service_photo, avatar, display_name, starting_from }}) =>{
	return (
		<div className="rounded-[10px] min-w-[238px] max-w-[238px] h-56 bg-white p-[5px] flex flex-col justify-between">
			<div className="relative">
				<img src={service_photo} className="w-full h-32 object-cover rounded-lg" alt="" />
				<div className="rounded-full w-11 h-11 flex items-center justify-center bg-white absolute -bottom-6 left-2">
					<img src={avatar} alt="" className="rounded-full w-10 h-10" />
				</div>
			</div>
			<div className="flex justify-between mb-5 px-2">
				<div className="flex flex-col">
					<h3 className="text-xs font-bold">{display_name}</h3>
					<p className="text-xs opacity-50">{starting_from}</p>
				</div>
				<p className="text-xs font-bold text-customBlue">Hire</p>
			</div>
		</div>
	)
}

export default DeveloperCard