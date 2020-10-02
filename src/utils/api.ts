export const fetchData = async() => {
  try {
    const response = await fetch(
      'http://localhost:3000/data',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    )
    const data = await response.json()
    return data
  } catch (error) {
    // Do something with error.
  }
}
