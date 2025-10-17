import { mockCelebrations, mockEvents } from "../../../../data/events";

export async function getData(id: any) {
  return mockCelebrations.find((item: any) => item.id == id);
}
