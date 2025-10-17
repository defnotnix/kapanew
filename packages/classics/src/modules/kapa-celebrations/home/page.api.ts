import { mockCMS } from "../../../data/cms";
import { mockServiceCategoryCelebrations } from "../../../data/category";
import { mockCelebrations } from "../../../data/events";
export async function getCMS() {
  return mockCMS;
}

export async function getServiceCategory() {
  return mockServiceCategoryCelebrations;
}

export async function getEvents() {
  return mockCelebrations;
}
