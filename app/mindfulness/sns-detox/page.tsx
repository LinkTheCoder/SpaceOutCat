import HeaderSNS from '../../../components/mindfulness/sns-detox/HeaderSNS'
import CardsColumns from '../../../components/mindfulness/CardsColumns'

export default function SNSDetox() {
    return ( 
      <><div>
        <HeaderSNS />
      </div><div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <CardsColumns emoji="🗑️" title='Delete SNS apps!' description='Use instead messages app to keep touch with friends and family. If you need to follow news use news sites. Find other ways to gain dopamine.' />
      <CardsColumns emoji="🙅‍♂️" title='Set limits!' description="Maybe it's hard to quit cold turkey, a good way might be to try limit your use.Maybe only use SNS certain days, only on weekends or not during vacation." />
      <CardsColumns emoji="😄" title='Gain time!' description='See it as a possibility to gain time to try other things in your life. More time for hobbies, well-being, excercises, learn new things or meeting people etc.'/>
        </div></>
  )
}