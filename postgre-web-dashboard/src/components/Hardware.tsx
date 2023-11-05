import { useEffect, useState } from "react"
import { Hardware, getHardware } from "../services/hardware"


const HardwareComp = () => {

    const [data, setData] = useState<Hardware | undefined>(undefined)

    const update = async () => {
        const data = await getHardware()
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
            }}>Нагрузка</h1>
            <div style={{
                display: 'grid',
                color: 'var(--primary)'
            }}>
                {
                    data && <>
                        <p><span style={{
                            color: 'black'
                        }}>Загруженнсость процессора:</span> {Math.floor(data.cpuUsagePercentage)}%</p>
                        <p><span style={{
                            color: 'black'
                        }}>Свободно памяти:</span> {Math.floor(data.availableRamMb)}МБ</p>
                        <p><span style={{
                            color: 'black'
                        }}>Используется памяти</span> {Math.floor(data.maxRamSizeMb - data.availableRamMb)}МБ из {Math.floor(data.maxRamSizeMb)}МБ</p>
                    </>
                }
            </div>
        </div>
    )
}

export default HardwareComp