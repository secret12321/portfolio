export const Projects = () => {
   return (
    <section id="projects" className="min-h-screen px-6 py-20">
        <h2 className="text-3xl font-bold text-white mb-10">Projects</h2>
      
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card */}
          <div className="bg-white/10 backdrop-blur-lg p-4 rounded-2xl border border-white/20 hover:scale-105 transition">
            
            <img
              src="/img/project1.png"
              className="rounded-lg mb-4"
            />
      
            <h3 className="text-xl font-semibold text-white">
              Data Dashboard
            </h3>
      
            <p className="text-gray-300 text-sm mb-3">
              Visualized sales data using Power BI.
            </p>
      
            <div className="flex gap-2 mb-3">
              <span className="text-xs bg-white/20 px-2 py-1 rounded">
                Excel
              </span>
              <span className="text-xs bg-white/20 px-2 py-1 rounded">
                Power BI
              </span>
            </div>
      
            <div className="flex gap-3">
              <button className="text-sm text-blue-400">View</button>
              <button className="text-sm text-purple-400">GitHub</button>
            </div>
      
          </div>
      
        </div>
      </section>
  );
};
