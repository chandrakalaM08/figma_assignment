import React from 'react'
import Navbar from '../components/Navbar'
import TopSection from '../components/TopSection'
import Footer from '../components/Footer'

import NotClear from '../components/NotClear'
import FAQSection from '../components/FAQSection'

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <TopSection />
            <FAQSection />
            <NotClear />
            <Footer />
        </div>
    )
}

export default HomePage