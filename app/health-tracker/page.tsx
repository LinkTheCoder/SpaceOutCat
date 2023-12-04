import MoodTracker from '../../components/health-tracker/MoodTracker';
import DigestionTracker from '../../components/health-tracker/DigestionTracker';
import PeriodTracker from '../../components/health-tracker/PeriodTracker';
import CardsTracker from '../../components/health-tracker/CardsTracker';
import Header from '../../components/header';

export default function HealthTracker() {  
  const MoodTrackerComponent = <MoodTracker />;
  const DigestionTrackerComponent = <DigestionTracker />;
  const PeriodTrackerComponent = <PeriodTracker />;

    return ( 
      <><Header/>
      <div className="grid grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      <CardsTracker emoji="🐱" summary='Mood Tracker' tracker={MoodTrackerComponent}/>
      <CardsTracker emoji="💩" summary='Digestion Tracker' tracker={DigestionTrackerComponent}/>
      <CardsTracker emoji="🩸" summary='Period Tracker' tracker={PeriodTrackerComponent}/>
        </div></>
  )
}
