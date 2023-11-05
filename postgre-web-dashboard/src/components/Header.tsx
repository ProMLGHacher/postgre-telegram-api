import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header style={{
        backgroundColor: 'var(--primary)'
    }}>
        <div className='container' style={{
            paddingBlock: '20px',
            display: 'flex',
            gap: '18px',
            alignItems: 'center'
        }}>
            <img src={logo} alt="logo" />
            <div style={{
                width: '1px',
                height: '46px',
                backgroundColor: 'white'
            }} />
            <div>
                <h1>WARNINGBASE</h1>
                <p>Ваш продуктовый помощник </p>
            </div>
        </div>
    </header>
  )
}

export default Header