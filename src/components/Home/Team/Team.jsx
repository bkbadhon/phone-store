import team from '../../../../public/team.json'


const Team = () => {

    return (

        <div className="my-5 p-2">
        <div>
            <h2 className="text-5xl font-bold mb-5 mt-5 my-2">Our <span className='text-orange-700'>Team</span> Members</h2>
            <p className="mb-3">Together, these professionals collaborate to create, secure, and manage software products, ensuring they are functional, secure, and aligned with user and business requirements.</p>
        </div>
        <div className='flex flex-wrap justify-center my-3 gap-3'>

            {
                team.map((e,id)=>
                    <div key={id} className="card bg-base-100 shadow-xl"
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <figure><img className="w-[200px] object-cover h-[200px]" src={e.photo} /></figure>
                            <div className="text-center">
                            <h2 className="font-semibold mt-3 text-orange-500 text-xl">
                                {e.name}
                            </h2>
                            <p className='text-xs font-semibold'>{e.specialist}</p>

                            </div>
                        </div>
                
                )
            }
        </div>

        </div>
    );
};

export default Team;