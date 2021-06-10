import Email from './Email'

function Emails(props) {
  return (
    <main className="emails">
      <ul>
        {props.searchedEmails().map((email, index) => (
          <Email
            toggleRead={props.toggleRead}
            toggleStar={props.toggleStar}
            email={email}
            index={index}
          />
        ))}
      </ul>
    </main>
  )
}

export default Emails
