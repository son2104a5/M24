import Button from 'react-bootstrap/Button';

export default function Login() {
  return (
    <div className="flex">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/038/996/793/small_2x/ai-generated-a-tranquil-japanese-garden-adorned-with-cherry-blossoms-fantasy-landscape-anime-or-cartoon-style-seamless-looping-4k-time-lapse-virtual-animation-background-video.jpg" className="w-1/2 h-screen"/>
        <div className='p-[50px] pl-[120px]'>
            <h1 className='mb-[50px] text-[64px]'>Login</h1>
            <div className='mb-[50px]'>
                <label htmlFor="" className='mb-[5px] text-[24px]'>E-Mail</label>
                <br />
                <input type="text" placeholder="Placeholder content" className="border-2 p-2 rounded w-[350px]"/>
            </div>
            <div className='mb-[25px]'>
                <label htmlFor="" className='mb-[5px] text-[24px]'>Password</label>
                <br />
                <input type="password" placeholder="Placeholder content" className="border-2 p-2 rounded w-[350px]"/>
            </div>
            <p className='text-right font-bold mb-[25px] text-gray-500'>Forgot password?</p>
            <Button variant="primary" className='w-[350px]'>Login</Button>{' '}
        </div>
    </div>
  )
}
