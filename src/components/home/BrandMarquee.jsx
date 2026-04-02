import React from 'react';

const brands = [
  {
    name: 'slack',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.958 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.52 2.521h-2.522V8.834zM17.687 8.834a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.527 2.527 0 0 1 15.166 0a2.527 2.527 0 0 1 2.521 2.522v6.312zM15.166 18.958a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.166 24a2.527 2.527 0 0 1-2.521-2.52v-2.522h2.521zM15.166 17.687a2.527 2.527 0 0 1-2.521-2.521 2.527 2.527 0 0 1 2.521-2.521h6.313A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.522h-6.312z" />
      </svg>
    ),
  },
  {
    name: 'Dropbox',
    icon: (
      <svg viewBox="0 0 100 100" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
        <path d="M25 25 L50 10 L75 25 L50 40 Z"/>
        <path d="M75 25 L100 10 L75 55 L50 40 Z"/>
        <path d="M25 25 L50 40 L25 55 L0 40 Z"/>
        <path d="M25 55 L50 40 L75 55 L50 70 Z"/>
        <path d="M25 55 L50 70 L25 85 L0 70 Z"/>
      </svg>
    ),
  },
  {
    name: 'Webflow',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
         <path d="M22.56 12.85c0-.12 0-.21-.03-.3l-1.89-6.3c-.09-.3-.33-.48-.6-.48h-1.8c-.27 0-.51.18-.6.48l-1.5 5.01-1.5-5.01c-.09-.3-.33-.48-.6-.48h-1.8c-.27 0-.51.18-.6.48l-1.5 5.01-1.5-5.01c-.09-.3-.33-.48-.6-.48h-1.8c-.27 0-.51.18-.6.48l-1.89 6.3c-.03.09-.03.18-.03.3 0 .54.45.99.99.99h1.8c.45 0 .84-.3.96-.72l1.08-3.6 1.08 3.6c.12.42.51.72.96.72h1.8c.45 0 .84-.3.96-.72l1.08-3.6 1.08 3.6c.12.42.51.72.96.72h1.8c.45 0 .84-.3.96-.72l1.08-3.6 1.08 3.6c.12.42.51.72.96.72h1.8c.54 0 .99-.45.99-.99z"/>
      </svg>
    ),
  },
  {
    name: 'Spotify',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.5 17.3c-.2.3-.6.4-.9.2-2.5-1.5-5.7-1.8-9.4-1.1-.4.1-.8-.2-.9-.6-.1-.4.2-.8.6-.9 4.1-.8 7.6-.4 10.4 1.2.3.2.4.6.2.9zm1.2-3.3c-.3.4-.8.6-1.2.3-2.8-1.7-7.1-2.2-10.5-1.1-.5.1-1-.2-1.1-.6-.2-.5.1-1 .6-1.1 4-1.2 8.7-.6 12 1.4.3.3.4.8.2 1.1zm.1-3.4C15.2 8.5 9.1 8.3 5.5 9.4c-.6.2-1.2-.2-1.4-.7-.2-.6.2-1.2.7-1.4 4.3-1.3 11-1 15.4 1.6.5.3.7 1 .4 1.5-.4.5-1 .7-1.3.4z" />
      </svg>
    ),
  },
  {
    name: 'Remessa',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z" />
      </svg>
    ),
  },
];

const BrandMarquee = () => {
    // Duplicate the brands list multiple times to ensure seamless
    const displayBrands = [...brands, ...brands, ...brands, ...brands];

    return (
        <section className="py-10 bg-white overflow-hidden border-b border-gray-50">
            <div className="flex w-fit">
                <div className="flex animate-marquee whitespace-nowrap items-center gap-16 md:gap-32 px-12">
                    {displayBrands.map((brand, index) => (
                        <div 
                            key={`${brand.name}-${index}`}
                            className="flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer group"
                            title={brand.name}
                        >
                            <div className="flex items-center gap-4">
                                <div className="h-8 md:h-10 w-auto flex items-center">
                                    {brand.icon}
                                </div>
                                <span className="text-xl md:text-3xl font-extrabold tracking-tighter text-gray-800 capitalize leading-none">
                                    {brand.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandMarquee;