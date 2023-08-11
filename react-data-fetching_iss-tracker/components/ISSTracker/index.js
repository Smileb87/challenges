import React from 'react';
import useSWR from 'swr';
import Controls from '../Controls/index';
import Map from '../Map/index';

const URL = 'https://api.wheretheiss.at/v1/satellites/25544';

const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        const error = new Error("An error occurred while fetching the data.");
        error.info = await response.json();
        error.status = response.status;
        throw error;
    }
    return response.json();
};

export default function ISSTracker() {
  const { data, error, mutate } = useSWR(URL, fetcher, { refreshInterval: 5000 });

  if (error) return <div>Failed to load ISS coordinates: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
      <main>
          <Map {...data} />
          <Controls {...data} onRefresh={() => mutate()} />
      </main>
  );
}

