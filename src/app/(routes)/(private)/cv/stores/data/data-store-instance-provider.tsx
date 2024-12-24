"use client";

import {type PropsWithChildren, createContext, useRef, useContext} from "react";
import { useStore } from "zustand";
import {
  type DataStore,
  type DataStoreApi,
  createDataStoreInstance,
} from "./create-data-store-instance";

const InstanceContext = createContext<DataStoreApi | null>(null);

export const DataProvider = (props: PropsWithChildren<Record<string, unknown>>) => {
  const { children } = props;
  const storeReference = useRef<DataStoreApi>();

  if (!storeReference.current) {
    storeReference.current = createDataStoreInstance();
  }

  return (
    <InstanceContext.Provider value={storeReference.current}>{children}</InstanceContext.Provider>
  );
};

export const useDataContext = <T,>(selector: (store: DataStore) => T): T => {
  const context = useContext(InstanceContext);
  if (!context) throw new Error("Editor context not found");

  return useStore(context, selector);
};
