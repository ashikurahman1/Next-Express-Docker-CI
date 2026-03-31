'use client';

import { useStore } from '@/store/useStore';
import { useEffect } from 'react';

export default function DisplayData() {
  const { data, setData } = useStore();

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(res => setData(res.message));
  }, [setData]);

  return (
    <>
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Data from Server:
        </h2>
        <p className="text-gray-700 text-center">
          {data || 'No data available'}
        </p>
      </div>
      <div className="mt-6">
        <button
          onClick={() => setData('Updated in Client Side! ⚡')}
          className="px-6 py-2 bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg transition-all"
        >
          Test Zustand Update
        </button>
        <button
          onClick={() => setData(data + ' 🔄')}
          className="ml-4 px-6 py-2 bg-green-500 hover:bg-green-400 text-white rounded-lg transition-all"
        >
          Fetch from Server Again!
        </button>
      </div>
    </>
  );
}
