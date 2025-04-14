import React from 'react';

const Contact = ({ closeForm }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="popup-form absolute p-5 bg-white rounded-xl">
                <form className="w-80 md:w-96 space-y-5">
                    <h1 className="text-4xl font-semibold text-center">Book Now</h1>
                    <div className="flex flex-col">
                        <input
                            type="text"
                            name="userFirstname"
                            id="userFirstName"
                            placeholder="First Name"
                            className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col">
                        <input
                            type="email"
                            name="userEmail"
                            id="userEmail"
                            placeholder="Your Email"
                            className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col">
                        <input
                            type="number"
                            name="userNumber"
                            id="userNumber"
                            placeholder="Phone Number"
                            className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
                        />
                    </div>
                    <div>
                        <button type="submit" className="bg-brightColor text-white px-10 py-2 rounded-md hover:bg-hoverColor transition duration-300">
                            Book Appointment
                        </button>
                    </div>
                    <div>
                        <button
                            type="button"
                            onClick={closeForm}
                            className="bg-backgroundColor text-white px-10 py-2 rounded-md active:bg-red-500"
                        >
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
