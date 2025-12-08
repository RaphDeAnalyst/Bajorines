import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, Calendar, Clock, Share2, ChevronUp } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  content: React.ReactNode;
}

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const posts: BlogPost[] = [
    {
      id: 1,
      title: "The Antioxidant Power of Tart Cherries",
      excerpt: "Why this superfood is taking the wellness world by storm and how it aids recovery.",
      image: "https://picsum.photos/800/600?random=20",
      category: "Wellness",
      date: "Oct 12, 2023",
      readTime: "5 min read",
      content: (
        <>
          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            In the realm of superfoods, few fruits punch as far above their weight as the tart cherry. While sweet cherries are a summer staple, their sour cousins (specifically the Montmorency variety used in Bajorines) are packing a serious nutritional payload that science is just beginning to fully unravel.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Anthocyanins: The Secret Weapon</h3>
          <p className="mb-6 leading-relaxed text-gray-700">
            The deep, rich red color of our beverage isn't just for show. It comes from anthocyanins, powerful antioxidants that fight oxidative stress in the body. Studies suggest that these compounds may have anti-inflammatory properties comparable to common over-the-counter pain relief, making them a favorite among endurance athletes.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Recovery and Sleep</h3>
          <p className="mb-6 leading-relaxed text-gray-700">
            Perhaps the most celebrated benefit of tart cherry juice is its impact on recovery and sleep. Bajorines contains naturally occurring melatonin, the hormone that regulates your sleep-wake cycle.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li><strong>Reduced Muscle Soreness:</strong> Consuming tart cherry extract before and after intense exercise can reduce strength loss and muscle pain.</li>
            <li><strong>Better Sleep Efficiency:</strong> Clinical trials have shown that tart cherry juice increases sleep time and efficiency in adults.</li>
            <li><strong>Faster Recovery:</strong> By mitigating oxidative damage, your body bounces back faster after a HIIT session or a long run.</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Verdict</h3>
          <p className="mb-6 leading-relaxed text-gray-700">
            Whether you are training for a marathon or just trying to get a better night's rest after a stressful week of work, the natural compounds found in every sip of Bajorines offer a simple, delicious way to support your body's intrinsic recovery systems.
          </p>
        </>
      )
    },
    {
      id: 2,
      title: "5 Mocktail Recipes for Summer",
      excerpt: "Elevate your hydration game with these simple, refreshing Bajorines mixology ideas.",
      image: "https://picsum.photos/800/600?random=21",
      category: "Recipes",
      date: "Nov 05, 2023",
      readTime: "3 min read",
      content: (
        <>
          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            Who said non-alcoholic drinks have to be boring? With the complex, tart profile of Bajorines, you have the perfect base for sophisticated mocktails that look as good as they taste. Here are our top picks for cooling down this season.
          </p>
          
          <div className="space-y-8 mt-8">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-bajorines-red mb-2">1. The Cherry Lime Rickey</h3>
              <p className="text-gray-700">A classic twist. Fill a glass with crushed ice. Pour 6oz of Bajorines over the ice. Squeeze in half a fresh lime and top with 2oz of sparkling water. Garnish with a lime wheel and a sprig of rosemary.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-bajorines-red mb-2">2. Spicy Cherry Mule</h3>
              <p className="text-gray-700">Kick things up a notch. Muddle 2 slices of jalapeño and a mint leaf in the bottom of a copper mug. Add ice. Pour equal parts Bajorines and high-quality Ginger Beer. The spice of the ginger pairs perfectly with the tartness of the cherry.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-bajorines-red mb-2">3. Bajorines Sunrise</h3>
              <p className="text-gray-700">Beautiful layers. Fill a tall glass with ice. Pour 4oz of fresh orange juice. Slowly pour 4oz of Bajorines over the back of a spoon so it settles at the bottom, creating a gradient effect. Garnish with an orange slice.</p>
            </div>
          </div>

          <p className="mt-8 leading-relaxed text-gray-700">
            These recipes are designed to be low in sugar but high in flavor. Next time you host a backyard gathering, skip the soda and serve something that sparks conversation and vitality.
          </p>
        </>
      )
    },
    {
      id: 3,
      title: "From Orchard to Can: Our Process",
      excerpt: "A deep dive into our sustainable farming practices and cold-press extraction method.",
      image: "https://picsum.photos/800/600?random=22",
      category: "Sustainability",
      date: "Dec 10, 2023",
      readTime: "6 min read",
      content: (
        <>
          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            At Bajorines, we believe that the best flavor comes from doing as little as possible to the raw ingredient. Our journey begins not in a lab, but in the sun-drenched orchards where our premium cherries are grown.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Sustainable Harvesting</h3>
          <p className="mb-6 leading-relaxed text-gray-700">
            We partner exclusively with family-owned farms that practice regenerative agriculture. This means no harsh pesticides and a focus on soil health. Our cherries are picked at the precise moment of peak ripeness—usually a window of just 48 hours—to ensure the sugar-to-acid ratio is exactly right.
          </p>

          <img src="https://picsum.photos/800/400?random=50" alt="Cherry Orchard" className="w-full h-64 object-cover rounded-xl mb-8" />

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Cold-Press Difference</h3>
          <p className="mb-6 leading-relaxed text-gray-700">
            Most commercial fruit juices are boiled to concentrate them, a process that destroys delicate vitamins and alters the flavor profile, resulting in that "cooked fruit" taste.
          </p>
          <p className="mb-6 leading-relaxed text-gray-700">
            We do things differently. Bajorines utilizes a hydraulic cold-press method. By applying massive pressure without heat, we extract the juice while keeping the cellular structure of the nutrients intact. It's inefficient, it's expensive, and it's absolutely worth it.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Canning for Freshness</h3>
          <p className="mb-6 leading-relaxed text-gray-700">
            Immediately after pressing, the juice is canned in 100% recyclable aluminum. We chose aluminum not just for the environment, but because it blocks 100% of UV light, ensuring that the drink you open tastes exactly like the fruit we picked.
          </p>
        </>
      )
    },
    {
      id: 4,
      title: "Morning vs Evening: When to Sip?",
      excerpt: "Optimizing your intake for energy in the AM or recovery in the PM.",
      image: "https://picsum.photos/800/600?random=35",
      category: "Wellness",
      date: "Jan 15, 2024",
      readTime: "4 min read",
      content: (
        <>
          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            One of the most common questions we get is: "When is the best time to drink Bajorines?" The answer depends entirely on your goals.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Morning Rush</h3>
          <p className="mb-6 leading-relaxed text-gray-700">
            Drinking tart cherry juice in the morning provides a natural source of copper, potassium, and manganese. It's a gentle wake-up call for your metabolism without the jitters of caffeine.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Evening Wind Down</h3>
          <p className="mb-6 leading-relaxed text-gray-700">
             Due to its natural melatonin content, many users find a small can 30 minutes before bed helps signal to the body that it's time to rest. It's the perfect nightcap for the health-conscious.
          </p>
        </>
      )
    },
    {
      id: 5,
      title: "Pairing Bajorines with Food",
      excerpt: "From dark chocolate to charcuterie, discover the perfect culinary companions.",
      image: "https://picsum.photos/800/600?random=42",
      category: "Lifestyle",
      date: "Feb 02, 2024",
      readTime: "3 min read",
      content: (
        <>
          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            Bajorines isn't just a solo act. Its complex tartness cuts through rich fats and complements earthy flavors beautifully.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li><strong>Dark Chocolate:</strong> The acidity of the cherry balances the bitterness of 70%+ cocoa.</li>
            <li><strong>Almonds & Walnuts:</strong> A handful of nuts and a cold can makes for a heart-healthy, satiating snack.</li>
            <li><strong>Soft Cheeses:</strong> Try it with Brie or Goat cheese. The fruit notes act like a liquid jam pairing.</li>
          </ul>
        </>
      )
    },
    {
      id: 6,
      title: "Recycling 101: The Aluminum Cycle",
      excerpt: "How your empty can becomes a new one in as little as 60 days.",
      image: "https://picsum.photos/800/600?random=55",
      category: "Sustainability",
      date: "Feb 20, 2024",
      readTime: "5 min read",
      content: (
        <>
          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            Did you know aluminum is infinitely recyclable? Unlike plastic, which degrades with each cycle, aluminum retains its properties forever.
          </p>
          <p className="mb-6 leading-relaxed text-gray-700">
            When you toss a Bajorines can in the recycling bin, it is melted down, rolled into sheets, and reformed into a new can—often returning to the shelf in less than 60 days. This process uses 95% less energy than creating new aluminum from raw ore.
          </p>
        </>
      )
    }
  ];

  const handleArticleClick = (post: BlogPost) => {
    setSelectedPost(post);
    // Smooth scroll to top of blog section so the user starts at the top of the article
    const blogSection = document.getElementById('blog');
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBackClick = () => {
    setSelectedPost(null);
  };

  const toggleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  const displayedPosts = isExpanded ? posts : posts.slice(0, 3);

  return (
    <section className="py-24 bg-gray-50 min-h-screen" id="blog">
      <div className="container mx-auto px-6">
        
        {/* VIEW: Single Article */}
        {selectedPost ? (
          <div className="max-w-4xl mx-auto animate-fade-in">
            {/* Back Nav */}
            <button 
              onClick={handleBackClick}
              className="flex items-center gap-2 text-gray-500 hover:text-bajorines-red transition-colors mb-8 group"
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Back to Articles
            </button>

            {/* Article Header */}
            <div className="mb-10">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="bg-bajorines-red/10 text-bajorines-red px-3 py-1 rounded-full font-bold uppercase tracking-wider text-xs">
                  {selectedPost.category}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {selectedPost.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  {selectedPost.readTime}
                </div>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {selectedPost.title}
              </h1>
            </div>

            {/* Featured Image */}
            <div className="rounded-3xl overflow-hidden shadow-xl mb-12 h-[400px]">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg prose-red max-w-none text-gray-700">
              {selectedPost.content}
            </div>

            {/* Article Footer */}
            <div className="border-t border-gray-200 mt-16 pt-8 flex justify-between items-center">
              <span className="font-bold text-gray-900">Share this article:</span>
              <div className="flex gap-4">
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* VIEW: Article List (Grid) */
          <>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div className="max-w-xl">
                <span className="text-bajorines-red font-bold tracking-wider uppercase text-sm">The Journal</span>
                <h2 className="font-display text-4xl font-bold text-gray-900 mt-2">Latest from the Orchard</h2>
              </div>
              <a 
                href="#" 
                onClick={toggleExpand}
                className="hidden md:flex items-center gap-2 text-bajorines-red font-semibold hover:gap-3 transition-all"
              >
                {isExpanded ? (
                  <>View Less <ChevronUp size={20} /></>
                ) : (
                  <>View All Articles <ArrowRight size={20} /></>
                )}
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {displayedPosts.map((post) => (
                <article 
                  key={post.id} 
                  onClick={() => handleArticleClick(post)}
                  className="group cursor-pointer flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wide text-gray-900 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-bajorines-red transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 mb-6 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="text-sm font-semibold text-gray-900 flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read Article <ArrowRight size={16} />
                    </span>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="mt-8 md:hidden">
               <a 
                 href="#" 
                 onClick={toggleExpand}
                 className="flex items-center justify-center gap-2 text-bajorines-red font-semibold"
                >
                {isExpanded ? (
                  <>View Less <ChevronUp size={20} /></>
                ) : (
                  <>View All Articles <ArrowRight size={20} /></>
                )}
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};