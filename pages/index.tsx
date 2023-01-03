import { useState, useEffect } from "react";
import Head from "next/head";

import { ILandmark } from "../types/ILandmark";
import dbConnection from "../lib/mongodbConnection";
import { withLocalStorage } from "../lib/withStorage";

import { RenderMap } from "../components/Map/RenderMap";
import { NotificationGroup, NotificationItem } from "../components/Notification";

const notifications = [
    { text: "Try clicking the icons on the map", timeout: 5000 },
    { text: "Check out the various Map Styles with the Styles button", timeout: 7000 },
    { text: "Toggle various layers on the map with the Filter button", timeout: 7000 },
];

export default function Home(json: { markers: ILandmark[] }) {
    // * State to determine whether notifications should be shown or not
    const [showNotifications, setShowNotifications] = useState(true);

    // * State to store the currently displayed notification
    const [currentNotification, setCurrentNotification] = useState(notifications[0]);

    // * When page loads, check if user has visited landmarks before
    // * If no, show notifications with info about the site
    // * If yes, don't show any notifications
    useEffect(() => {
        // * Get status of whether the user has visited landmarks before
        const firstTimeVisitor = withLocalStorage.getItem("landmarks-visited-status") as string | null;

        // * If value from storage is null, then user is a firstTimeVisitor
        if (firstTimeVisitor !== null) setShowNotifications(false);
    }, []);

    // * Run every time currentNotification changes to show the next notification
    useEffect(() => {
        // * If notifications are not to be shown then cancel effect
        if (!showNotifications) return;

        // * Get index of current notification from notifications array
        const idxCurrentNotification = notifications.indexOf(currentNotification);

        // * If the current notification is the last notification then no more notifications to display and set the site-visited status in Local Storage
        if (idxCurrentNotification === notifications.length - 1) {
            withLocalStorage.setItem("landmarks-visited-status", "true");
            return;
        }

        // * Set current notification to next notification in array with delay to let previous notification animate out
        const timeoutFunc = setTimeout(() => setCurrentNotification(notifications[idxCurrentNotification + 1]), currentNotification.timeout + 3000);

        // * Clear setTimeout after all notifications have been displayed
        return () => clearTimeout(timeoutFunc);
    }, [currentNotification, showNotifications]);

    return (
        <>
            <Head>
                <title>Landmarks | Home</title>
                <meta name='theme-color' content='dark' />
                <meta
                    name='description'
                    content='Landmarks is an interactive way to learn about interesting geography, weird archeological facts, random history, and any other intriguing geospatial data.'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            {/* Toast Notifications */}
            {showNotifications && (
                <NotificationGroup>
                    {notifications.map((notification) =>
                        notification.text === currentNotification.text ? (
                            <NotificationItem key={notification.text} timeout={notification.timeout}>
                                {notification.text}
                            </NotificationItem>
                        ) : null,
                    )}
                </NotificationGroup>
            )}

            {/* Google Maps Container */}
            <section className='relative flex justify-center w-full h-full'>
                <RenderMap markers={json.markers} />
            </section>
        </>
    );
}

export async function getServerSideProps() {
    try {
        // * Connect to mongodb server
        const client = await dbConnection;

        // * Get database instance from server
        const db = client.db("landmarks");

        // * Query all markers from database
        const markers = await db.collection("markers").find({}).toArray();

        return { props: { markers: JSON.parse(JSON.stringify(markers)) } };
    } catch (e) {
        console.error(e);
    }
}
