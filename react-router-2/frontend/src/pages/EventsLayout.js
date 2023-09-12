import { Fragment } from "react"
import EventsNavigation from "../components/EventsNavigation"
import { Outlet } from "react-router-dom"

const EventsLayout = (props) => {
    return <Fragment>
        <EventsNavigation />
        <main>
            <Outlet />
        </main>
    </Fragment>
}

export default EventsLayout;