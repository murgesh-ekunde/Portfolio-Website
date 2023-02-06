import React from 'react'

const WorkItmes = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className='work__img' />
        <h3 className="work__title">{item.title}</h3>
        <div className="link__buttons">
        <a href={item.demoLink} className="work__button button button--flex">Demo</a>
        <a href={item.sourceCode}  className="work__button button button--flex">Source Code</a>
        </div>
    </div>
  )
}

export default WorkItmes