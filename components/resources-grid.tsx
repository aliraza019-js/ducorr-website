export default function ResourcesGrid() {
  const resources = [
    {
      title: "Concrete Cathodic Protection",
      description: "Concrete Cathodic Protection is a technique used to prevent the corrosion of steel reinforcement in concrete structures by applying an electrical current, either through sacrificial anodes or an external power source. This method extends the lifespan of bridges, buildings, and other reinforced concrete structures by reducing rust formation.",
      videoTitle: "What is Concrete Cathodic Protection?",
      videoUrl: "https://www.youtube.com/watch?v=gxhMCDn-ITE",
      backgroundImage: "/images/resources/Cia+Rodriguez.png",
      relatedVideos: [
        {
          title: "How much does CP for concrete cost?",
          thumbnail: "/images/resources/ducorr-thumbnail.png",
          duration: "0:31",
          url: "https://www.youtube.com/watch?v=piVWJVhvwR4"
        },
        {
          title: "How does CP for concrete work & installed?",
          thumbnail: "/images/resources/ducorr-thumbnail.png", 
          duration: "2:00",
          url: "https://www.youtube.com/watch?v=Nd_9IhXvNkQ"
        },
        {
          title: "Why should I use CP for pipelines?",
          thumbnail: "/images/resources/ducorr-thumbnail.png",
          duration: "0:53",
          url: "https://www.youtube.com/watch?v=jZ1s9FI4eXk"
        }
      ],
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Marine Structures Cathodic Protection",
      description: "Marine Structures Cathodic Protection is a method used to prevent the corrosion of metal structures submerged in seawater, such as ship hulls, offshore platforms, and underwater pipelines. It works by applying a protective electrical current using sacrificial anodes (zinc, aluminum, or magnesium) or an impressed current system to stop metal deterioration. This technique extends the lifespan of marine assets, reduces maintenance costs, and ensures structural integrity in harsh saltwater environments.",
      videoTitle: "How Marine Structures Cathodic Protection?",
      videoUrl: "https://www.youtube.com/watch?v=xcOZUitNJ1Q&t=6s",
      backgroundImage: "/images/resources/marineshield.png",
      relatedVideos: [
        {
          title: "What is the Marineshield and why should I use it?",
          thumbnail: "/images/resources/ducorr-thumbnail.png",
          duration: "1:14",
          url: "https://www.youtube.com/watch?v=6RoFGLvSmrc"
        },
        {
          title: "Marineshield - Impressed Current Cathodic Protection",
          thumbnail: "/images/resources/ducorr-thumbnail.png",
          duration: "01:35",
          url: "https://www.youtube.com/watch?v=xcOZUitNJ1Q"
        },
        {
          title: "Does using CP in concrete have any environmental benefits?",
          thumbnail: "/images/resources/ducorr-thumbnail.png",
          duration: "0;52",
          url: "https://www.youtube.com/watch?v=lz5SclMURsk"
        }
      ],
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Above Ground Storage Tanks Cathodic Protection",
      description: "Above Ground Storage Tanks Cathodic Protection is a technique used to prevent corrosion of steel tanks that store liquids like oil, chemicals, and water. It works by using sacrificial anodes or an impressed current system to control electrochemical reactions that cause rust. This method helps extend the tank's lifespan, reduces maintenance costs, and ensures environmental safety by preventing leaks and structural failures.",
      videoTitle: "How Cathodic Protection Saves Above Ground Storage Tanks from Corrosion!",
      videoUrl: "https://www.youtube.com/watch?v=HXKTzpi-Xp4",
      backgroundImage: "/images/resources/aboveground.png",
      relatedVideos: [
        {
          title: "Does using CP in concrete have any environmental benefits?",
          thumbnail: "/images/resources/ducorr-thumbnail.png",
          duration: "0:52",
          url: "https://www.youtube.com/watch?v=lz5SclMURsk"
        },
        {
          title: "Installation of a cathodic protection for aboveground storage tank",
          thumbnail: "/images/resources/ducorr-thumbnail.png",
          duration: "2:18",
          url: "https://www.youtube.com/watch?v=lz5SclMURsk"
        },
        {
          title: "How to manage corrosion of parking basement?",
          thumbnail: "/images/resources/ducorr-thumbnail.png",
          duration: "2:19",
          url: "https://www.youtube.com/watch?v=jOA4ufcxAlc"
        }
      ],
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: "Underground Tanks Cathodic Protection",
      description: "Underground Tanks Cathodic Protection is a method used to prevent the corrosion of buried steel storage tanks, which are commonly used for fuel, water, and chemicals. It works by applying a protective electrical current through sacrificial anodes (magnesium, zinc) or an impressed current system to stop metal degradation caused by soil moisture and environmental factors. This technique helps extend the tank's lifespan, prevents leaks, and ensures environmental safety by reducing the risk of contamination.",
      videoTitle: "How Cathodic Protection Prevents Underground Tank Corrosion!",
      videoUrl: "https://www.youtube.com/watch?v=30nIJQXT1l0",
      backgroundImage: "/images/resources/Underground+Tank+Corrosion!.png",
      relatedVideos: [
        {
          title: "How to decide on the type of cathodic protection to use?",
          thumbnail: "/images/resources/ducorr-thumbnail.png",
          duration: "0:48",
          url: "https://www.youtube.com/watch?v=qivjScVq63w"
        },
        {
          title: "How does cathodic protection work?",
          thumbnail: "/images/resources/ducorr-thumbnail.png",
          duration: "0:41",
          url: "https://www.youtube.com/watch?v=L7K66OoomYk"
        },
        {
          title: "Why is CP Interesting - sustainability",
          thumbnail: "/images/resources/ducorr-thumbnail.png",
          duration: "1:32",
          url: "https://www.youtube.com/watch?v=7bdTaSVj8KY"
        }
      ],
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Header */}
              <div className="mb-6 flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#d9823f] text-white">
                  {resource.icon}
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {resource.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="mb-6 text-gray-600 leading-relaxed">
                {resource.description}
              </p>

              {/* Video Section */}
              <div className="mb-6">
                <h4 className="mb-3 font-semibold text-gray-900">
                  {resource.videoTitle}
                </h4>
                <a
                  href={resource.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div 
                    className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-100 cursor-pointer transition-transform hover:scale-[1.02]"
                    style={{
                      backgroundImage: `url(${resource.backgroundImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110">
                        <svg className="h-8 w-8 text-[#d9823f]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="rounded bg-black/70 px-2 py-1 text-xs text-white">
                        Click to view the YouTube video
                      </span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Related Videos */}
              <div className="border-t border-gray-200 pt-4">
                <h5 className="mb-4 font-medium text-gray-900">
                  Other related Videos
                </h5>
                <div className="grid gap-3">
                  {resource.relatedVideos.map((video, videoIndex) => (
                    <a
                      key={videoIndex}
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden rounded-lg bg-gray-50 transition-all duration-300 hover:bg-gray-100"
                    >
                      <div className="flex items-center gap-3 p-3">
                        {/* Thumbnail */}
                        <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md bg-gray-200">
                          <img 
                            src={video.thumbnail} 
                            alt={video.title}
                            className="h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm transition-transform group-hover:scale-110">
                              <svg className="h-4 w-4 text-[#d9823f]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                            </div>
                          </div>
                          {/* Duration badge */}
                          <div className="absolute bottom-1 right-1 rounded bg-black/70 px-1 py-0.5 text-xs text-white">
                            {video.duration}
                          </div>
                        </div>
                        
                        {/* Video info */}
                        <div className="flex-1 min-w-0">
                          <h6 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-[#d9823f] transition-colors">
                            {video.title}
                          </h6>
                          <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                            <span>Ducorr</span>
                            <span>•</span>
                            <span>{video.duration}</span>
                          </div>
                        </div>
                        
                        {/* Hover arrow */}
                        <div className="flex-shrink-0 opacity-0 transition-opacity group-hover:opacity-100">
                          <svg className="h-4 w-4 text-[#d9823f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 