import React from 'react';
import Child1 from './child1';
import Child2 from './child2';
import Child3 from './child3';
import { Listdata } from './Listdata';

const Parent = () => {
  return (
    <div>
        <div className='d-flex  justify-content-between m-5 '>
             <Child1 info = {Listdata[0]}/>
             <Child2 info = {Listdata[1]}/>
             <Child3 info = {Listdata[2]}/>
        </div>

    </div>
  )
}

export default Parent