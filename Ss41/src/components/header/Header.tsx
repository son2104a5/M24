import './header.scss'

export default function Header() {
  // Quy tắc đặt tên cho các className đối với việc dùng scss
  // Quy tắc BEM (Block-Element-Modifier)
  return (
    <div className='header'>
        <div className='logo'>
            logo
        </div>
        <div className='nav'>
            <a className='home' href="">Home</a>
            <a className='about' href="">About</a>
            <a className='contact' href="">Contact</a>
        </div>
    </div>
  )
}
