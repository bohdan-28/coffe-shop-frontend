import React from 'react'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components'
import PartHistory from '../../parts/History/HistoryPart/HistoryPart'

function History() {
    return (
        <div>
            <Navbar />
            <PartHistory />
            <Footer />
        </div>
    )
}

export default History