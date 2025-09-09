const LeftPanel = () => {
  const writings = [
    {
      title: "Netskope S-1 Teardown",
      description: "Insights ahead of Netskope's cybersecurity IPO.",
      date: "September 2025",
      readTime: "12 min read",
      category: "S-1 Analysis",
      link: "https://docs.google.com/document/d/1xUwKu7mFv6VK4FLsI6q0c7cagFRIeGuFvnWvYwDMvJg/edit?usp=sharing"
    },
    {
      title: "AI for Professional Services",
      description: "An analysis of the growing opportunity in applied AI for vertical software companies, examining how AI integration is transforming professional services workflows.",
      date: "August 2025",
      readTime: "8 min read",
      category: "Thesis",
      link: "https://docs.google.com/document/d/1sFKe1S8FZcZQD4TC6eQYxpVuEswCI1Kns_wcfXLvvZU/edit?usp=sharing"
    }
  ];

  return (
    <div className="h-screen overflow-y-auto p-8 lg:p-12 bg-background">
      <div className="max-w-xl ml-auto space-y-16 text-right">
        {/* About Me Section */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-serif font-semibold text-foreground leading-tight">
              Tiffany Kha
            </h1>
            <div className="w-16 h-px bg-accent ml-auto"></div>
          </div>
        </section>

        {/* Selected Writings Section */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-serif font-semibold text-foreground">
              Selected Writings
            </h2>
            <div className="w-12 h-px bg-accent ml-auto"></div>
          </div>

          <div className="space-y-12">
            {writings.map((writing, index) => (
              <article key={index} className="group space-y-3">
                <div className="flex items-start justify-end">
                  <div className="text-xs text-muted-light mr-3">
                    {writing.date}
                  </div>
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    {writing.category}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
                    <a 
                      href={writing.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline"
                    >
                      {writing.title}
                    </a>
                  </h3>

                  <div className="flex justify-end">
                    <a 
                      href={writing.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-foreground transition-colors duration-200"
                    >
                      Read Article
                      <svg 
                        className="ml-1 w-3 h-3 transform transition-transform duration-200 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* About Me Section */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-serif font-semibold text-foreground">
              About Me
            </h2>
            <div className="w-12 h-px bg-accent ml-auto"></div>
          </div>
          
          <div className="space-y-4">
            <p className="text-base text-muted-foreground leading-relaxed">
              I'm a recent Wharton MBA graduate based in San Francisco. I spent the past few years at the intersection of finance and technology: most recently as a growth equity investor at BlackRock, in tech investing at a SPAC sponsor, on Uber's Strategic Finance team, and started my career in tech investment banking at JP Morgan. I studied Physics at Amherst College and got to work with atoms at near zero Kelvin.
            </p>
            
            <p className="text-base text-muted-foreground leading-relaxed">
              You can find me enjoying a good cup of coffee while sketching my next big idea, on a hike or long run somewhere, or in the studio.
            </p>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="space-y-6 p-6 bg-surface border border-border-light rounded-sm">
          <div className="space-y-3">
            <h3 className="text-xl font-serif font-semibold text-foreground">
              Stay Connected
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Subscribe to receive updates on new writings, artwork, and creative insights.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 border border-input bg-background text-foreground placeholder-muted-light rounded-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
              />
              <button className="px-6 py-3 bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors duration-200 rounded-sm">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-muted-light">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </section>

        {/* Social Links at Bottom */}
        <div className="flex justify-end items-center space-x-6 pt-8">
          <a 
            href="https://www.instagram.com/tkmakesthings/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors duration-200"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          
          <a 
            href="https://x.com/kha_tiff" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors duration-200"
            aria-label="Twitter"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          
          <a 
            href="mailto:tiffanyakha@gmail.com" 
            className="text-muted-foreground hover:text-accent transition-colors duration-200"
            aria-label="Email"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;