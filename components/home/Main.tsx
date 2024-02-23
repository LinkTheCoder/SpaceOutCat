import Activities from '../../public/img/Activities.gif';
import Sleeps from '../../public/img/Sleeps.png';
import Badges from '../../public/img/Badges.png';
import CardsRight from './CardsRight';
import CardsLeft from './CardsLeft';
import CardsImage from './CardsImages';

export default function Main() {  

    return ( 
        <div>
      {/* COLUMN 1 */}
    <div className="mt-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
    <CardsImage image={Activities} />
    <CardsRight title='How are you feline? 🐱' 
    description='Several exercises & tips for your health!'
    list1='🧘 Mindfullnes with timer'
    list2='📝 Anxiety diary'
    list3='📵 SNS detox with day counter'
    list4='📝 Productivity with a ToDo list'
    />

    {/* COLUMN 2 */}
    <div className='md:hidden block'>
<CardsImage image={Sleeps} />
</div>
    <CardsLeft title='Purrly sounds 💤' 
    description='A collection of soothing sounds to make you sleep & relax.'
    list1='🎹 Lofi music'
    list2='🌊 Nature sounds'
    list3='🐦 Animal sounds'
    list4='🖨️ Background noise'
    />
    <div className='hidden md:block'>
<CardsImage image={Sleeps} />
</div>

{/* COLUMN 3 */}
<CardsImage image={Badges} />
    <CardsRight title='pawsome achievements 🏅' 
    description='Complete challenges and collect badges!' 
    list1='🏅 Write an anxiety diary'
    list2='🏅 Stay away from SNS for over a week'
    list3='🏅 And more to be coming. . .'
    />
</div>            
        </div>
        
  );
};