import React from 'react'
import { connect } from 'react-redux'

function Home(props) {
    return (
        <div>
            <h1 style={{color: 'white'}}>CONNECTODAY: Connect, meet, collaborate!</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
        userId: state.login._id
    } 
}

export default connect(mapStateToProps)(Home)