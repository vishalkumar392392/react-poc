import React from 'react'
import classes from './Person.css'

const person = (props) =>{

  const res = ["img-fluid rounded-circle  z-depth-2 w-50 mb-3" ,classes.img,classes.imgstyle].join(' ');
  console.log(res)
  return(
    <div>
    <div >
          <div className="col">
            <div className={`card`}>
              <div className="card-body">
                <img
                  src={props.picture}
                  alt=""
                  className={res}
                  
                />
                <h3 className="text-center text">{props.name}</h3>
                <h5 className="text-muted text-center">{props.gender}</h5>
                <p className="text-center">
                {props.email}
                </p>
                <div className="d-flex justify-content-center">
                  <div className="p-4">
                    <a href="http://facebook.com">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </div>
                  <div className="p-4">
                    <a href="http://twitter.com">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                  <div className="p-4">
                    <a href="http://instagram.com">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

    </div>
    </div>
  )
}

export default person