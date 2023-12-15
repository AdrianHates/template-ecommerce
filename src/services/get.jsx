const url = 'https://fakestoreapi.com/products'

export async function getAllProducts () {
  const response = await fetch(url)
  const data = await response.json();
  return data
}
