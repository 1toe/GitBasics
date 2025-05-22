import { useState } from 'react';
import { githubBasicsData } from '../data/githubData';
import { CardDetail } from './CardDetail';

export function DetailSection() {
  const [activeTab, setActiveTab] = useState('git-basics');

  return (
    <div className="bg-gray-800 p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Aprende GitHub paso a paso</h2>
      
      <div className="flex overflow-x-auto mb-6 pb-2">
        {githubBasicsData.map((item) => (
          <button
            key={item.id}
            className={`px-4 py-2 mr-2 rounded-md whitespace-nowrap ${
              activeTab === item.id 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            onClick={() => setActiveTab(item.id)}
          >
            {item.title}
          </button>
        ))}
      </div>
      
      <div>
        {githubBasicsData.map((item) => (
          activeTab === item.id && (
            <CardDetail
              key={item.id}
              title={item.title}
              description={item.description}
              content={item.content}
              commands={item.commands}
              tips={item.tips}
              resources={item.resources}
            />
          )
        ))}
      </div>
    </div>
  );
}
