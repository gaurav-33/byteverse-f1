import { useState } from 'react';
import { Link, useLocation } from 'wouter';

export const NavBar = () => {
    const [location] = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const NavLinks = ({ mobile = false }) => (
        <>
            <Link href="/tracks" className={`uppercase tracking-widest transition-all ${mobile ? 'text-sm font-bold py-3 px-4 w-full text-center hover:bg-white/5 rounded-xl border border-transparent hover:border-white/5' : 'px-5 py-2 text-sm rounded-full'} ${location === '/tracks' ? (mobile ? 'text-primary bg-white/5 border-white/5' : 'text-white bg-white/10') : 'text-gray-300 hover:text-white hover:bg-white/10'}`} onClick={() => mobile && setIsMobileMenuOpen(false)}>
                Tracks
            </Link>
            <Link href="/schedule" className={`uppercase tracking-widest transition-all ${mobile ? 'text-sm font-bold py-3 px-4 w-full text-center hover:bg-white/5 rounded-xl border border-transparent hover:border-white/5' : 'px-5 py-2 text-sm rounded-full'} ${location === '/schedule' ? (mobile ? 'text-primary bg-white/5 border-white/5' : 'text-white bg-white/10') : 'text-gray-300 hover:text-white hover:bg-white/10'}`} onClick={() => mobile && setIsMobileMenuOpen(false)}>
                Schedule
            </Link>
            <Link href="/prizes" className={`uppercase tracking-widest transition-all ${mobile ? 'text-sm font-bold py-3 px-4 w-full text-center hover:bg-white/5 rounded-xl border border-transparent hover:border-white/5' : 'px-5 py-2 text-sm rounded-full'} ${location === '/prizes' ? (mobile ? 'text-primary bg-white/5 border-white/5' : 'text-white bg-white/10') : 'text-gray-300 hover:text-white hover:bg-white/10'}`} onClick={() => mobile && setIsMobileMenuOpen(false)}>
                Prizes
            </Link>
            <Link href="/pit-crew" className={`uppercase tracking-widest transition-all ${mobile ? 'text-sm font-bold py-3 px-4 w-full text-center hover:bg-white/5 rounded-xl border border-transparent hover:border-white/5' : 'px-5 py-2 text-sm rounded-full'} ${location === '/pit-crew' ? (mobile ? 'text-primary bg-white/5 border-white/5' : 'text-white bg-white/10') : 'text-gray-300 hover:text-white hover:bg-white/10'}`} onClick={() => mobile && setIsMobileMenuOpen(false)}>
                Pit Crew
            </Link>
            <Link href="/gallery" className={`uppercase tracking-widest transition-all ${mobile ? 'text-sm font-bold py-3 px-4 w-full text-center hover:bg-white/5 rounded-xl border border-transparent hover:border-white/5' : 'px-5 py-2 text-sm rounded-full'} ${location === '/gallery' ? (mobile ? 'text-primary bg-white/5 border-white/5' : 'text-white bg-white/10') : 'text-gray-300 hover:text-white hover:bg-white/10'}`} onClick={() => mobile && setIsMobileMenuOpen(false)}>
                Gallery
            </Link>
            <Link href="/about" className={`uppercase tracking-widest transition-all ${mobile ? 'text-sm font-bold py-3 px-4 w-full text-center hover:bg-white/5 rounded-xl border border-transparent hover:border-white/5' : 'px-5 py-2 text-sm rounded-full'} ${location === '/about' ? (mobile ? 'text-primary bg-white/5 border-white/5' : 'text-white bg-white/10') : 'text-gray-300 hover:text-white hover:bg-white/10'}`} onClick={() => mobile && setIsMobileMenuOpen(false)}>
                About
            </Link>
        </>
    );

    return (
        <nav className="fixed top-4 md:top-6 left-0 right-0 z-50 flex flex-col items-center px-4 pointer-events-none">
            <div className="bg-carbon/80 backdrop-blur-md border border-white/10 rounded-full py-2 px-4 md:py-3 md:px-6 flex items-center justify-between pointer-events-auto shadow-2xl shadow-black/50 w-full md:w-auto gap-4 md:gap-4 lg:gap-8 relative z-50">

                {/* Logo */}
                <Link href="/" className="text-lg md:text-xl font-bold tracking-tighter text-white flex items-center gap-2 cursor-pointer whitespace-nowrap">
                    <span className="text-primary material-icons text-xl md:text-2xl">speed</span>
                    BYTEVERSE
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5">
                    <NavLinks />
                </div>

                {/* Login & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <Link href="/login" className="hidden md:block text-primary hover:text-white transition-colors text-sm font-bold uppercase tracking-widest border-l border-white/10 pl-6 cursor-pointer">
                        Login
                    </Link>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                        onClick={toggleMenu}
                    >
                        <span className="material-icons">{isMobileMenuOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu (Column Layout) */}
            <div className={`pointer-events-auto mt-2 w-full max-w-sm bg-carbon/90 backdrop-blur-xl border border-white/10 rounded-2xl p-2 flex flex-col shadow-2xl transition-all duration-300 origin-top transform ${isMobileMenuOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}`}>
                <div className="flex flex-col gap-1">
                    <NavLinks mobile />
                </div>

                <div className="h-px bg-white/10 my-2"></div>

                <Link href="/login" className="text-center py-3 text-primary font-bold uppercase tracking-widest hover:bg-white/5 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    Login Member
                </Link>
            </div>
        </nav>
    );
};
