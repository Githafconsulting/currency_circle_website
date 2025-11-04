import React from 'react'
import Hero from '../components/Hero'
import ScrollText from '../components/ScrollText'
//import StatsSection from '../components/StatsSection'
import CreateOffersSection from '../components/CreateOffersSection'
import MyOffersSection from '../components/MyOffersSection'
import MatchedOffersSection from '../components/MatchedOffersSection'
import SendAcceptTradeSection from '../components/SendAcceptTradeSection'
import ChatWithMatchSection from '../components/ChatWithMatchSection'
import TestimonialsSection from '../components/TestimonialsSection'
import FAQSection from '../components/FAQSection'
import DownloadSection from '../components/DownloadSection'

const Home = () => {
  return (
    <>
      <Hero />
      <ScrollText />
      <CreateOffersSection />
      <MyOffersSection />
      <MatchedOffersSection />
      <SendAcceptTradeSection />
      <ChatWithMatchSection />
      <TestimonialsSection />
      <FAQSection />
      <DownloadSection />
    </>
  )
}

export default Home
