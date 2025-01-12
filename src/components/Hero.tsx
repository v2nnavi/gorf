import { useState, useEffect } from 'react'

const images = [
  {
    mobile: 'assets/mobile.png',
    desktop: 'assets/desktop.png',
  },
  {
    mobile: 'assets/mobile2.png',
    desktop: 'assets/desktop2.png',
  },
  {
    mobile: 'assets/mobile3.png',
    desktop: 'assets/desktop3.png',
  },
  {
    mobile: 'assets/mobile4.png',
    desktop: 'assets/desktop4.png',
  },
  {
    mobile: 'assets/mobile5.png',
    desktop: 'assets/desktop5.png',
  },
]

function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const [activeLetterIndex, setActiveLetterIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLetterIndex((prev) => (prev + 1) % 4)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const getLetterClass = (index: number) => {
    return `inline-block transition-all duration-300 text-stroke ${
      activeLetterIndex === index ? 'scale-150' : 'scale-100'
    }`
  }

  const currentImageUrl = isMobile 
    ? images[currentImage].mobile 
    : images[currentImage].desktop

  return (
    <div className="flex-grow relative">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${currentImageUrl})` }}
      />
      
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-gorditas font-bold text-gorp-cream tracking-wider">
          <span className={getLetterClass(0)}>G</span>
          <span className={getLetterClass(1)}>O</span>
          <span className={getLetterClass(2)}>R</span>
          <span className={getLetterClass(3)}>F</span>
        </h1>
      </div>

      <button 
        onClick={previousImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-4xl sm:text-5xl md:text-6xl text-gorp-cream/80 hover:text-gorp-cream hover:scale-110 hover:-rotate-12 transition-all duration-300 font-gorditas text-stroke"
        aria-label="Previous image"
      >
        &lt;
      </button>

      <button 
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-4xl sm:text-5xl md:text-6xl text-gorp-cream/80 hover:text-gorp-cream hover:scale-110 hover:rotate-12 transition-all duration-300 font-gorditas text-stroke"
        aria-label="Next image"
      >
        &gt;
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentImage === index ? 'bg-gorp-cream scale-125' : 'bg-gorp-cream/50'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero