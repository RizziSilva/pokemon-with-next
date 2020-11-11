export function storageUtils() {
  function setItem(itemKey, itemValue) {
    localStorage.setItem(itemKey, itemValue)
  }

  function getItem(itemKey) {
    return localStorage.getItem(itemKey)
  }

  function deleteItem(itemKey) {
    localStorage.removeItem(itemKey)
  }

  return {
    setItem,
    getItem,
    deleteItem,
  }
}
