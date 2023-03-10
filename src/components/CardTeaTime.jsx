export default function CardTeaTime() {
    return ( 

<div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

<div className="rounded overflow-hidden">
  <div className="px-6 py-4 text-center">
    <div className="text-5xl mb-5">🍵</div>
    <div className="text-primary font-bold text-3xl mb-2">Stay purrly hydrated!</div>
    <p className="text-gray text-base">
    It's important to stay hydrated to avoid dehydration.
    To sink the blood and sugar pressure avoid drinks with caffeine and lot sugar.
    </p>
  </div>
  <div className="mb-7 px-6 pt-4 pb-2 text-center md:mb-0">
  <input
  type="checkbox"
  className="h-6 w-6 form-checkbox rounded text-primary focus:ring-primary"/>
  </div>
</div>
<div className="rounded overflow-hidden">
  <div className="px-6 py-4 text-center">
    <div className="text-5xl mb-5">🍱</div>
    <div className="text-primary font-bold text-3xl mb-2">Eat pawsomly!</div>
    <p className="text-gray text-base">
    Everybody need nutrition to get energy.
Listen to your body and mind.
We all have different metabolism, judge what's best just for yourself.
    </p>
  </div>
  <div className="mb-7 px-6 pt-4 pb-2 text-center md:mb-0">
  <input
  type="checkbox"
  className="h-6 w-6 form-checkbox rounded text-primary focus:ring-primary"/>
  </div>
</div>

<div className="rounded overflow-hidden">
  <div className="px-6 py-4 text-center">
    <div className="text-5xl mb-5">🍫</div>
    <div className="text-primary font-bold text-3xl mb-2">Feline sassy!</div>
    <p className="text-gray text-base">
 Treat your self when you have achived something good.
 Whetever it's chocolate or other eatable or drinkable thing. Eat things you enjoy in healthy amounts.
    </p>
  </div>
  <div className="mb-7 px-6 pt-4 pb-2 text-center md:mb-0">
  <input
  type="checkbox"
  className="h-6 w-6 form-checkbox rounded text-primary focus:ring-primary"/>
  </div>
</div>
</div>
  )
}
