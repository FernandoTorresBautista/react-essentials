import React from 'react'
import { NameContext } from '../App'
import { ColorContext } from '../App'
const ComponentC = () => {
  return (
    <div>
      <div>Component C</div>
      <NameContext.Consumer>
        {
          name => {
            return(
              <ColorContext>
                {color => (
                  <div>name: {name}, color: {color}</div>
                )}
              </ColorContext>)            
          }
        }
      </NameContext.Consumer>
    </div>
  )
}

export default ComponentC
