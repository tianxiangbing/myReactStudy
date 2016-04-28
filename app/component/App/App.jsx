import React from 'react';
import Header from '../Hearder/Header';
import Style from './_App.scss';
import Dialog from '../Dialog/Dialog';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dialog: null};
    }

    alert(msg, callback) {
        callback = (callback && callback instanceof Function) ? callback : function () {
        };
        this.setState({
            dialog: {
                title: "提示",
                show: true,
                content: msg,
                buttons: [{
                    text: "知道了",
                    cls:"ok",
                    events: {
                        click(){
                            callback();
                            this.close();
                        }
                    }
                }]
            }
        })
    }
    confirm(msg,callback){
        callback = (callback && callback instanceof Function) ? callback : function () {
        };
        this.setState({
            dialog: {
                title: "提示",
                show: true,
                content: msg,
                buttons: [{
                    text: "取消",
                    events: {
                        click(){
                            this.close();
                        }
                    }
                },{
                    text: "确定",
                    cls:"ok",
                    events: {
                        click(){
                            callback();
                            this.close();
                        }
                    }
                }]
            }
        })
    }
    tip(msg){
        this.setState({
            dialog: {
                show: true,
                title: msg,
            }
        })
        setTimeout(()=>{
            this.setState({
                dialog:0
            });
        },2000);
    }
    renderDialog(){
        return <Dialog App={this} {...this.state.dialog}/>
    }
    open(){
        this.alert('hehehe');
    }
    close(){
        this.setState({dialog:null});
    }
    render() {
        return (
            <div>
                <Header/>
                body123
                <button onClick={this.open.bind(this)}>dialog</button>
                <button onClick={this.confirm.bind(this,'你确定吗？')}>confirm</button>
                <button onClick={this.tip.bind(this,'提交成功，我们会打个电话给你的！请耐心等待')}>tip</button>
                <button onClick={this.close.bind(this)}>close</button>
                {this.state.dialog?this.renderDialog():undefined}
            </div>
        );
    }
}
