import {createContext, useContext} from "react";
import type { NestedComponent } from "../templates/types/sortable-context";
import type { AutoresizeProps } from "../components/definitions/autoresize";

export const ComponentContext = createContext({} as NestedComponent);
export const useComponentContext = <T = AutoresizeProps>() =>
  useContext(ComponentContext) as NestedComponent<T>;
