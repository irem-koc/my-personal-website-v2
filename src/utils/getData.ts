
const getData = async () => {
    const response = await fetch("http://localhost:3000/experiences");
    const data = await response.json();
    return data;
};
export default getData;