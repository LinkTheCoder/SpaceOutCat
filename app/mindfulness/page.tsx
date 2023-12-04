import Header from '../../components/header';
import CardsMindfulness from '../../components/mindfulness/CardsMindfulness';
import CatBike from '../../public/img/CatBike.png';
import CatScratching from '../../public/img/CatScratching.png';
import CatGrumpy from '../../public/img/CatGrumpy.png';
import CatPlaying from '../../public/img/CatPlaying.png';

export default function Mindfulness() {

    return ( 
        <><Header/>
        <div className="grid w-full grid-cols-1 gap-6 p-8 lg:px-60 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        <CardsMindfulness path="/mindfulness/meditation" bg={CatBike} alt="Cat in a bike" title="Meditation" description="Exercises with timer"/>
<CardsMindfulness path="/mindfulness/anxiety" bg={CatScratching} alt="Cat scratching" title="Anxiety" description="Wind down with a thought diary"/>  
<CardsMindfulness path="/mindfulness/sns-detox" bg={CatGrumpy} alt="Grumpy cat" title="SNS Detox" description="Tips and including day counter"/>  
<CardsMindfulness path="/mindfulness/productivity" bg={CatPlaying} alt="Cat playing" title="Productivity" description="Get things done with a ToDo list"/>  
            </div>
            <div className="px-6 pt-4 pb-2 text-center mb-7 md:mb-0">
                </div></>
    )
}