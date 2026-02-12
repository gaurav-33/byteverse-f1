import { Gauge } from 'lucide-react';

export const Logo = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center gap-2 font-display font-bold tracking-tighter text-white ${className}`}>
        <Gauge className="text-f1-red w-6 h-6" />
        <span className="text-xl tracking-tighter">BYTEVERSE</span>
    </div>
);
