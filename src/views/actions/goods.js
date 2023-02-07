/* path of import getJson is  views/components/MainPage/Main/Main.jsx */
/*   Function getJson send a request     */
const getJson = () => {
  fetch('/api')
    .then((response) => response.json())
    .then((json) => console.log(json))
}

export default getJson
