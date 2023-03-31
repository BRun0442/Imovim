const data = require('./cities.json')

async function getCities(){
  try{
    // console.log(data)
      // const data = JSON.parse(await promises.readFile("../cities.json"))
      // console.log(data)
      return data
  }
  catch(err) {
      console.log("Houve um equívoco " + err)
  }
}

// getCities()

export async function validateCity(cidade) {
  let valid = false
  let cities = await getCities()
  cities.forEach(async (city) => {
    let result = city.cidades
    result.forEach((i) => {
        if(i == cidade)  {
          console.log(i, cidade)
          valid = true
        }
    })
  })
  return valid
}

// const teste = async () => {
//   console.log(await readData('Embu'))
// }

// teste()