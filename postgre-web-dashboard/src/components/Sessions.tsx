import { useEffect, useState } from "react"
import { Session, getSessions } from "../services/sessions"


const Sessions = () => {

  const [sessions, setSessions] = useState<Session[]>([])

  const update = async () => {
    const data = await getSessions()
    setSessions(data)
    setTimeout(() => {
      update()
    }, 10000);
  }

  useEffect(() => {
    update()
  }, [])

  return (
    <div style={{
      border: '1px solid var(--primary)',
      padding: '20px',
      marginTop: '20px',
      borderRadius: '6px'
    }}>
      <h1 style={{
        color: 'var(--primary)',
        marginBottom: '20px'
      }}>Сессии</h1>
      <div style={{
        display: 'grid',
        gridGap: '20px',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'
      }}>
        {
          sessions.map((session, index) => <>
            <div key={session.user_name + index} style={{
              color: 'black',
              borderRadius: '8px',
              backgroundColor: '#AC272722',
              padding: '12px'
            }}>
              <p>Пользователь: {session.user_name}</p>
              <p>Количество сессий: {session.session_count}</p>
              <p>Самый долгий запрос: {session.max_query_duration.replace('-', '')}</p>
            </div>
          </>)
        }
      </div>
    </div>
  )
}

export default Sessions