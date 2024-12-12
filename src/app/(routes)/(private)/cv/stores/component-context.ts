import { createContext, use } from "react";
import type { NestedComponent } from "../templates/types/sortable-context";
import type { AutoresizeProps } from "../components/definitions/autoresize";

export const ComponentContext = createContext({} as NestedComponent);
export const useComponentContext = <T = AutoresizeProps>() =>
  use(ComponentContext) as NestedComponent<T>;
