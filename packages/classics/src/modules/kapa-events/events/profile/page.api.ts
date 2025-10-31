import { endpoint } from "../../../../data/config";

export async function getData(id: any) {
  try {
    const res = await fetch(`${endpoint}/events/info/` + id + "/");

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const data = await res.json();
    console.log("CMS data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching CMS data:", error);
    return null;
  }

  //return mockCelebrations.find((item: any) => item.id == id);
}
