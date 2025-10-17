// Previous version of the code before refactor to infinite scroll with pagination
import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  readMoreUrl: string;
  category?: string;
}

const NewsMedia: React.FC = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [newsletterEmail, setNewsletterEmail] = useState<string>("");
  const [newsletterSuccess, setNewsletterSuccess] = useState<boolean>(false);
  const [newsletterError, setNewsletterError] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const newsletterRef = useRef<HTMLDivElement>(null);
  const ITEMS_PER_PAGE = 6;

  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  const fetchNews = useCallback(
    async (page: number = 1) => {
      if (!API_KEY) {
        setError(
          "News API key is missing. Please add VITE_NEWS_API_KEY to your environment variables."
        );
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const fromDate = new Date();
        fromDate.setMonth(fromDate.getMonth() - 1); // Last month
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=technology&from=${
            fromDate.toISOString().split("T")[0]
          }&sortBy=publishedAt&pageSize=20&page=${page}&apiKey=${API_KEY}`
        );
        const data = await response.json();

        if (data.status === "ok") {
          interface Article {
            title: string;
            description?: string;
            publishedAt: string;
            urlToImage?: string;
            url: string;
            source?: { name: string };
          }

          const mappedNews: NewsItem[] = data.articles.map(
            (article: Article, index: number) => ({
              id: (page - 1) * 20 + index + 1,
              title: article.title,
              excerpt: article.description || "No description available.",
              date: new Date(article.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              }),
              imageUrl:
                article.urlToImage ||
                "https://via.placeholder.com/400x250/0F172B/FFFFFF?text=No+Image",
              readMoreUrl: article.url,
              category: article.source?.name || "Technology",
            })
          );
          setNewsItems(mappedNews);
        } else {
          setError(data.message || "Failed to fetch news.");
        }
      } catch (err) {
        setError("An error occurred while fetching news.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
    [API_KEY]
  );

  useEffect(() => {
    fetchNews(currentPage);
  }, [fetchNews, currentPage]);

  const filteredNews = useMemo(() => {
    if (!searchTerm) return newsItems;
    return newsItems.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [newsItems, searchTerm]);

  const paginatedNews = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredNews.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredNews, currentPage]);

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const handleNewsletterSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!newsletterEmail) {
        setNewsletterError("Please enter your email address.");
        return;
      }
      // In production, integrate with a service like EmailJS or backend API
      // For demo, simulate success
      setTimeout(() => {
        setNewsletterSuccess(true);
        setNewsletterError(null);
        setNewsletterEmail("");
      }, 1000);
    },
    [newsletterEmail]
  );

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );
    }

    // Search bar animation
    if (searchRef.current) {
      gsap.fromTo(
        searchRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.5,
        }
      );
    }

    // Cards animation on scroll
    if (!loading && paginatedNews.length > 0) {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, x: -50 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
              delay: index * 0.2,
            }
          );
        }
      });
    }

    // Newsletter animation
    if (newsletterRef.current) {
      gsap.fromTo(
        newsletterRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: newsletterRef.current,
            start: "top 90%",
          },
        }
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [loading, paginatedNews]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0F172B] pt-16 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading latest news...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0F172B] pt-16 text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-cyan-400 text-black rounded-md hover:bg-cyan-300 transition-colors"
            aria-label="Retry loading news"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const featuredItem = paginatedNews[0];

  return (
    <div className="min-h-screen bg-[#0F172B] pt-16 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900/50 to-[#0F172B]/80 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1500px] mx-auto text-center" ref={heroRef}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            News & Media
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stay informed with the latest updates, press releases, and media
            coverage from our journey in technology and innovation.
          </p>
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search news articles..."
              value={searchTerm}
              onChange={handleSearch}
              ref={searchRef}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
              aria-label="Search news articles"
            />
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredItem && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1500px] mx-auto">
            <article
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg shadow-cyan-500/5 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 border border-slate-700/50"
              ref={(el) => {
                if (
                  el &&
                  el instanceof HTMLDivElement &&
                  cardsRef.current[0] !== el
                ) {
                  cardsRef.current[0] = el;
                }
              }}
              role="article"
              aria-labelledby={`featured-title-${featuredItem.id}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={featuredItem.imageUrl}
                  alt={featuredItem.title}
                  className="w-full h-64 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-sm text-cyan-400 font-medium uppercase tracking-wide">
                    {featuredItem.category} • {featuredItem.date}
                  </span>
                  <h2
                    id={`featured-title-${featuredItem.id}`}
                    className="mt-2 text-2xl lg:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 leading-tight"
                  >
                    {featuredItem.title}
                  </h2>
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <p className="text-gray-300 leading-relaxed mb-6">
                  {featuredItem.excerpt}
                </p>
                <a
                  href={featuredItem.readMoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-400 hover:text-white font-medium transition-colors duration-300"
                  aria-label={`Read more about ${featuredItem.title}`}
                >
                  Read Full Article
                  <svg
                    className="w-5 h-5 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* News Grid Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1500px] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Latest Updates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedNews.slice(1).map((item, index) => (
              <article
                key={item.id}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg shadow-cyan-500/5 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 border border-slate-700/50"
                ref={(el) => {
                  if (el && el instanceof HTMLDivElement) {
                    cardsRef.current[index + 1] = el;
                  }
                }}
                role="article"
                aria-labelledby={`title-${item.id}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="absolute top-3 right-3 px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs font-medium rounded">
                    {item.category}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-sm text-gray-400 font-medium uppercase tracking-wide">
                    {item.date}
                  </span>
                  <h3
                    id={`title-${item.id}`}
                    className="mt-2 text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300"
                  >
                    {item.title}
                  </h3>
                  <p className="mt-3 text-gray-300 leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                  <a
                    href={item.readMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 text-cyan-400 hover:text-white font-medium transition-colors duration-300"
                    aria-label={`Read more about ${item.title}`}
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav
              className="flex justify-center items-center mt-12 space-x-2"
              aria-label="Pagination navigation"
            >
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="cursor-pointer px-4 py-2 rounded-md transition-colors flex items-center bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-slate-800/50"
                aria-label="Go to previous page"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Previous
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-2 rounded-md transition-colors cursor-pointer ${
                      currentPage === page
                        ? "bg-cyan-400 text-black font-medium"
                        : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50"
                    }`}
                    aria-label={`Go to page ${page}`}
                    aria-current={currentPage === page ? "page" : undefined}
                  >
                    {page}
                  </button>
                )
              )}

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="cursor-pointer px-4 py-2 rounded-md transition-colors flex items-center bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-slate-800/50"
                aria-label="Go to next page"
              >
                Next
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </nav>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section
        ref={newsletterRef}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900/30 to-[#0F172B]/50"
      >
        <div className="max-w-[1500px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest news, insights, and
            exclusive updates delivered straight to your inbox.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                aria-label="Email address for newsletter"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-black font-medium rounded-lg hover:from-cyan-300 hover:to-blue-300 transition-all duration-300 disabled:opacity-50"
                disabled={newsletterSuccess}
                aria-label="Subscribe to newsletter"
              >
                {newsletterSuccess ? "Subscribed!" : "Subscribe"}
              </button>
            </div>
            {newsletterError && (
              <p className="mt-2 text-red-400 text-sm">{newsletterError}</p>
            )}
            {newsletterSuccess && (
              <p className="mt-2 text-green-400 text-sm">
                Thank you for subscribing!
              </p>
            )}
          </form>
          <p className="mt-4 text-sm text-gray-400">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Media Links Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1500px] mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8 text-gray-300">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              aria-label="Follow us on Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              aria-label="Follow us on LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              aria-label="Subscribe to our YouTube channel"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsMedia;

// This is the implementation of an infinite scroll for the NewsMedia component
// import React, {
//   useEffect,
//   useRef,
//   useState,
//   useCallback,
//   useMemo,
// } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// interface NewsItem {
//   id: number;
//   title: string;
//   excerpt: string;
//   date: string;
//   imageUrl: string;
//   readMoreUrl: string;
//   category?: string;
// }

// const NewsMedia = () => {
//   const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [debouncedSearch, setDebouncedSearch] = useState<string>("");
//   const [newsletterEmail, setNewsletterEmail] = useState<string>("");
//   const [newsletterSuccess, setNewsletterSuccess] = useState<boolean>(false);
//   const [newsletterError, setNewsletterError] = useState<string | null>(null);
//   const [query, setQuery] = useState<string>("technology");
//   const [nextPage, setNextPage] = useState<number>(1);
//   const [hasMore, setHasMore] = useState<boolean>(true);
//   const heroRef = useRef<HTMLDivElement>(null);
//   const searchRef = useRef<HTMLInputElement>(null);
//   const sentinelRef = useRef<HTMLDivElement>(null);
//   const newsletterRef = useRef<HTMLDivElement>(null);
//   const PAGE_SIZE = 8;

//   const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

//   const loadNews = useCallback(
//     async (page: number, append: boolean = false) => {
//       if (!API_KEY) {
//         setError(
//           "News API key is missing. Please add VITE_NEWS_API_KEY to your environment variables."
//         );
//         setLoading(false);
//         return;
//       }

//       try {
//         setLoading(true);
//         setError(null);
//         const fromDate = new Date();
//         fromDate.setMonth(fromDate.getMonth() - 1);
//         const response = await fetch(
//           `https://newsapi.org/v2/everything?q=${encodeURIComponent(
//             query
//           )}&from=${
//             fromDate.toISOString().split("T")[0]
//           }&sortBy=publishedAt&pageSize=${PAGE_SIZE}&page=${page}&apiKey=${API_KEY}`
//         );
//         const data = await response.json();

//         if (data.status === "ok") {
//           interface Article {
//             title: string;
//             description?: string;
//             publishedAt: string;
//             urlToImage?: string;
//             url: string;
//             source?: { name: string };
//           }

//           const mappedNews: NewsItem[] = data.articles.map(
//             (article: Article, index: number) => ({
//               id: append ? newsItems.length + index + 1 : index + 1,
//               title: article.title,
//               excerpt: article.description || "No description available.",
//               date: new Date(article.publishedAt).toLocaleDateString("en-US", {
//                 month: "long",
//                 day: "numeric",
//                 year: "numeric",
//               }),
//               imageUrl:
//                 article.urlToImage ||
//                 "https://via.placeholder.com/400x250/0F172B/FFFFFF?text=No+Image",
//               readMoreUrl: article.url,
//               category: article.source?.name || "Technology",
//             })
//           );

//           if (append) {
//             setNewsItems((prev) => [...prev, ...mappedNews]);
//           } else {
//             setNewsItems(mappedNews);
//           }

//           if (mappedNews.length < PAGE_SIZE) {
//             setHasMore(false);
//           }
//         } else {
//           setError(data.message || "Failed to fetch news.");
//         }
//       } catch (err) {
//         setError("An error occurred while fetching news.");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     },
//     [API_KEY, query, newsItems.length, PAGE_SIZE]
//   );

//   useEffect(() => {
//     loadNews(1, false);
//   }, [loadNews]);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebouncedSearch(searchTerm);
//     }, 300);
//     return () => clearTimeout(timer);
//   }, [searchTerm]);

//   useEffect(() => {
//     const newQuery = debouncedSearch || "technology";
//     if (newQuery !== query) {
//       setQuery(newQuery);
//       setNewsItems([]);
//       setHasMore(true);
//       setNextPage(1);
//       loadNews(1, false);
//     }
//   }, [debouncedSearch, query, loadNews]);

//   const filteredNews = useMemo(() => {
//     if (!searchTerm) return newsItems;
//     return newsItems.filter(
//       (item) =>
//         item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         (item.category &&
//           item.category.toLowerCase().includes(searchTerm.toLowerCase()))
//     );
//   }, [newsItems, searchTerm]);

//   const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//   }, []);

//   const handleNewsletterSubmit = useCallback(
//     (e: React.FormEvent) => {
//       e.preventDefault();
//       if (!newsletterEmail) {
//         setNewsletterError("Please enter your email address.");
//         return;
//       }
//       // In production, integrate with a service like EmailJS or backend API
//       // For demo, simulate success
//       setTimeout(() => {
//         setNewsletterSuccess(true);
//         setNewsletterError(null);
//         setNewsletterEmail("");
//       }, 1000);
//     },
//     [newsletterEmail]
//   );

//   // Hero animation
//   useEffect(() => {
//     if (heroRef.current) {
//       gsap.fromTo(
//         heroRef.current,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           ease: "power3.out",
//         }
//       );
//     }
//   }, []);

//   // Search bar animation
//   useEffect(() => {
//     if (searchRef.current) {
//       gsap.fromTo(
//         searchRef.current,
//         { opacity: 0, scale: 0.95 },
//         {
//           opacity: 1,
//           scale: 1,
//           duration: 0.8,
//           ease: "power3.out",
//           delay: 0.5,
//         }
//       );
//     }
//   }, []);

//   // Newsletter animation
//   useEffect(() => {
//     if (newsletterRef.current) {
//       gsap.fromTo(
//         newsletterRef.current,
//         { opacity: 0, y: 30 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: newsletterRef.current,
//             start: "top 90%",
//           },
//         }
//       );
//     }

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   // Infinite scroll observer
//   useEffect(() => {
//     const sentinel = sentinelRef.current;
//     if (!sentinel) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && hasMore && !loading) {
//           loadNews(nextPage, true);
//           setNextPage((prev) => prev + 1);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     observer.observe(sentinel);
//     return () => observer.disconnect();
//   }, [hasMore, loading, nextPage, loadNews]);

//   if (loading && newsItems.length === 0) {
//     return (
//       <div className="min-h-screen bg-[#0F172B] pt-16 text-white flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
//           <p className="text-gray-300">Loading latest news...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error && newsItems.length === 0) {
//     return (
//       <div className="min-h-screen bg-[#0F172B] pt-16 text-white flex items-center justify-center">
//         <div className="text-center">
//           <p className="text-red-400 mb-4">{error}</p>
//           <button
//             onClick={() => window.location.reload()}
//             className="px-4 py-2 bg-cyan-400 text-black rounded-md hover:bg-cyan-300 transition-colors"
//             aria-label="Retry loading news"
//           >
//             Retry
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const featuredItem = filteredNews[0];

//   const animateCard = (el: HTMLDivElement | null) => {
//     if (el) {
//       gsap.fromTo(
//         el,
//         { opacity: 0, x: -50 },
//         {
//           opacity: 1,
//           x: 0,
//           duration: 0.8,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: el,
//             start: "top 80%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#0F172B] pt-16 text-white">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-slate-900/50 to-[#0F172B]/80 py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-[1500px] mx-auto text-center" ref={heroRef}>
//           <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//             News & Media
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
//             Stay informed with the latest updates, press releases, and media
//             coverage from our journey in technology and innovation.
//           </p>
//           {/* Search Bar */}
//           <div className="max-w-md mx-auto">
//             <input
//               type="text"
//               placeholder="Search news articles..."
//               value={searchTerm}
//               onChange={handleSearch}
//               ref={searchRef}
//               className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
//               aria-label="Search news articles"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Featured Article */}
//       {featuredItem && (
//         <section className="py-16 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-[1500px] mx-auto">
//             <article
//               className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg shadow-cyan-500/5 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 border border-slate-700/50"
//               ref={animateCard}
//               role="article"
//               aria-labelledby={`featured-title-${featuredItem.id}`}
//             >
//               <div className="relative overflow-hidden">
//                 <img
//                   src={featuredItem.imageUrl}
//                   alt={featuredItem.title}
//                   className="w-full h-64 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-500"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//                 <div className="absolute bottom-4 left-4 right-4">
//                   <span className="text-sm text-cyan-400 font-medium uppercase tracking-wide">
//                     {featuredItem.category} • {featuredItem.date}
//                   </span>
//                   <h2
//                     id={`featured-title-${featuredItem.id}`}
//                     className="mt-2 text-2xl lg:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 leading-tight"
//                   >
//                     {featuredItem.title}
//                   </h2>
//                 </div>
//               </div>
//               <div className="p-6 lg:p-8">
//                 <p className="text-gray-300 leading-relaxed mb-6">
//                   {featuredItem.excerpt}
//                 </p>
//                 <a
//                   href={featuredItem.readMoreUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center text-cyan-400 hover:text-white font-medium transition-colors duration-300"
//                   aria-label={`Read more about ${featuredItem.title}`}
//                 >
//                   Read Full Article
//                   <svg
//                     className="w-5 h-5 ml-1"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M9 5l7 7-7 7"
//                     />
//                   </svg>
//                 </a>
//               </div>
//             </article>
//           </div>
//         </section>
//       )}

//       {/* News Grid Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-[1500px] mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//             Latest Updates
//           </h2>
//           {filteredNews.length > (featuredItem ? 1 : 0) && (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredNews.slice(featuredItem ? 1 : 0).map((item) => (
//                 <article
//                   key={item.id}
//                   className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg shadow-cyan-500/5 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 border border-slate-700/50"
//                   ref={animateCard}
//                   role="article"
//                   aria-labelledby={`title-${item.id}`}
//                 >
//                   <div className="relative overflow-hidden">
//                     <img
//                       src={item.imageUrl}
//                       alt={item.title}
//                       className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
//                       loading="lazy"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                     <span className="absolute top-3 right-3 px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs font-medium rounded">
//                       {item.category}
//                     </span>
//                   </div>
//                   <div className="p-6">
//                     <span className="text-sm text-gray-400 font-medium uppercase tracking-wide">
//                       {item.date}
//                     </span>
//                     <h3
//                       id={`title-${item.id}`}
//                       className="mt-2 text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300"
//                     >
//                       {item.title}
//                     </h3>
//                     <p className="mt-3 text-gray-300 leading-relaxed line-clamp-3">
//                       {item.excerpt}
//                     </p>
//                     <a
//                       href={item.readMoreUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center mt-4 text-cyan-400 hover:text-white font-medium transition-colors duration-300"
//                       aria-label={`Read more about ${item.title}`}
//                     >
//                       Read More
//                       <svg
//                         className="w-4 h-4 ml-1"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M9 5l7 7-7 7"
//                         />
//                       </svg>
//                     </a>
//                   </div>
//                 </article>
//               ))}
//               {loading && filteredNews.length > 0 && (
//                 <div className="col-span-full text-center py-8">
//                   <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400 mx-auto mb-2"></div>
//                   <p className="text-gray-300">Loading more articles...</p>
//                 </div>
//               )}
//               {!hasMore && filteredNews.length > 0 && (
//                 <div className="col-span-full text-center py-8 text-gray-400">
//                   No more articles to load.
//                 </div>
//               )}
//               {hasMore && !loading && (
//                 <div ref={sentinelRef} className="col-span-full h-20" />
//               )}
//             </div>
//           )}
//           {error && newsItems.length > 0 && (
//             <div className="text-center py-8">
//               <p className="text-red-400 mb-4">{error}</p>
//               <button
//                 onClick={() => loadNews(1, false)}
//                 className="px-4 py-2 bg-cyan-400 text-black rounded-md hover:bg-cyan-300 transition-colors"
//                 aria-label="Retry loading news"
//               >
//                 Retry
//               </button>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Newsletter Signup */}
//       <section
//         ref={newsletterRef}
//         className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900/30 to-[#0F172B]/50"
//       >
//         <div className="max-w-[1500px] mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//             Stay Updated
//           </h2>
//           <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//             Subscribe to our newsletter for the latest news, insights, and
//             exclusive updates delivered straight to your inbox.
//           </p>
//           <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
//             <div className="flex flex-col sm:flex-row gap-2">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={newsletterEmail}
//                 onChange={(e) => setNewsletterEmail(e.target.value)}
//                 className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
//                 aria-label="Email address for newsletter"
//                 required
//               />
//               <button
//                 type="submit"
//                 className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-black font-medium rounded-lg hover:from-cyan-300 hover:to-blue-300 transition-all duration-300 disabled:opacity-50"
//                 disabled={newsletterSuccess}
//                 aria-label="Subscribe to newsletter"
//               >
//                 {newsletterSuccess ? "Subscribed!" : "Subscribe"}
//               </button>
//             </div>
//             {newsletterError && (
//               <p className="mt-2 text-red-400 text-sm">{newsletterError}</p>
//             )}
//             {newsletterSuccess && (
//               <p className="mt-2 text-green-400 text-sm">
//                 Thank you for subscribing!
//               </p>
//             )}
//           </form>
//           <p className="mt-4 text-sm text-gray-400">
//             We respect your privacy. Unsubscribe at any time.
//           </p>
//         </div>
//       </section>

//       {/* Media Links Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-[1500px] mx-auto text-center">
//           <h2 className="text-2xl font-bold mb-8 text-gray-300">Follow Us</h2>
//           <div className="flex justify-center space-x-6">
//             <a
//               href="https://twitter.com/Proforcedefence"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
//               aria-label="Follow us on Twitter"
//             >
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//               </svg>
//             </a>
//             <a
//               href="https://www.linkedin.com/company/proforcelimited"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
//               aria-label="Follow us on LinkedIn"
//             >
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//               </svg>
//             </a>
//             <a
//               href="https://www.youtube.com/@PROFORCEofficial"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
//               aria-label="Subscribe to our YouTube channel"
//             >
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//               </svg>
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default NewsMedia;
