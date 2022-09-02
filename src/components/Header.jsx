import React, {Component} from 'react'
import ThemeContext from './themeContext'

class Header extends Component {
    static contextType = ThemeContext
    render() {
        const fl = this.context.charAt(0).toUpperCase()
        const rl = this.context.slice(1)
        const tw = `${fl}${rl}`
        console.log(tw)
        return (
            <header className={`${this.context}-theme`}>
                <h2>{tw} Theme</h2>
            </header>
        )
    }
}
export default Header