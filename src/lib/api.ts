/**
 * API utilities for making requests
 */

// Base URL for API requests
const API_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Fetch data from the API
 */
export async function fetchFromAPI<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_URL}${endpoint}`;
  
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    // Handle errors
    const error = await response.text();
    throw new Error(error || `API request failed with status ${response.status}`);
  }

  return response.json();
}

/**
 * Post data to the API
 */
export async function postToAPI<T, R>(
  endpoint: string,
  data: T,
  options: RequestInit = {}
): Promise<R> {
  return fetchFromAPI<R>(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
    ...options,
  });
}

/**
 * Put data to the API
 */
export async function putToAPI<T, R>(
  endpoint: string,
  data: T,
  options: RequestInit = {}
): Promise<R> {
  return fetchFromAPI<R>(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data),
    ...options,
  });
}

/**
 * Delete data from the API
 */
export async function deleteFromAPI<R>(
  endpoint: string,
  options: RequestInit = {}
): Promise<R> {
  return fetchFromAPI<R>(endpoint, {
    method: 'DELETE',
    ...options,
  });
} 