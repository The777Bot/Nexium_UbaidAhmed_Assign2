'use client';

import React, { useState } from 'react';

// Input component
const Input = ({ label, ...props }: { label: string; [key: string]: any }) => (
  <div style={{ marginBottom: '1rem' }}>
    <label style={{ display: 'block', marginBottom: 4 }}>{label}</label>
    <input {...props} style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }} />
  </div>
);

// Button component
const Button = ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => (
  <button {...props} style={{ padding: '0.5rem 1.5rem', borderRadius: 4, border: 'none', background: '#0070f3', color: '#fff', fontWeight: 600, cursor: 'pointer' }}>
    {children}
  </button>
);

// Card component
const Card = ({ children }: { children: React.ReactNode }) => (
  <div style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)', borderRadius: 8, padding: 24, background: '#fff', maxWidth: 500, margin: '2rem auto' }}>
    {children}
  </div>
);

// Tabs component
const Tabs = ({ tabs, activeTab, onTabChange }: { tabs: string[]; activeTab: string; onTabChange: (tab: string) => void }) => (
  <div style={{ display: 'flex', borderBottom: '1px solid #eee', marginBottom: 16 }}>
    {tabs.map(tab => (
      <div
        key={tab}
        onClick={() => onTabChange(tab)}
        style={{
          padding: '0.5rem 1rem',
          cursor: 'pointer',
          borderBottom: activeTab === tab ? '2px solid #0070f3' : '2px solid transparent',
          fontWeight: activeTab === tab ? 700 : 400,
        }}
      >
        {tab}
      </div>
    ))}
  </div>
);

// Textarea component
const Textarea = ({ label, ...props }: { label: string; [key: string]: any }) => (
  <div style={{ marginBottom: '1rem' }}>
    <label style={{ display: 'block', marginBottom: 4 }}>{label}</label>
    <textarea {...props} style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc', minHeight: 80 }} />
  </div>
);

// BlogForm component
const BlogForm = () => {
  const [url, setUrl] = useState('');
  const [summary, setSummary] = useState({ en: '', ur: '' });
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'English' | 'Urdu'>('English');

  // Replace with your actual n8n webhook URL
  const N8N_WEBHOOK_URL = 'http://localhost:5678/webhook/summarise';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ BlogUrl:url }),
      });
      const data = await response.json();
      setSummary({
        en: data.en || '',
        ur: data.ur || '',
      });
    } catch (error) {
      setSummary({
        en: 'Error connecting to n8n webhook.',
        ur: 'n8n ویب ہک سے کنکشن میں خرابی۔',
      });
    }
    setLoading(false);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <Input
          label="Blog URL"
          type="url"
          value={url}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}
          placeholder="Enter blog URL"
          required
        />
        <Button type="submit" disabled={loading}>
          {loading ? 'Summarising...' : 'Summarise'}
        </Button>
      </form>
      {(summary.en || summary.ur) && (
        <div style={{ marginTop: 32 }}>
          <Tabs
            tabs={['English', 'Urdu']}
            activeTab={activeTab}
            onTabChange={tab => setActiveTab(tab as 'English' | 'Urdu')}
          />
          {activeTab === 'English' ? (
            <Textarea label="English Summary" value={summary.en} readOnly />
          ) : (
            <Textarea label="Urdu Summary" value={summary.ur} readOnly />
          )}
        </div>
      )}
    </Card>
  );
};

export default BlogForm; 