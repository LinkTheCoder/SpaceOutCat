import React from 'react';
import UpdatesCardsTop from '../../components/updates/UpdatesCardsTop';
import UpdatesCards from '../../components/updates/UpdatesCards';

export default function Updates() {
  return (
    <div>
       <UpdatesCardsTop title="1.0.0" note1="Release of the Space Out Cat!" note2="Avaible on Web & Google Play!"/>
       <UpdatesCards title="Coming Soon" note1="Space Out Cat avaible soon!" note2="Coming to Web & Google Play!"/>
    </div>
  );
}
