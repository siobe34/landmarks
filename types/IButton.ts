export interface IButton {
    className?: string;
    styleOverride?: React.CSSProperties;
    children: React.ReactNode;
    onClick?: React.MouseEventHandler;
    href?: string;
    hrefInternal?: string;
    ariaLabel?: string;
}
