"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";

const Context: any = createContext(null);

const usePageContext: any = () => {
  return useContext(Context);
};

const initialState = {
  navStatus: false,
  preData: {
    cms: [],
    serviceCategory: [],
  },
  pageLoading: true,
  firstLoading: true,
};

const reducer = (
  state: any,
  action: {
    type: string;
    payload?: any;
  }
) => {
  switch (action.type) {
    case "SET_NAV_STATUS":
      return {
        ...state,
        navStatus: action.payload,
      };

    case "SET_PAGE_LOADING":
      return {
        ...state,
        pageLoading: action.payload,
      };
    case "SET_PRE_DATA":
      return {
        ...state,
        pageLoading: false,
        preData: action.payload,
        firstLoading: false,
      };
    default:
      return state;
  }
};

export function Provider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Context.Provider value={{ state, dispatch }}>
        {children}
      </Context.Provider>
    </>
  );
}

export {
  Context as ContextPage,
  Provider as ContextPageProvider,
  usePageContext,
};
