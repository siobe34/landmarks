import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOtter, faVolcano, faDigging, faTimeline, faX } from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/components/Marker.module.css";

import { ILandmark } from "../../types/ILandmark";

export const MarkerContent = ({ landmark }: { landmark: ILandmark }) => {
    let markerIcon;
    let markerColour;
    if (landmark.type === "Archaeology") {
        markerIcon = faDigging;
        markerColour = "#F0C020";
    }
    if (landmark.type === "Biology") {
        markerIcon = faOtter;
        markerColour = "#2488FF";
    }
    if (landmark.type === "Geology") {
        markerIcon = faVolcano;
        markerColour = "#43CB8E";
    }
    if (landmark.type === "History") {
        markerIcon = faTimeline;
        markerColour = "#F38177";
    }

    return (
        <>
            <button
                id='btn-close'
                className={`${styles.buttonClose} sticky top-0 hidden self-start py-0.5 px-1 border rounded border-secondary hover:border-primary text-txtOnPrimary hover:text-txtOnSecondary bg-primary hover:bg-secondary`}
                type='button'
                aria-label='Close Pop-up Window'
            >
                <FontAwesomeIcon icon={faX} />
            </button>
            <div
                id='marker-icon'
                className={`${styles.icon} flex justify-center items-center text-[1.5rem] cursor-pointer`}
                role='button'
                aria-roledescription='Button to Show Pop-up Window'
                aria-label='Marker Icon'
            >
                {markerIcon && <FontAwesomeIcon icon={markerIcon} color={markerColour} />}
            </div>
            <section className={`${styles.section} hidden flex-col gap-4`}>
                <article className='flex flex-col justify-start items-center gap-2'>
                    <h1 className='text-lg font-semibold'>{landmark.name}</h1>
                    <figure className='flex flex-col justify-center items-center py-2 h-[200px]'>
                        <img className='aspect-video object-contain max-h-full' src={landmark.imageSource} alt={landmark.imageCaption} />
                        <figcaption className='text-center font-thin mt-1'>{landmark.imageCaption}</figcaption>
                    </figure>
                    <p className='text-sm'>{landmark.description}</p>
                </article>
                <footer>
                    <h2 className='text-sm font-semibold underline'>Sources</h2>
                    <ul className='flex flex-col justify-center items-start'>
                        {landmark.sources.map((source) => (
                            <li key={source.sourceLink}>
                                <a className='hover:text-primary underline' href={source.sourceLink} aria-label={`Link to ${source.sourceType}`}>
                                    {source.sourceType}
                                </a>
                            </li>
                        ))}
                    </ul>
                </footer>
            </section>
        </>
    );
};
