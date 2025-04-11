import React from "react";
import classNames from "classnames";
import { MergedType } from "../util";

export type ClassNameType = Parameters<typeof classNames>[0];

export type PropsWithChildren<P extends {}> = {
  children?: React.ReactNode | undefined;
} & P;

export type PropsWithClassName<P extends {}> = {
  className?: ClassNameType;
} & P;

export type PropsWithStyle<P extends {}> = {
  style?: React.CSSProperties | undefined;
} & P;

export type PropsReact<P extends {}> = MergedType<
  [PropsWithChildren<P>, PropsWithClassName<P>, PropsWithStyle<P>]
>;
