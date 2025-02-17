export const saveDataToLocalStorage = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getDataFromLocalStorage = <T>(key: string): T | null => {
  const data = localStorage?.getItem(key)
  return data ? JSON.parse(data) as T : null

}