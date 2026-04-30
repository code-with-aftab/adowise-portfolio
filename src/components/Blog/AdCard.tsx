"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface AdMetadata {
  title: string;
  description: string;
  image: string;
  url: string;
  siteName: string;
}

const AdCard = ({ url, compact = false }: { url: string, compact?: boolean }) => {
  const [metadata, setMetadata] = useState<AdMetadata | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/og?url=${encodeURIComponent(url)}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setMetadata(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching ad metadata:", err);
        setLoading(false);
      });
  }, [url]);

  if (!isVisible) return null;

  // Placeholder while loading or if metadata fails
  if (loading || !metadata) {
    return (
      <div className="my-10 h-[200px] w-full animate-pulse rounded-xl bg-zinc-100 dark:bg-zinc-800" />
    );
  }

  return (
    <div className={`voguemesh-ad-container ${compact ? 'my-0' : 'my-10'} relative group border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-white dark:bg-zinc-900 shadow-xl transition-all hover:shadow-2xl`}>
      {/* Google-style Ad Badge */}
      <div className={`absolute top-2 left-2 z-20 bg-yellow-400 text-black ${compact ? 'text-[7px] font-bold' : 'text-[9px] font-black'} px-1.5 py-0.5 rounded uppercase tracking-[0.1em] shadow-sm`}>
        Ad
      </div>

      {/* Close Button */}
      <div className={`absolute ${compact ? 'top-1.5 right-1.5' : 'top-3 right-3'} z-20`}>
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsVisible(false);
          }}
          className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-500 transition-colors"
          aria-label="विज्ञापन बंद करें"
          title="विज्ञापन बंद करें"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <a href={url} target="_blank" rel="noopener noreferrer" className="flex flex-col md:flex-row h-full">
        {(metadata.image || url.includes('voguemesh.in')) && (
          <div className={`relative ${compact ? 'w-[40px] h-[40px] m-3 rounded-lg border' : 'w-full md:w-[35%] aspect-[16/9] md:aspect-square border-b md:border-b-0 md:border-r'} overflow-hidden border-zinc-200 dark:border-zinc-800`}>
            <Image 
              src={url.includes('voguemesh.in') ? "/vog.png" : metadata.image} 
              alt={metadata.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        )}
        <div className={`flex-1 ${compact ? 'p-3 pl-0' : 'p-5 md:p-6'} flex flex-col justify-between`}>
          <div>
            <div className={`flex items-center gap-2 ${compact ? 'mb-0.5' : 'mb-2'}`}>
              <span className={`${compact ? 'text-[8px] font-medium' : 'text-[10px] font-bold'} uppercase tracking-widest text-zinc-400 dark:text-zinc-500`}>
                {metadata.siteName || new URL(url).hostname}
              </span>
            </div>
            <h3 className={`${compact ? 'text-xs font-semibold' : 'text-lg md:text-xl font-black'} text-zinc-900 dark:text-white ${compact ? 'mb-1' : 'mb-2'} line-clamp-2 leading-tight tracking-tight`}>
              {metadata.title}
            </h3>
            {!compact && (
              <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed">
                {metadata.description}
              </p>
            )}
          </div>
          <div className={`${compact ? 'mt-2' : 'mt-6'} flex items-center justify-between`}>
            <div className={`flex items-center text-blue-600 dark:text-blue-400 ${compact ? 'text-[8px]' : 'text-xs'} font-bold uppercase tracking-wider group-hover:underline`}>
              Visit
              <svg className="ml-1 w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
            <div className={`${compact ? 'px-3 py-1 text-[8px] font-bold' : 'px-5 py-2 text-[10px] font-black'} rounded bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 uppercase tracking-[0.1em] shadow-lg transition-transform group-active:scale-95`}>
              SHOP
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default AdCard;
