import { endpoint } from "../../../../data/config";

export async function getData() {
  try {
    const res = await fetch(`${endpoint}/events/info/`);

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const data = await res.json();
    console.log("CMS data:", data);
    return data.filter((e: any) => {
      return e.company == 2;
    });
  } catch (error) {
    console.error("Error fetching CMS data:", error);
    return null;
  }
}
