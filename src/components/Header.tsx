import { Search } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-black text-white p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <span className="text-orange-500 mr-2">🔥</span>
          <h1 className="text-xl font-bold">GitHub Basics of the week</h1>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-2 py-1 text-sm">
            &lt;
          </button>
          <span className="text-sm">19 May 2025</span>
          <button className="px-2 py-1 text-sm">
            &gt;
          </button>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Filter by name"
            className="bg-gray-800 text-white px-4 py-2 rounded-md pl-10 w-64"
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        </div>
        
        <div className="flex items-center">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md flex items-center">
            <span className="mr-2">Filters</span>
            <span className="bg-gray-700 px-2 py-0.5 rounded-full text-xs">(0)</span>
          </button>
        </div>
        
        <div className="flex items-center">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md flex items-center">
            <span className="mr-2">Sort:</span>
            <span>Relevance</span>
          </button>
        </div>
      </div>
    </header>
  );
}
