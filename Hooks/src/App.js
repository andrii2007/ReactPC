import {Component,useState,useEffect,useCallback, useMemo} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
import Apps from './Ref';


const getsomeImages=()=>{
    console.log('Fetch')
    return [
       "https://static.vecteezy.com/system/resources/thumbnails/025/067/762/small_2x/4k-beautiful-colorful-abstract-wallpaper-photo.jpg",
       "https://static.vecteezy.com/system/resources/thumbnails/025/067/762/small_2x/4k-beautiful-colorful-abstract-wallpaper-photo.jpg"
    ]
}

const countTotal=(num)=>{
    console.log('countering...')
    return num+10
    
}


const Slider = (props) => {

    // const SlideState=useState(0);
    // console.log(SlideState)
    const [slideState,setslide]=useState(0);
    console.log(slideState)
    const [autoplay,setAutoplay]=useState(false)

    // const getsomeImages=useCallback(()=>{
    //     console.log('Fetch')
    //     return [
    //        "https://static.vecteezy.com/system/resources/thumbnails/025/067/762/small_2x/4k-beautiful-colorful-abstract-wallpaper-photo.jpg",
    //        "https://static.vecteezy.com/system/resources/thumbnails/025/067/762/small_2x/4k-beautiful-colorful-abstract-wallpaper-photo.jpg"
    //     ]
    // },[slideState])
// useCallback

        // function loggin(){
        //     console.log('errrrrrrrrrrrrr')
        // }
//     useEffect(()=>{
//         document.title=`title:${slideState}`
//         window.addEventListener('click',loggin)
//         return ()=>{
//             window.removeEventListener('click',loggin)
//         }//для заміни componentwillUnMount
//     },
//     [slideState])//для створення залежності і оптимизації роботи


    // useEffect(()=>{
    //     document.title=`title:${slideState}`
    // },
    // [])
    // для емуляції componentDidMount
    
    // const changeSlide=(i)=>{
        //     setslide(slideState+i)
        // }
        
    // function toggleAutoplay(){
        //     setAutoplay(!autoplay)
        // }
            
    const changeSlide=(i)=>{
        setslide(slideState=>slideState+i)
    }
            
    function toggleAutoplay(){
            setAutoplay(autoplay=>!autoplay)
        }
                    
            
        // const [state,setState]=useState({slideState:0,autoplay:false})
    
    
        // const changeSlide=(i)=>{
        //     setState(state=> ({
        //         ...state,slideState:state.slideState+i
        //     }))
        // }
    
        // function toggleAutoplay(){
        //     setState(state=> ({
        //         ...state,autoplay:!state.autoplay
        //     }))
        // }

    // const {slideState,autoplay}=state

    const total=useMemo(()=>{
        countTotal(slideState)
    },[slideState])

    const style=useMemo(()=>({
        color: slideState > 4 ? 'red' : 'black'
    }),[slideState])

    useEffect(()=>{
        console.log('styless')
    },[style])



    return (
        <Container>
            <div className="slider w-50 m-auto">
            <img className="d-block w-100" src="https://static.vecteezy.com/system/resources/thumbnails/025/067/762/small_2x/4k-beautiful-colorful-abstract-wallpaper-photo.jpg"  alt="slide" />
                {/* {
                    <Slide getsomeImages={getsomeImages} />
                } */}
                <div className="text-center mt-5">total slide:  {slideState} 
                    <br/> 
                    {autoplay ? 'auto' : null}
                </div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}
                        >
                            -1
                        </button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}
                        >+1
                        </button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}
                        >toggle autoplay
                        </button>
                </div>
            </div>
        </Container>
    )
}

// const Slide=({getsomeImages})=>{
//     const [images,setImage]=useState([])

//     useEffect(()=>{
//         setImage(getsomeImages())
//     },[getsomeImages])

//     return(
//         <>
//         {
//             images.map((url,i)=>
//                 <img key={i} className="d-block w-100" src={url} alt="slide" />
//             )
//         }
//         </>
//     )
// }//CallBack


function App() {
  return (
        // <Apps/>,
        <Slider/>
  );
}

export default App;


