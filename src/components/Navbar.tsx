function Navbar() {
  return (
    <nav className="bg-gorp-green shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14">
          <div className="flex items-center">
            <img 
              src="assets/logo.png" 
              alt="Logo" 
              className="h-6 sm:h-8 w-auto"
            />
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <a href="#home" className="text-sm sm:text-base font-comic text-gorp-cream hover:text-white transition-colors">Twitter</a>
            <a href="" className="text-sm sm:text-base font-comic text-gorp-cream hover:text-white transition-colors">discord</a>
            <a href="https://snek.fun" className="text-sm sm:text-base font-comic text-gorp-cream hover:text-white transition-colors">Snek.fun</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar