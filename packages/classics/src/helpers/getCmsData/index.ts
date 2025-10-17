import { usePageContext } from "@classics/ui";

export function getCmsData(holder: string) {
  const { state } = usePageContext();

  return state.preData?.cms?.find((item: any) => {
    return item.holder == holder;
  });
}

export function getCmsDatas(holder: string) {
  const { state } = usePageContext();

  return state.preData?.cms?.filter((item: any) => {
    return item.holder == holder;
  });
}
