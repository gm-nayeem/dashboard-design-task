import Card from '../components/Card';

const Chef = () => {
    return (
        <div className='h-full flex flex-col gap-y-6 pr-2 pb-4'>
            <div className='flex justify-between items-center bg-gray-700 px-4 py-3 text-xs'>
                <h3 className='text-red-500'>CHEF PAGE</h3>
                <p>Home / <span className='text-red-500'>Chef Page</span></p>
            </div>

            <div className='mx-4 flex flex-wrap gap-y-2 gap-x-[1%]'>
                {
                    Array(12).fill().map((item, index) => (
                        <Card key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default Chef;