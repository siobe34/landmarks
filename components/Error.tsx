import { PageSection } from "./PageSection";

export const Error = ({ children }: { children: React.ReactNode }) => (
    <PageSection className='justify-start gap-12 mt-4 px-8'>
        <article className='flex flex-col gap-4'>{children}</article>
    </PageSection>
);
