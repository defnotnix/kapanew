import { mockCMS } from "../../../data/cms";

export async function getData() {
  const res = mockCMS;

  return res.filter((item: any) => {
    return item.holder == "ke-events-group";
  });
}
