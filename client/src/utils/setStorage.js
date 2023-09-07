export function setWithExpiry(key, value, ttl) {
  const now = new Date();

  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire

  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  sessionStorage.setItem(
    key,
    JSON.stringify(item, null, 2)
    // add indentation for readability
  );
}

export function getWithExpiry(key) {
  const itemStr = sessionStorage.getItem(key);

  // if the item doesn't exist, return null
  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const res = item.value;

  const now = new Date();

  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    sessionStorage.removeItem(key);
    return null;
  }

  return res;
}
