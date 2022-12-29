import { UrlObject } from "url";

export interface INavlink {
    href: string | UrlObject;
    onClick?: React.MouseEventHandler;
    children: React.ReactNode;
}
