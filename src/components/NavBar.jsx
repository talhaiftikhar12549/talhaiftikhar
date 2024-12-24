export default function NavBar() {
    return (
        <>
            <div className="h-[15vh] flex bg-[#000b14] text-[#d9d7d7] justify-around items-center px-20 z-10 relative"> 
                <p onClick={()=>{console.log("button clicked")}} className="font-bold cursor-pointer hover:text-[#ffffff]">HOME</p>
                <p className="font-bold cursor-pointer hover:text-[#ffffff]">ABOUT ME</p>
                <p className="font-bold cursor-pointer hover:text-[#ffffff]">EXPERIENCE</p>
                <p className="font-bold cursor-pointer hover:text-[#ffffff]">PROJECTS</p>
                <p className="font-bold cursor-pointer hover:text-[#ffffff]">EDUCTION</p>
                <p className="font-bold cursor-pointer hover:text-[#ffffff]">CONTACT</p>
               
            </div>
        </>
    )
}