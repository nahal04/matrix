const calculateRemainingTime = (date) => {
    const deadline = new Date(date);
    const current = new Date();
    const remainingTime = deadline - current;
    if (remainingTime <= 0) {
        return 'Deadline Crossed';
    }

    const remainingMinutes = Math.floor(remainingTime / 60000);
    if (remainingMinutes <= 0) {
        return `${Math.floor(remainingTime / 1000)}s remaining`
    }
    if (remainingMinutes > 59) {
        const remainingHours = Math.floor(remainingMinutes / 60);
        if (remainingHours > 23) {
            const remainingDays = Math.floor(remainingHours / 24);
            if (remainingDays > 364) {
                const remainingYears = Math.floor(remainingDays / 365);
                return `${remainingYears}y left`;
            }
            return `${remainingDays}d left`;
        }
        return `${remainingHours}hr left`;
    }
    return `${remainingMinutes}min left`
};

export default calculateRemainingTime;