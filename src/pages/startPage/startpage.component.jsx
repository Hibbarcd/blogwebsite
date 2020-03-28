import React from 'react';
//import { connect } from 'react-redux'
import TextContainer from '../../components/text-item-container/text-container.component'

import './startpage.style.scss'

const StartPage = ({toggleStartImage}) => (
    <div className='start-page'>
        <TextContainer />
    </div>
)


// export default connect(null,mapDispatchToProps
// )(StartPage)
export default StartPage