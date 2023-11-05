import { useEffect, useState } from "react"
import { Query, getQueries } from "../services/queries"


const Queries = () => {

  const [data, setData] = useState<Query[]>([])

  const update = async () => {
    const data = await getQueries()
    setData(data)
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
      }}>Queries</h1>
      <div style={{
        display: 'grid',
        gridGap: '20px',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'
      }}>
        {
          data.map((dt, index) => <>
            <div key={dt.queryText + index} style={{
              color: 'black',
              borderRadius: '8px',
              backgroundColor: '#AC272722',
              padding: '12px'
            }}>
              <p>Query запрос: {dt.queryText}</p>
              <p>Количество запросов: {dt.queryCount}</p>
              <p>Масимальное время запроса: {dt.maxQueryDuration.replace('-', '')}</p>
            </div>
          </>)
        }
      </div>
    </div>
  )
}

export default Queries