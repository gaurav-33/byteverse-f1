
import { Switch, Route, useLocation } from 'wouter';
import { AnimatePresence, motion } from 'framer-motion';
import { NavBar } from './components/ui/NavBar';
import { ScrollToTop } from './components/utils/ScrollToTop';
import { Landing } from './pages/Landing';
import { Tracks } from './pages/Tracks';
import { Schedule } from './pages/Schedule';
import { Prizes } from './pages/Prizes';
import { PitCrew } from './pages/PitCrew';
import { About } from './pages/About';
import { Gallery } from './pages/Gallery';

function App() {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-f1-carbon text-white font-display selection:bg-f1-red selection:text-white">
      <ScrollToTop />
      {/* Navbar sits here, so it shows on ALL pages below */}
      <NavBar />

      {/* Page Content with Transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${location}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full"
        >
          <Switch>
            <Route path="/" component={Landing} />
            <Route path="/tracks" component={Tracks} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/prizes" component={Prizes} />
            <Route path="/pit-crew" component={PitCrew} />
            <Route path="/about" component={About} />
            <Route path="/gallery" component={Gallery} />

            {/* Fallback 404 */}
            <Route>
              <div className="h-[calc(100vh-80px)] flex items-center justify-center flex-col"> {/* Added height calc to account for navbar */}
                <h1 className="text-9xl font-black text-white/10">404</h1>
                <p className="text-xl font-mono text-f1-red uppercase tracking-widest animate-pulse">Connection Lost</p>
                <a href="/" className="mt-8 px-6 py-2 border border-f1-red text-f1-red hover:bg-f1-red hover:text-white transition-colors uppercase font-bold text-sm">
                  Return to Paddock
                </a>
              </div>
            </Route>
          </Switch>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;