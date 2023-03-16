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

async function readData() {
  let cities = await getCities()
  cities.forEach((city) => {
    let result = city.cidades
    result.forEach((i) => {
      console.log(i)
    })
  })
}

readData()