export const Section = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <section className={`py-12 md:py-16 ${className}`}>
    <div className="container mx-auto px-6">
      {children}
    </div>
  </section>
);