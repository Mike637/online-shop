/* path of import getJson is  views/components/MainPage/Main/Main.jsx  */
const getJson = () => {
  fetch('/api')
    .then((response) => response.json())
    .then((json) => console.log(json))
}

export default getJson
