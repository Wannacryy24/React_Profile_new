import React, { useContext } from 'react';
import Aside from './Component/Aside/Aside';
import './Layout.css';
import Explorer from './Component/Explorer/Explorer';
import TabNav from './TabNav';
import { ButtonContext } from './ButtonContext';

export default function LayoutMainDiv() {
  const { activeComponent } = useContext(ButtonContext);

  return (
    <div className='layout-Main-Div'>
      <Aside />
      {activeComponent && <Explorer />}
      <TabNav />
    </div>
  );
}