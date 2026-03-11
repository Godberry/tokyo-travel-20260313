import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import spotsData from '../data/spots_data.json';
import PixelCard from '../components/PixelCard';

export default function SpotsPage() {
  return (
    <div className="flex flex-col items-center justify-start min-h-[70vh] space-y-8 animate-fadeIn pb-12">
      {/* Hero Section */}
      <div className="text-center space-y-4 pt-4">
        <h1 className="text-3xl sm:text-5xl font-press-start text-primary" style={{ textShadow: '4px 4px 0px #EC4899' }}>
          [ 🏙️ 景點與餐廳 ]
        </h1>
        <p className="text-lg sm:text-xl font-vt323 text-secondary tracking-widest text-shadow-sm">
          ~ 東京探索指南：必去地標與美食 ~
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 w-full max-w-4xl">
        {spotsData.map((spot, index) => (
          <PixelCard key={index}>
            <div className="prose prose-invert max-w-none font-vt323 text-lg prose-headings:font-press-start prose-h1:text-xl prose-h1:text-primary prose-h1:border-b-4 prose-h1:border-dotted prose-h1:border-primary prose-h2:text-accent-pink prose-h3:text-secondary prose-a:text-accent-pink hover:prose-a:underline prose-img:rounded-none prose-img:border-4 prose-img:border-primary prose-ul:list-disc prose-li:marker:text-primary">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  img: ({ node, ...props }) => (
                    // Replace ../assest/ with /tokyo-travel-20260313/assest/ for images to account for GitHub Pages basePath
                    <img {...props} src={typeof props.src === 'string' ? props.src.replace('../assest/', '/tokyo-travel-20260313/assest/') : props.src} alt={props.alt || ''} className="w-full max-w-md my-4 shadow-[4px_4px_0_0_#18181B]" />
                  ),
                  input: ({ node, ...props }) => {
                    if (props.type === 'checkbox') {
                      return <span className="inline-block mr-2 text-accent-pink font-press-start text-xs">⭐</span>;
                    }
                    return <input {...props} />;
                  },
                  li: ({ node, ...props }) => {
                    // Override default task-list-item styling to align the star properly
                    const isTaskItem = props.className?.includes('task-list-item');
                    return (
                      <li {...props} className={`${props.className || ''} ${isTaskItem ? 'flex items-start my-2' : ''}`.trim()}>
                        {props.children}
                      </li>
                    );
                  }
                }}
              >
                {/* Remove frontmatter from the markdown content string */}
                {spot.content.replace(/^---[\s\S]*?---\n*/, '')}
              </ReactMarkdown>
            </div>
          </PixelCard>
        ))}
      </div>
    </div>
  );
}
