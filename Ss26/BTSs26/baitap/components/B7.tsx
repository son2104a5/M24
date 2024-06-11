import React from 'react'

export default function () {
  return (
    <div>
        <header style={{
            textAlign: 'center',
            width: '100vw',
            height: '10vh',
            background: 'grey',
            lineHeight: '10vh',
        }}>Header</header>
        <div style={{
            display: 'flex',
        }}>
            <menu style={{
                width: '10vw',
                height: '85vh',
                background: 'blue',
                lineHeight: '85vh',
                textAlign: 'center',
            }}>Menu</menu>
            <div style={{
                padding: '16px 30px',
            }}>
                <main style={{
                    width: '84vw',
                    height: '77vh',
                    background: 'green',
                    lineHeight: '85vh',
                    textAlign: 'center',
                }}>Main</main>
                <footer style={{
                    textAlign: 'center',
                    height: '5vh',
                    background: 'grey',
                    lineHeight: '5vh',
                }}>Footer</footer>
            </div>
        </div>
    </div>
  )
}
