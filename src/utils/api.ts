export const fetchData = async() => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_COVID_API}/summary`,
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
