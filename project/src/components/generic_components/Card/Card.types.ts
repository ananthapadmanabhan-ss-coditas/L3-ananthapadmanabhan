import type { PropsWithChildren } from "react";

export interface CardProps extends PropsWithChildren{
  onClick?:(data:unknown)=>void
}