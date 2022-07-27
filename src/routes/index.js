/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
  const url = `https://api.openweathermap.org/data/2.5/weather?appid=697cb7795cff3ff2640e6a4556a4f91a&units=metric&q=${"Buenos Aires"}`
  const resp = await fetch(url);
  const json = await resp.json();
    const { weather = [{}], main = {}, name } = json;
    const data = {
      main: weather[0].main,
      description: weather[0].description,
      icon: weather[0].icon,
      temp: main.temp,
      name
    }
  return {
    status: 200,
    body: { data }
  };
}
