import React from 'react';

const Contact = () => {
    return (
        <div>
            <div>
                <form className="w-80 md:w-96 space-y-5 bg-white p-5 rounded-xt">
                    <h1>Book Now</h1>
                    <div className="flex flex-col">
                        <input
                            type="text"
                            name="userFirstname"
                            id="userFirstName"
                            placeholder="First Name"
                            className='py-3 px-2 bg-[#d5f2ec] rounded-lg'
                        />
                    </div>
                     <div className="flex flex-col">
                        <input
                            type="email"
                            name="userEmail"
                            id="userEmail"
                            placeholder="your Email"
                            className='py-3 px-2 bg-[#d5f2ec] rounded-lg'
                        />
                    </div>
                     <div className="flex flex-col">
                        <input
                            type="number"
                            name="userNumber"
                            id="userNumber"
                            placeholder="Phone Number"
                            className='py-3 px-2 bg-[#d5f2ec] rounded-lg'
                        />
                    </div>
                    <div>
                        <button>Book Appointment</button>
                        <button className='bg-backgroundColor text-white px-10 rounded-md active:bg-red-500'>Close</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact