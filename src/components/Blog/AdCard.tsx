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

const AdCard = ({ url }: { url: string }) => {
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
    <div className="voguemesh-ad-container my-10 relative group border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-white dark:bg-zinc-900 shadow-xl transition-all hover:shadow-2xl">
      {/* Google-style Ad Badge */}
      <div className="absolute top-3 left-3 z-20 bg-yellow-400 text-black text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-[0.1em] shadow-sm">
        Ad
      </div>

      {/* Close Button */}
      <div className="absolute top-3 right-3 z-20">
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsVisible(false);
          }}
          className="flex items-center justify-center w-6 h-6 rounded-full bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 text-zinc-500 transition-colors"
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
          <div className="relative w-full md:w-[35%] aspect-[16/9] md:aspect-square overflow-hidden border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800">
            <Image 
              src={url.includes('voguemesh.in') ? "/vog.png" : metadata.image} 
              alt={metadata.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        )}
        <div className="flex-1 p-5 md:p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                {metadata.siteName || new URL(url).hostname}
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-black text-zinc-900 dark:text-white mb-2 line-clamp-2 leading-tight tracking-tight">
              {metadata.title}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed">
              {metadata.description}
            </p>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider group-hover:underline">
              Visit Site
              <svg className="ml-1 w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
            <div className="px-5 py-2 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[10px] font-black uppercase tracking-[0.2em] shadow-lg transition-transform group-active:scale-95">
              SHOP NOW
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default AdCard;
