import CardStyle from "./LessonCard.module.css"

const LessonCard = ({data}) => {
  return (
    <div className={CardStyle.container}>
        {data.map(({id,name,hour,image})=>{
            return(
            <div className={CardStyle.cardLesson} key={id}>
                <img src={image} alt="lesson" />
                <div className={CardStyle.content}>
                    <p>LESSON NAME: <span>{name}</span></p>
                    <p>LESSON HOUR : <span>{hour}</span></p>
                </div>
        </div>
       ) })}
        
    </div>
  )
}

export default LessonCard