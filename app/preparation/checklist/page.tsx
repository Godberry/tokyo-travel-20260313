'use client';

import React, { useState, useEffect } from 'react';
import checklistDataRaw from '../../data/checklist.json';

type ChecklistItem = {
  id: string;
  name: string;
  quantity: string;
  defaultChecked: boolean;
  position: string;
  note: string;
};

type ChecklistCategory = {
  name: string;
  items: ChecklistItem[];
};

const checklistData = checklistDataRaw as ChecklistCategory[];

export default function ChecklistPage() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load from localStorage on mount
    const saved = localStorage.getItem('travel-checklist');
    if (saved) {
      try {
        setCheckedItems(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse checklist state', e);
      }
    } else {
      // Initialize with all items unchecked
      const initial: Record<string, boolean> = {};
      checklistData.forEach(cat => {
        cat.items.forEach(item => {
          initial[`${cat.name}-${item.id}`] = false;
        });
      });
      setCheckedItems(initial);
    }
    setIsLoaded(true);
  }, []);

  const toggleItem = (categoryName: string, itemId: string) => {
    const key = `${categoryName}-${itemId}`;
    const newState = {
      ...checkedItems,
      [key]: !checkedItems[key]
    };
    setCheckedItems(newState);
    localStorage.setItem('travel-checklist', JSON.stringify(newState));
  };

  if (!isLoaded) {
    return <div>Loading checklist...</div>;
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>🧳 互動式旅遊行李清單</h1>
      <p style={{ color: '#666', marginBottom: '20px' }}>進度會自動保存在您的瀏覽器中，重新整理不會遺失。</p>
      
      {checklistData.map((category) => {
        const catItems = category.items;
        const checkedCount = catItems.filter(item => checkedItems[`${category.name}-${item.id}`]).length;
        const allChecked = checkedCount === catItems.length;

        return (
          <div key={category.name} style={{ marginBottom: '30px', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ backgroundColor: allChecked ? '#e6f4ea' : '#f5f5f5', padding: '15px', borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ margin: 0, fontSize: '1.2rem' }}>{category.name}</h2>
              <span style={{ fontSize: '0.9rem', color: '#666' }}>{checkedCount} / {catItems.length}</span>
            </div>
            <div style={{ padding: '0 15px' }}>
              {category.items.map(item => {
                const isChecked = !!checkedItems[`${category.name}-${item.id}`];
                return (
                  <div 
                    key={item.id} 
                    onClick={() => toggleItem(category.name, item.id)}
                    style={{ 
                      display: 'flex', 
                      padding: '12px 0', 
                      borderBottom: '1px solid #eee',
                      cursor: 'pointer',
                      alignItems: 'center',
                      opacity: isChecked ? 0.6 : 1
                    }}
                  >
                    <div style={{ marginRight: '15px' }}>
                      <input 
                        type="checkbox" 
                        checked={isChecked}
                        onChange={() => {}} // handled by parent div click
                        style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                        <span style={{ fontSize: '1.1rem', textDecoration: isChecked ? 'line-through' : 'none' }}>
                          {item.name}
                        </span>
                        {item.quantity && <span style={{ color: '#666', fontSize: '0.9rem' }}>x {item.quantity}</span>}
                      </div>
                      {(item.position || item.note) && (
                        <div style={{ display: 'flex', gap: '8px', marginTop: '4px', fontSize: '0.85rem' }}>
                          {item.position && (
                            <span style={{ backgroundColor: '#eef', color: '#336', padding: '2px 6px', borderRadius: '4px' }}>
                              📍 {item.position}
                            </span>
                          )}
                          {item.note && <span style={{ color: '#888' }}>{item.note}</span>}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
