const checkRemainingTime = (date) => {
    const deadline = new Date(date);
    const current = new Date();
    const remainingTime = deadline - current;
    if (remainingTime <= 0) {
        return 'Deadline Crossed';
    }

    const remainingMinutes = Math.round(remainingTime / 60000);
    if (remainingMinutes <= 0) {
        return `${Math.round(remainingTime / 1000)}s remaining`
    }
    if (remainingMinutes > 59) {
        const remainingHours = Math.round(remainingMinutes / 60);
        if (remainingHours > 23) {
            const remainingDays = Math.round(remainingHours / 24);
            if (remainingDays > 364) {
                const remainingYears = Math.round(remainingDays / 365);
                return `${remainingYears}y left`;
            }
            return `${remainingDays}d left`;
        }
        return `${remainingHours}hr left`;
    }
    return `${remainingMinutes}min left`
};

export default checkRemainingTime;