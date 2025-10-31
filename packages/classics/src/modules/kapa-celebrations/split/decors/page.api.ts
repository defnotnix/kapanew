import { endpoint } from "../../../../data/config";

export async function getCMS() {
  try {
    const res = await fetch(`${endpoint}/cms/content/`);

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
}
