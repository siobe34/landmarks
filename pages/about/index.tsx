import { PageSection } from "../../components/PageSection";

export default function About() {
    return (
        <PageSection className='justify-start mt-4 px-8'>
            <article className='flex flex-col gap-4'>
                <h1 className='flex self-center text-2xl font-bold underline'>What is Landmarks?</h1>
                <p>
                    A world map of cool landmarks and respective information. It's an interactive way to learn about interesting geography, weird
                    archeological facts, various points of interest, and any other intriguing geospatial data.
                </p>
                <p>
                    Just head over to the{" "}
                    <a href='/map' className='px-2 py-1 rounded bg-secondary text-txtOnSecondary hover:underline'>
                        Map page
                    </a>{" "}
                    and explore the markers on the map.
                </p>
            </article>
        </PageSection>
    );
}
