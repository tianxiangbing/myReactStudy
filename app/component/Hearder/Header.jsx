import React from 'react';
import styles from './_Header.scss';
console.log(styles.header);
export default class Header extends React.Component {
    constructor(props){
        super(props);
        console.log(styles)
        console.log(props)
    }
    render(){
        return (
            <div className ={styles.header} >
                Header
                <div className={styles.title}>title</div>
            </div>
        );
    }
}