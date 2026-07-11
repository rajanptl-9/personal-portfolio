import React, { Suspense, lazy } from 'react'
import "../App.css"
import { useMyContext } from './ContextVar';

const Profile = lazy(() => import('./profile/Profile'));
const Projects = lazy(() => import('./projects/Projects'));
const About = lazy(() => import('./about/About'));
const Contact = lazy(() => import('./contact/Contact'));

const SectionLoader = ({ children }) => (
    <Suspense fallback={<div className="section_skeleton" aria-hidden="true" />}>{children}</Suspense>
);

function ContentPages() {
    const { menuSelected } = useMyContext();
    return (
        <>
            {menuSelected === "home" ? (
                <SectionLoader><Profile /></SectionLoader>
            ) : (
                <div className='main_subcontainer'>
                    {menuSelected === "about" && <SectionLoader><About /></SectionLoader>}
                    {menuSelected === "projects" && <SectionLoader><Projects /></SectionLoader>}
                    {menuSelected === "contact" && <SectionLoader><Contact /></SectionLoader>}
                </div>
            )}
        </>
    )
}

export default ContentPages