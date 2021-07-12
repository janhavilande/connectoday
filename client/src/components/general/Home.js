import React from 'react'
import { connect } from 'react-redux'

function Home(props) {
    const { posts, userId } = props
    return (
        <div>
            <h1 style={{color: 'white'}}>CONNECTODAY: Connect, Meet, Collaborate!</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {

        userId: state.login._id
    }
}

export default connect(mapStateToProps)(Home)