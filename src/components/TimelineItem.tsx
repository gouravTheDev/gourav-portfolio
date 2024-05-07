'use client'
interface TimelineItemProps {
    title: string;
    description: string;
    date: string;
    company: string;
    reverse: boolean;
}

const TimelineItem = (timeLineObj: TimelineItemProps) => {
    const justify = timeLineObj.reverse ? 'justify-start' : 'justify-end';
    const padding = timeLineObj.reverse ? 'sm:pr-8' : 'sm:pl-8';
    const firstClass = `flex ${justify} w-full mx-auto items-center`;
    const secondClass = `w-full sm:w-1/2 ${padding}`;
    return (
        <div className="mt-6 sm:mt-0 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-center">
                <div className={firstClass}>
                    <div className={secondClass}>
                        <div className="p-4 bg-white rounded shadow">
                            <h2 className="font-semibold text-md">{timeLineObj.title}</h2>
                            <h2 className="font-semibold text-md">{timeLineObj.company}</h2>
                            <h3 className="font-medium text-sm mt-2">{timeLineObj.date}</h3>
                            <p className="mt-1 text-sm">{timeLineObj.description}</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-full bg-white w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-800 dark:text-blue-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                </div>
            </div>
        </div>

    );
};

export default TimelineItem;
