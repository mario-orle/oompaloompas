export const refreshData = () => {
  const currentTime = new Date()
  return currentTime.getTime() > localStorage.nextCallTime
}
