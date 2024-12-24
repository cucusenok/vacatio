"use client";

import {type PropsWithChildren, createContext, useRef, useContext} from "react";
import { useStore } from "zustand";
import { type CrudInstanceInput, type Store, createCrudInstance } from "./crud-store";

type StoreApi = ReturnType<typeof createCrudInstance>;
type CrudProviderProps = PropsWithChildren<CrudInstanceInput>;

const StoreContext = createContext<StoreApi | undefined>(undefined);

export const CrudProvider = (props: CrudProviderProps) => {
  const { children, setSortableContexts } = props;

  const storeRef = useRef<StoreApi>();

  if (!storeRef.current) {
    storeRef.current = createCrudInstance({ setSortableContexts });
  }

  return <StoreContext.Provider value={storeRef.current}>{children}</StoreContext.Provider>;
};

export const useCrudInstance = <T,>(selector: (store: Store) => T): T => {
  const storeContext = useContext(StoreContext);
  if (!storeContext) throw new Error("Store context not found");

  return useStore(storeContext, selector);
};
