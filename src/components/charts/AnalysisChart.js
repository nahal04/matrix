import useReport from "../../hooks/use-report";
import PieChart from "./PieChart";

const AnalysisChart = () => {
    const today = new Date().getDay();
    const report = useReport();
    const { total, finished, deadlineCrossed } = report;
    const initiative = (total[today]) / (deadlineCrossed[today] + total[today] + finished[today]) * 100;
    const motivation = finished[today] / (deadlineCrossed[today] + total[today] + finished[today]) * 100;
    const procrastination = (deadlineCrossed[today] ) / (total[today] + finished[today] + deadlineCrossed[today]) * 100;
    console.log(initiative, procrastination, motivation);
    return <PieChart initiative={initiative} motivation={motivation} procrastination={procrastination} />
};

export default AnalysisChart;