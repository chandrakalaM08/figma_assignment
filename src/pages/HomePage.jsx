import React from 'react'
import Navbar from '../components/Navbar'
import TopSection from '../components/TopSection'
import Footer from '../components/Footer'

import NotClear from '../components/NotClear'
import FAQSection from '../components/FAQSection'
import ReferAndEarnSection from '../components/ReferAndEarnSection'
import EligibilitySection from '../components/EligibilitySection'
import EMICalculator from '../components/EMICalculator'
import Testimonial from '../components/Testimonial'
import Process from '../components/Process'
import Highlights from '../components/Highlights'
import Partners from '../components/Partners'

const HomePage = () => {
    return (
        <div style={{ width: "90%", margin: "auto" }}>
            <Navbar />
            <TopSection />
            <Highlights />
            <Partners />
            <Process />
            <Testimonial />
            <EligibilitySection />
            <EMICalculator />
            <ReferAndEarnSection />
            <FAQSection />
            <NotClear />
            <Footer />
        </div>
    )
}

export default HomePage