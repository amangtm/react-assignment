import React from 'react'
import Store from './component/Store'
import App from './App'
function AppWrapper() {
    return (
        <Store>
            <App/>
        </Store>
    )
}

export default AppWrapper
