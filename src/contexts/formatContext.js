 export function formatDate(isoString) {
  return new Date(isoString).toLocaleDateString('en-GB', {
    weekday: 'short', day: 'numeric' , month: 'long'
  })
}

export function formatYear(isoString) {
  return new Date(isoString).toLocaleDateString('en-GB', {
    year: 'numeric'
  })
}

 export function formatTime(isoString) {
  return new Date(isoString).toLocaleTimeString('en-GB', {
    hour: '2-digit', minute: '2-digit' 
  })
}
