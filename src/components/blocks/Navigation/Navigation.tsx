import React from 'react'

type Navigation = {
  name: string,
  idToScroll: string,
}
export const navigationItems: Navigation[] = [
  {name: 'Операции', idToScroll: 'services'},
  {name: 'Визуализация результата', idToScroll: 'vizualisation'},
  {name: 'Клиника', idToScroll: 'clinics'},
  {name: 'Результаты', idToScroll: 'results'},
  {name: 'Ответы', idToScroll: 'faq'},
];

export default function Navigation() {


  const handleNavigationClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const idToScroll = e.currentTarget.dataset.idScroll;
    const elementToScroll = document.querySelector(`#${idToScroll}`) as HTMLElement;
    elementToScroll.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  return (
    <nav className='navigation'>
      {navigationItems.map(navigationItem => (
        <a 
          className='navigation__link'
          key={navigationItem.idToScroll} 
          onClick={handleNavigationClick}
          data-id-scroll={navigationItem.idToScroll}
        >{navigationItem.name}</a>
      ))}
    </nav>
  )
}
