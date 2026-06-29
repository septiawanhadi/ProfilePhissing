import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface InstagramPost {
  id: string;
  caption: string;
  permalink: string;
  mediaUrl: string;
  mediaType: string;
  likeCount: number;
  commentsCount: number;
}

interface InstagramProfile {
  username: string;
  biography: string;
  profilePictureUrl: string;
  website: string;
  followersCount: number;
  followsCount: number;
  posts: InstagramPost[];
}

export default function InstagramGallery() {
  const lang = useLanguage();
  const [profile, setProfile] = useState<InstagramProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://feeds.behold.so/yFAExy1MkjHcttF2Lyc6');
        if (!response.ok) {
          throw new Error('Failed to fetch Instagram feed');
        }
        const data = await response.json();
        setProfile(data);
      } catch (err: any) {
        setError(err.message || 'Error fetching feed');
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, []);

  if (error) {
    return null; // Silently hide if there is an API error to keep site pristine
  }

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-16 bg-[var(--color-bg)] border-t-2 border-[var(--color-fg)]">
      {/* Header section */}
      <div className="mb-12 border-b-2 border-[var(--color-fg)] pb-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-neutral-600 font-bold mb-2">
            {lang === 'en' ? 'Social // Instagram Feed' : 'Sosial // Feed Instagram'}
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-black uppercase text-[var(--color-fg)] tracking-tight">
            {lang === 'en' ? 'GALLERY ON INSTAGRAM' : 'GALERI DI INSTAGRAM'}
          </h2>
        </div>
        
        {profile && (
          <a 
            href={`https://www.instagram.com/${profile.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[var(--color-fg)] bg-[var(--color-bg-card)] px-4 py-2 font-mono text-xs uppercase tracking-widest font-bold hover:bg-[var(--color-hover-bg)] hover:text-[var(--color-hover-text)] transition-colors w-fit"
          >
            <span>@{profile.username}</span>
            <span className="text-neutral-500 font-normal">({profile.followersCount} followers)</span>
          </a>
        )}
      </div>

      {loading ? (
        /* Skeleton Grid Loader */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="border-2 border-[var(--color-fg)] p-4 bg-[var(--color-bg-card)] animate-pulse">
              <div className="bg-neutral-300 dark:bg-neutral-800 aspect-square mb-4"></div>
              <div className="h-4 bg-neutral-300 dark:bg-neutral-800 w-3/4 mb-2"></div>
              <div className="h-4 bg-neutral-300 dark:bg-neutral-800 w-1/2"></div>
            </div>
          ))}
        </div>
      ) : (
        /* Real posts grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {profile?.posts.map((post) => (
            <a 
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-[var(--color-fg)] p-4 bg-[var(--color-bg-card)] flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--color-fg)]"
            >
              <div>
                {/* Media Image Wrap */}
                <div className="border border-[var(--color-fg)] aspect-square overflow-hidden relative mb-4 bg-neutral-100">
                  <img 
                    src={post.mediaUrl} 
                    alt={post.caption ? post.caption.substring(0, 100) : 'Instagram Post'} 
                    loading="lazy"
                    className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                  />
                  {/* Media type indicators */}
                  {post.mediaType === 'CAROUSEL_ALBUM' && (
                    <div className="absolute top-2 right-2 bg-[var(--color-fg)] text-[var(--color-bg)] text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 border border-[var(--color-fg)]">
                      Album
                    </div>
                  )}
                  {post.mediaType === 'VIDEO' && (
                    <div className="absolute top-2 right-2 bg-[var(--color-fg)] text-[var(--color-bg)] text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 border border-[var(--color-fg)]">
                      Video
                    </div>
                  )}
                </div>
                
                {/* Caption snippet */}
                <p className="font-body text-xs text-neutral-600 line-clamp-3 mb-4 text-justify">
                  {post.caption}
                </p>
              </div>

              {/* Engagement Stats footer */}
              <div className="border-t border-dashed border-[var(--color-fg)] pt-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-bold">
                <div className="flex gap-4">
                  <span className="flex items-center gap-1.5">
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    {post.likeCount}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                    </svg>
                    {post.commentsCount}
                  </span>
                </div>
                <span className="text-[var(--color-accent)] group-hover:underline">
                  {lang === 'en' ? 'View Post →' : 'Lihat Postingan →'}
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
