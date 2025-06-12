
export async function fetchProducts(){
  try{
    const response = await fetch('../../src/data/products.json')
    const data = response.json()
    return data
  }
  catch(e){
    console.log(e)
  }
}

