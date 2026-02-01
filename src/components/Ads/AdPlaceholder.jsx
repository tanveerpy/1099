'use client';

export default function AdPlaceholder({ slot, format = 'auto', className = '' }) {
    return (
        <div className={`bg-surface-muted border-2 border-dashed border-border rounded-lg flex items-center justify-center min-h-[100px] overflow-hidden ${className}`}>
            <div className="text-center p-4">
                <p className="text-[10px] uppercase tracking-widest text-text-muted mb-1 font-bold">Advertisement</p>
                <div className="text-xs text-text-muted italic">
                    Google AdSense {slot ? `(Slot: ${slot})` : 'Responsive Ad'}
                </div>
            </div>
            {/* 
        In production, you would place the Google AdSense <ins> tag here:
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client="ca-pub-XXXXXXXXXXXXX"
             data-ad-slot={slot}
             data-ad-format={format}
             data-full-width-responsive="true"></ins>
      */}
        </div>
    );
}
