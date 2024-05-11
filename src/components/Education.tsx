'use client'

function Education() {

    const educationDetails =
    {
        title: 'Bachelor of Technology (IT)',
        college:
            'JIS College of Engineering',
        date: '2016-2020',
        cgpa: "8.74 CGPA"
    };

    return (
        <div className="p-12 bg-gray-900" id="education">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Education</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">My Academic Details</p>
                </div>

                <div className="mt-10 mx-auto flex flex-col justify-center">
                    <div className="mx-auto border-2 border-gray-600 bg-black p-4 rounded-xl w-1/2 text-gray-200 text-center">
                        <h5 className="font-semibold text-xl">{educationDetails.college}</h5>
                        <h5 className="text-md mt-3">{educationDetails.title}</h5>
                        <h5 className="text-md mt-1">{educationDetails.date}</h5>
                        <h5 className="text-md mt-1">{educationDetails.cgpa}</h5>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Education