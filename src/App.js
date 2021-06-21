import { useState } from 'react'

import initialEmails from './data/emails'

import './App.css'
import Header from './components/Header'
import Emails from './components/Emails'
import LeftNav from './components/LeftNav'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [searchInput, setSearchInput] = useState('')

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

  const toggleStar = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      )
    setEmails(updatedEmails)
  }

  const toggleRead = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      )
    setEmails(updatedEmails)
  }

  const handleChange = e => setSearchInput(e.target.value)

  // Option 1
  // const searchedEmails = () => {
  //   return searchInput
  //     ? filteredEmails.filter(
  //         email => searchInput.toLowerCase() === email.sender.toLowerCase()
  //       )
  //     : filteredEmails
  // }

  // Option 2
  const searchedEmails = () => {
    return searchInput
      ? filteredEmails.filter(
          email => email.sender.toLowerCase().indexOf(searchInput) != -1
        )
      : filteredEmails
  }

  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  return (
    <div className="app">
      <Header searchInput={searchInput} handleChange={handleChange} />
      <LeftNav
        setCurrentTab={setCurrentTab}
        setHideRead={setHideRead}
        currentTab={currentTab}
        starredEmails={starredEmails}
        unreadEmails={unreadEmails}
        hideRead={hideRead}
      />
      <Emails
        searchedEmails={searchedEmails}
        toggleRead={toggleRead}
        toggleStar={toggleStar}
      />
    </div>
  )
}

export default App
