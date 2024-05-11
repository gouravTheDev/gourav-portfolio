'use client'
import TimelineItem from "./TimelineItem"

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}

function WorkExperience() {
    const workData = [
        {
            title: 'Software Engineer',
            company: 'Ernst & Young (EY GDS)',
            date: 'Aug 2022 - Present',
            description: 'Led Full Stack web app development for a crucial supply chain project, meeting tight deadlines and boosting efficiency. Designed scalable APIs with microservices, cutting response times by 30%, and integrated front-end using Node, React, Nest, and Next.js. Introduced blockchain integration for heightened security and faster transaction processing.',
        },
        {
            title: 'Software Engineer',
            company: 'Triophase Global',
            date: ' Aug 2021 – Jul 2022',
            description: 'Led front-end development with React.js and Vue.js, enhancing user experiences. Engineered microservices with Node.js, PHP, MySQL, and Docker, cutting response time by 40% for a major US WordPress hosting firm. Automated server deployment with Terraform, halving deployment time. Implemented automated backup for customer data with job scheduling and Amazon S3, improving data integrity and disaster recovery.',
        },
        {
            title: 'Software Developer',
            company: 'Webskitters Technology',
            date: 'Nov 2020 - Jul 2021',
            description: 'Crafted intricate front- end components and engineered high - performance APIs, resulting in a 25 % improvement in data manipulation efficiency.Streamlined database calls, boosting API response times to seamlessly accommodate a growing client base.',
        },
        {
            title: 'Full Stack Developer',
            company: 'Beanstalkedu Services',
            date: 'Jul 2019 – Oct 2020',
            description: 'Managed end-to-end product development utilizing PHP, MySQL, and more, culminating in a successful launch on live servers, accommodating thousands of daily customers',
        },
        // Add more work experience items as needed
    ];


    return (
        <div className="py-12 bg-gray-900 mx-auto" id="work">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Work Experience</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl mb-8">My journey till now</p>
                </div>
            </div>

            <div className="py-6 flex flex-col justify-center sm:py-12">
                <div className="py-3 sm:max-w-5xl sm:mx-auto w-full px-2 sm:px-0">

                    <div className="relative text-gray-700 antialiased text-sm font-semibold">

                        <div className="hidden sm:block w-1 bg-blue-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>

                        {workData.map((item, index) => (
                            <TimelineItem key={index} title={item.title} company={item.company} description={item.description} date={item.date} reverse={(index + 1) % 2 === 0 ? true : false} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience