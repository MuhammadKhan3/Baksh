import React, { useState } from 'react'
import HomeFilter from '../../components/homeFilter';
import {BiGlobe} from 'react-icons/bi'
import {MdKeyboardArrowUp} from 'react-icons/md'
import {MdOutlineAddBox} from 'react-icons/md'
import SearchType from '../../components/searchType';
import './homecontent.css'

const HomeContent = () => {
  const [propertyType,setpropertyType]=useState('buy');
  const [filterClick,setfilterClick]=useState('');
  

  return (
    // absolute top-[15vh]
    // xl:bg-gradient-to-tr 2xl:bg-gradient-to-tr 3xl:bg-gradient-to-tr  lg:bg-gradient-to-tr md:bg-gradient-to-tr sm:bg-white  from-pink-50 via-pink-50   to-blue-50
    <section className='bg-white  mix-blend-multiply             text-black  h-[90%]   w-full zoom    bg-blend-multiply  mb:relative mb:top-0 mb:h-[80vh] relative ' onClick={(e)=>{ console.log('bublin'); setfilterClick('')}} >
    {/* mt-5 */}
    <div className='flex flex-col items-center justify-center  sm:mt-12 mb:mt-10'>
    {/* mt-28 mb:mt-[169px] */}
       <div className='h-fit mt-28  mx-auto mb:mt-0
          sm:mt-[2vh]
          md:mt-[3vh] 
          lg:mt-[3vh]
          xl:mt-[5vh] 
          2xl:mt-[4vh]      
          3xl:mt-[5vh]
          text-center '>       
              <h1 className='text-bigHeading h-fit w-[50.5%] mx-auto     text-justify mb:w-[310px] sm:w-[310px]
                      sm:text-[2rem]
                      md:text-[2rem]
                      lg:text-[2rem]   
                      xl:text-[2rem] 
                      2xl:text-[2.2rem]  
                    text-black  
                     mb:text-[#C0C0C0]  
                      font-light 
                      mb:text-responsive-heading'>
                    Discover a <span className='text-primaryWeb'>place</span> you’ll love to live
              </h1>
       </div>

       <div className='h-fit mt-8 xl:mt-[3vh] w-[18.5%] xl:ml-[3%] 2xl:ml-[3%] ' >
        <SearchType propertyType={propertyType} setpropertyType={setpropertyType}/>
       </div>       
       
       <div className='h-fit w-[50%] mb:w-[90%] sm:w-[70%] md:w-[70%] mx-auto text-center mt-5 ' onClick={(e)=>{e.stopPropagation()}}>
               <HomeFilter filterClick={filterClick} setfilterClick={setfilterClick} />
       </div>
       
       <div className='mx-auto rounded-xl mt-48 mb:mt-[10vh] flex flex-row items-center  gap-10 w-auto  mb:flex-col  mb:gap-5 sm:mt-[20vh] md:mt-32  lg:mt-36  xl:mt-24 2xl:mt-28 3xl:mt-[15vh] '>
          <div>
            <a style={{boxShadow:' 0px 3px 18px rgba(0, 0, 0, 0.2)'}} className='px-[34px] rounded-full text-white py-[12px] bg-primaryWeb mb:hidden cursor-pointer'>Wanted</a>
            <a  className='px-[34px]  py-[12px] border-[1px] border-[#717171] hidden mb:inline-block text-base2 text-[#717171] rounded-[10px] hover:text-primaryWeb hover:border-primaryWeb'>Wanted</a>
          </div>
          <div className='w-[500px] mb:w-[260px]'>
                <p className='text-base2 text-[#717171] mb:text-small w-full  text-left mb:text-center '>
                   Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                </p>
          </div>
       </div>
       
        <div className='flex flex-row items-center  justify-center max-w-full   w-[90%] h-fit mix-blend-multiply  opacity-[0.4] -z-50 relative  mb:hidden'>
                    <img src={require('../../assets/footer/artOne.png')} className="basis-6/12 w-[50%] self-end     object-contain " alt="Art One"/>
                    <img src={require('../../assets/footer/artTwo.PNG')} className="basis-6/12 w-[50%] self-center        object-contain " alt="Art Two"/>            
        </div>
        <span className='border-b-[1px] border-[#C0C0C0] mt-8  w-full inline-block mb:hidden'></span>
        <div className='  mb:h-24 flex flex-row text-smallBold space-x-10 justify-end w-full items-center text-black mr-32 mb:hidden pt-4'>
              <div className='flex flex-row items-center space-x-2'>
                  <BiGlobe size={20}/>
                  <p className=''>English (US)</p>
              </div>
              <div className='flex flex-row items-center space-x-2'>
                  <p>$</p>
                  <p className='text-smallBold'>USD</p>
              </div>
              <div className='flex flex-row items-center'>
                <p>Support & resources</p>
                <MdKeyboardArrowUp size={20}/>
              </div>
        </div>
      </div> 
    </section>)
}

export default HomeContent