

const Banner = () => {
    return (
        <div className=' flex items-center justify-end h-screen' style={{ backgroundImage: `url('https://i.postimg.cc/G90QT4PS/dreamy-creative-talented-female-writer-student-want-become-journalist-taking-notes-todo-list-wri.jpg')`, backgroundSize: 'cover', backgroundPosition: 'cover'}}>
            <div className='px-10 text-black space-y-9 text-center lg:text-right'>
                <h1 className='text-4xl lg:text-7xl font-bold'>The Best Management  <br /> Task in your life.</h1>
                <p className='text-base lg:text-xl'>Become focused, organized, and calm with Todoist. <br /> The world’s  task manager and to-do list app.</p>
                <button className='px-8 py-4 text-xl rounded-lg bg-red-500'>Let&apos;s Explore</button>
            </div>
        </div>
    )
}

export default Banner