import React from 'react'

export default function () {
    const styleObject: any = {
        width: "200px",
        height: "90px",
        backgroundColor: "white",
        textAlign: "center",
        lineHeight: "90px",
      };
  return (
    <div>
        <header style={{
            textAlign: 'center',
            width: '100vw',
            height: '10vh',
            background: 'grey',
            lineHeight: '10vh',
        }}>Header</header>
        <nav style={{
            width: '100vw',
            height: '4vh',
            background: 'blue',
            lineHeight: '4vh',
            textAlign: 'center',
        }}>Navigation</nav>
        <div style={{
            display: 'flex',
        }}>
            <menu className='col-2' style={{
                width: '20vw',
                height: '86vh',
                background: 'green',
                lineHeight: '86vh',
                textAlign: 'center',
                margin: '0',
                padding: '0'
            }}>Menu</menu>
            <div style={{
              backgroundColor: "#fef2f2",
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              padding: "30px 30px 0 30px",
            }}>
                <div style={styleObject}>cart</div>
                <div style={styleObject}>cart</div>
                <div style={styleObject}>cart</div>
                <div style={styleObject}>cart</div>
                <div style={styleObject}>cart</div>
                <div style={styleObject}>cart</div>
                <div style={styleObject}>cart</div>
                <div style={styleObject}>cart</div>
                <div style={styleObject}>cart</div>
                <div style={styleObject}>cart</div>
                <div style={styleObject}>cart</div>
                <div style={styleObject}>cart</div>
                <div style={styleObject}>cart</div>
                <div style={styleObject}>cart</div>
                <div style={styleObject}>cart</div>
                <div style={styleObject}>cart</div>
            </div>
            <article className='col-2' style={{
                width: '20vw',
                height: '86vh',
                background: 'aqua',
                lineHeight: '86vh',
                textAlign: 'center',
                margin: '0'
            }}>Artical</article>
        </div>
    </div>
  )
}
