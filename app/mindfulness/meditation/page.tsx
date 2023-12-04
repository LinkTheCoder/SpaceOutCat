import HeaderTimer from '../../../components/mindfulness/meditation/HeaderTimer'
import CardsColumns from '../../../components/mindfulness/CardsColumns'

export default function Meditation() {
    return ( 
      <><div>
        <HeaderTimer />
      </div><div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        
      <CardsColumns emoji="🌬️" title='4-7-8 purr!' description='Emptying the lungs, breath in through the nose for 4 seconds. Then hold your breath and count 7 seconds. Exhaling forcefully through the mouth 8 seconds.' />
      <CardsColumns emoji="🚶" title='Untense your tails!' description='You can meditate while walking! Every 30-60 seconds relax your body tension,observe surrounding, listen to sounds and feel the smell of fresh air.' />
      <CardsColumns emoji="👐" title='Stretch your claws!' description="It's good to stretch when you sit still for long times. Stretching only for 5 minutes each hour while make you feel less stiff."/>
        </div></>
  )
}