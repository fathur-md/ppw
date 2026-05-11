const cache = new Map();

export function setCache(key, data) {
  cache.set(key, {
    data,
    time: Date.now(),
  });
}

export function getCache(key, ttl = 1000 * 60 * 10) {
  const cached = cache.get(key);

  if (!cached) return null;

  const isExpired = Date.now() - cached.time > ttl;

  if (isExpired) {
    cache.delete(key);
    return null;
  }

  return cached.data;
}
