import { useState } from 'react';
import { Info } from 'lucide-react';
import { Tooltip } from './ui/Tooltip';

interface CardDetailProps {
  title: string;
  description: string;
  content: string;
  commands?: string[];
  tips?: string[];
  resources?: { title: string; url: string }[];
}

export function CardDetail({ title, description, content, commands, tips, resources }: CardDetailProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div 
        className="p-4 cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
        <Tooltip content="Haz clic para ver más detalles">
          <button className="text-white bg-blue-600 rounded-full p-2">
            <Info size={16} />
          </button>
        </Tooltip>
      </div>
      
      {isOpen && (
        <div className="p-4 border-t border-gray-700">
          <div className="mb-4">
            <p className="text-white">{content}</p>
          </div>
          
          {commands && commands.length > 0 && (
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-white mb-2">Comandos útiles:</h4>
              <div className="bg-gray-800 rounded-md p-3">
                {commands.map((command, index) => (
                  <div key={index} className="font-mono text-green-400 mb-2">
                    $ {command}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {tips && tips.length > 0 && (
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-white mb-2">Consejos:</h4>
              <ul className="list-disc pl-5">
                {tips.map((tip, index) => (
                  <li key={index} className="text-white mb-1">{tip}</li>
                ))}
              </ul>
            </div>
          )}
          
          {resources && resources.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Recursos adicionales:</h4>
              <ul className="list-disc pl-5">
                {resources.map((resource, index) => (
                  <li key={index} className="mb-1">
                    <a 
                      href={resource.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      {resource.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
