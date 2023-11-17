import React from 'react'
import Navbar from '../components/Navbar'
import TopSection from '../components/TopSection'
import Footer from '../components/Footer'

import NotClear from '../components/NotClear'

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <TopSection />
            <NotClear />
            <Footer />
        </div>
    )
}

export default HomePage