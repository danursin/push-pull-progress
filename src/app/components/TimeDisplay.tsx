interface TimeDisplayProps {
    seconds: number;
}

const TimeDisplay = ({ seconds }: TimeDisplayProps) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return (
        <span>
            {hours > 0 && `${hours} hours `}
            {minutes > 0 && `${minutes} minutes `}
            {remainingSeconds > 0 && `${remainingSeconds} seconds`}
        </span>
    );
};

export default TimeDisplay;
