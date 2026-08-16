import React, { useState, useEffect } from 'react';
import './ThreadList.css';

/**
 * ThreadList Bileşeni
 * Forum thread'lerini listeleyen ana bileşen
 */
const ThreadList = () => {
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // API'den thread'leri çek
    const fetchThreads = async () => {
      try {
        const response = await fetch('/api/threads/');
        if (!response.ok) throw new Error('Veri alınamadı');
        const data = await response.json();
        setThreads(data.results || data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchThreads();
  }, []);

  if (loading) return <div className="loading">Yükleniyor...</div>;
  if (error) return <div className="error">Hata: {error}</div>;

  return (
    <div className="thread-list">
      <h1>Forum Başlıkları</h1>
      <div className="threads-container">
        {threads.map((thread) => (
          <div key={thread.id} className="thread-card">
            <h3>
              <a href={`/thread/${thread.id}`}>{thread.title}</a>
            </h3>
            <p className="thread-meta">
              <span className="author">Yazar: {thread.author}</span>
              <span className="date">{new Date(thread.created_at).toLocaleDateString('tr-TR')}</span>
              <span className="views">Görüntülenme: {thread.views_count}</span>
            </p>
            <p className="thread-description">{thread.description}</p>
            <div className="thread-footer">
              <span className="category">{thread.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreadList;
