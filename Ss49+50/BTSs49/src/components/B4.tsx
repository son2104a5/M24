export default function B4() {
  return (
    <div>
        <strong className='text-3xl'>B4:</strong>
        <div className="flex">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/038/996/793/small_2x/ai-generated-a-tranquil-japanese-garden-adorned-with-cherry-blossoms-fantasy-landscape-anime-or-cartoon-style-seamless-looping-4k-time-lapse-virtual-animation-background-video.jpg" className="w-1/2 h-screen"/>
            <div className='p-[50px] pl-[120px]'>
                <h1 className='mb-[50px] text-[48px]'>Register Account</h1>
                <div className='mb-[25px]'>
                    <label htmlFor="" className='mb-[5px] text-[24px]'>Your email</label>
                    <br />
                    <input type="text" placeholder="name@company.com" className="border-2 p-2 rounded w-[350px]"/>
                </div>
                <div className='mb-[25px]'>
                    <label htmlFor="" className='mb-[5px] text-[24px]'>Password</label>
                    <br />
                    <input type="password" placeholder="********" className="border-2 p-2 rounded w-[350px]"/>
                </div>
                <div className='mb-[25px]'>
                    <label htmlFor="" className='mb-[5px] text-[24px]'>Confirm Password</label>
                    <br />
                    <input type="password" placeholder="********" className="border-2 p-2 rounded w-[350px]"/>
                </div>
                <p className='p-2 text-white rounded bg-blue-600 text-center w-[350px]'>Create an account</p>
                <p className='text-center mt-5'>Already have an account? <strong>Login here</strong></p>
            </div>
        </div>
    </div>
  )
}
