/**
 * Created by wenming on 26/01/2017.
 */
import React from 'react'

import SideBar from './components/SideBar/SideBar'

class MainFrame extends React.Component {

    render() {
        let sideBarWidth = '350px';

        return (
            <div>
                <SideBar width={sideBarWidth}/>
                <main style={{marginLeft: sideBarWidth, height: innerHeight, overflow: 'auto'}}>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default MainFrame