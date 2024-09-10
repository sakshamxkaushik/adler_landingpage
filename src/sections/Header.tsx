export const Header = () => {
  return (
    <div className="flex justify-center items-center relative top-3">
      <nav className="flex gap-1 p-0.5 border-white/15 rounded-full bg-white/10 backdrop-blur " >
        <a href="#" className="nav-item">
          ADLERVerse!
        </a>
        <a href="#" className="nav-item">
          3D Studio
        </a>
        <a href="#" className="nav-item">
          Competitions
        </a>
        <a href="#" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">
          IR 
        </a>
        <a href="#" className="nav-item">
          About Us
        </a>
      </nav>
    </div>
  );
};
