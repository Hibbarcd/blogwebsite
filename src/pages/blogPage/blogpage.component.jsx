import React from 'react'

import './blogpage.style.scss'
//import { connect } from 'react-redux'
import TextContainer from '../../components/text-item-container/text-container.component'


const BlogPage = ({toggleStartImage}) => (
    <div className='blog-page'>
        <TextContainer />
    </div>
)


// export default connect(null,mapDispatchToProps
// )(StartPage)
export default BlogPage