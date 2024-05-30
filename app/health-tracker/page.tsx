import MoodTracker from '../../components/health-tracker/MoodTracker';
import ExcerciseTracker from '../../components/health-tracker/ExerciseTracker';
import SleepTracker from '../../components/health-tracker/SleepTracker';
import CardsTracker from '../../components/health-tracker/CardsTracker';
import Header from '../../components/header';

export default function HealthTracker() {  
  const MoodTrackerComponent = <MoodTracker />;
  const ExcerciseTrackerComponent = <ExcerciseTracker />;
  const SleepTrackerComponent = <SleepTracker />;

    return ( 
      <><Header/>
      <div className="grid grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      <CardsTracker emoji="🐱" summary='Mood Tracker' tracker={MoodTrackerComponent}/>
      <CardsTracker emoji="💪" summary='Exercise Tracker' tracker={ExcerciseTrackerComponent}/>
      <CardsTracker emoji="🛏️" summary='Sleep Tracker' tracker={SleepTrackerComponent}/>
        </div></>
  )
}
