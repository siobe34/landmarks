import { IPageSection } from "../types/IPageSection";

export const PageSection = ({ className, children }: IPageSection) => {
    return (
        <section
            className={`${className} flex flex-col justify-center items-center p-4 w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-6/12 bg-bg2 border rounded border-bg3`}
        >
            {children}
        </section>
    );
};
