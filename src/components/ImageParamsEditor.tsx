import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface ImgixParams {
  [key: string]: any;
}

interface ImageParamsEditorProps {
  defaultParams: any;
  originalCode: string;
  onParamsChange: (params: any) => void;
}

function ImageParamsEditor({ defaultParams, originalCode, onParamsChange }: ImageParamsEditorProps) {
  const [editorContent, setEditorContent] = useState<string>(originalCode);
  const [error, setError] = useState<string | null>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  // Apply syntax highlighting to the editor content
  const highlightedContent = () => {
    if (!editorContent) return '';

    // Replace the content with syntax-highlighted HTML
    return editorContent
      .split('\n')
      .map((line) => {
        // Check if line is a comment
        if (line.trim().startsWith('//')) {
          return `<span class="text-gray-500">${escapeHtml(line)}</span>`;
        }

        // Highlight keys, values, and special syntax
        return line
          // Highlight property keys
          .replace(/(['"]?)([a-zA-Z0-9_-]+)(['"]?)\s*:/g, '<span class="text-blue-400">$1$2$3</span>:')
          // Highlight string values
          .replace(/:\s*(['"])(.*?)(['"])/g, ': <span class="text-green-400">$1$2$3</span>')
          // Highlight booleans
          .replace(/:\s*(true|false)/g, ': <span class="text-yellow-400">$1</span>')
          // Highlight numbers
          .replace(/:\s*(\d+)/g, ': <span class="text-purple-400">$1</span>')
          // Highlight special syntax
          .replace(/({|}|,)/g, '<span class="text-gray-400">$1</span>');
      })
      .join('\n');
  };

  // Helper function to escape HTML special characters
  const escapeHtml = (unsafe: string) => {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setEditorContent(newContent);
    
    try {
      // Extract active (uncommented) parameters from the code
      const activeParams: ImgixParams = {};
      
      // Match lines that aren't commented out and have a key-value structure
      const matches = newContent.match(/^\s*(?!\s*\/\/).*['"]?([a-zA-Z0-9_-]+)['"]?\s*:\s*['"](.*?)['"],?$/gm);
      
      if (matches) {
        matches.forEach(line => {
          // Extract key and value from each line
          const keyMatch = line.match(/['"]?([a-zA-Z0-9_-]+)['"]?\s*:/);
          const valueMatch = line.match(/:\s*['"](.*)['"],?$/);
          
          if (keyMatch && keyMatch[1] && valueMatch && valueMatch[1]) {
            const key = keyMatch[1];
            const value = valueMatch[1];
            activeParams[key] = value;
          }
        });
      }
      
      setError(null);
      onParamsChange(activeParams);
    } catch (err) {
      setError('Error parsing parameters. Make sure your syntax is correct.');
    }
  };

  // Update the div with highlighted content when editorContent changes
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = highlightedContent();
    }
  }, [editorContent]);
  
  // Sync textarea scrolling with the highlighted display
  const handleScroll = (e: React.UIEvent<HTMLTextAreaElement>) => {
    if (editorRef.current) {
      editorRef.current.scrollTop = e.currentTarget.scrollTop;
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h4 className="text-white font-medium mb-2 border-b border-gray-700 pb-1">
        {t ? t('product_parameters') : 'Product Parameters'}
      </h4>
      
      <div className="relative">
        {/* Hidden textarea that captures user input */}
        <textarea
          className="w-full h-80 bg-transparent text-transparent caret-white p-3 font-mono text-sm rounded absolute inset-0 z-10 resize-none"
          value={editorContent}
          onChange={handleChange}
          onScroll={handleScroll}
          spellCheck={false}
        />
        {/* Highlighted display div */}
        <div 
          ref={editorRef}
          className="w-full h-80 bg-gray-900 text-gray-100 p-3 font-mono text-sm rounded whitespace-pre overflow-auto"
          dangerouslySetInnerHTML={{ __html: highlightedContent() }}
        />
        {error && (
          <div className="mt-2 text-red-400 text-sm">{error}</div>
        )}
      </div>
      <div className="mt-4 text-gray-300 text-sm">
        <h4 className="font-medium mb-1">{t ? t('instructions') : 'Instructions:'}</h4>
        <ul className="list-disc list-inside pl-2 space-y-1">
          <li>{t ? t('uncomment_line') : 'Uncomment a line by removing the // at the beginning'}</li>
          <li>{t ? t('comment_line') : 'Comment out a line by adding // at the beginning'}</li>
          <li>{t ? t('only_uncommented') : 'Only uncommented parameters will be applied to images'}</li>
          <li>{t ? t('changes_apply') : 'Changes apply instantly to all product images'}</li>
        </ul>
      </div>
    </div>
  );
}

export default ImageParamsEditor;