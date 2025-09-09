const RightPanel = () => {
  const artworks = [
    {
      image: "https://raw.githubusercontent.com/tiffanykha/tiffanykha.github.io/4ff0526b7a4c7cfeca41ce7e0b580511f4442d2e/imgs/Abstract_Water_Drop.JPG",
      title: "Abstract Water Splotch",
      year: "2021",
      dimensions: "Acrylic Painting"
    },
    {
      image: "https://raw.githubusercontent.com/tiffanykha/tiffanykha.github.io/4ff0526b7a4c7cfeca41ce7e0b580511f4442d2e/imgs/Billy_Goat_Hill.JPG",
      title: "Billy Goat Hill",
      year: "2021",
      dimensions: "Acrylic Painting"
    },
    {
      image: "https://raw.githubusercontent.com/tiffanykha/tiffanykha.github.io/4ff0526b7a4c7cfeca41ce7e0b580511f4442d2e/imgs/Bernal_Hill.JPG",
      title: "Bernal Heights Sunset",
      year: "2021",
      dimensions: "Acrylic Painting"
    },
    {
      image: "https://raw.githubusercontent.com/tiffanykha/tiffanykha.github.io/4ff0526b7a4c7cfeca41ce7e0b580511f4442d2e/imgs/China_Garden.JPG",
      title: "Beijing Fall",
      year: "2021",
      dimensions: "Acrylic Painting"
    },
    {
      image: "https://raw.githubusercontent.com/tiffanykha/tiffanykha.github.io/4ff0526b7a4c7cfeca41ce7e0b580511f4442d2e/imgs/night.jpg",
      title: "Starry Zion Night",
      year: "2020",
      dimensions: "Photography"
    }
  ];

  return (
    <div 
      className="h-screen overflow-y-auto bg-surface border-l border-border-light" 
      style={{
        msOverflowStyle: 'none',
        scrollbarWidth: 'none'
      }}
    >
      <style dangerouslySetInnerHTML={{
        __html: `
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `
      }} />
      
      <div className="p-8 lg:p-12">
        <div className="mb-12">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
            Artwork
          </h2>
          <div className="w-12 h-px bg-accent mb-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {artworks.map((artwork, index) => (
            <div key={index} className="group">
              <div className="gallery-item">
                <div className="relative overflow-hidden bg-background rounded-sm mb-6 p-0 group-hover:p-6 transition-all duration-300">
                  <img 
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
                      {artwork.title}
                    </h3>
                    <span className="text-sm text-muted-light font-medium">
                      {artwork.year}
                    </span>
                  </div>
                  
                  <div className="pt-1">
                    <span className="text-sm text-muted-light">
                      {artwork.dimensions}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightPanel;