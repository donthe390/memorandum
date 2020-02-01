/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'

const memo = [
    {
        id: "weo32ia8fj",
        title: "kiji A",
        date: "2020/1/11",
        text: "kiji A no nakami"
    },
    {
        id: "araenq3qt58",
        title: "kiji B",
        date: "2020/1/12",
        text: "kiji B no nakami"
    }
]


 
 class Display extends 
 React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: memo,
            title: "", //Reactのstateを信頼できる唯一の情報源とするため
            text:"",
        };

        this.handleChange = this.handleChange.bind(this)
        //よくわからんけどバインドしないとhandleChangeは動かない
    }
    
    // 1. id, title, date, text用のテキストボックスを作成
    // 2. this.state に　id, title, date, text　の辞書 を　nullで作っておく
    // 3. 登録用のボタンを作成
    // 4. 登録用のボタンを押した際、のメソッド
    //      this.state の　id, title, date, text　の辞書がテキストボックスの入力値で更新されるようにする
    //      this.state.value に辞書を追加する
    //

    handleChange(e){ //テキストボックスの値が変化したときstateに格納する
        let name = e.target.name;
        this.setState({[name]: e.target.value})
    }

    handleClick(){ //クリックしたときの挙動   
        alert("handleClickが正常に動作しました");

        const memo1 = this.state.value.slice(); //配列のコピーを作成
        const addLength = Object.keys(memo1).length; //配列の最後尾の番号を変数に格納

        memo1[addLength] = { //idとtitleはいずれ自動にしたい
            id: "add298j7j8",
            title: this.state.title,
            date: "2020/1/23",
            text: this.state.text 
        };
        
        this.setState({
            value: memo1
        })
                
    }

    render() {
        return(

        <div>
            <div className="inputarea">
            
                <div className="inTitle"><input type = "text" name = "title" placeholder = "ここにタイトルを入力" onChange={this.handleChange}  ></input></div>
                <div className="inText"><input type = "text" name = "text"  placeholder = "ここにテキストを入力" onChange={this.handleChange}  ></input></div>
            
            
            <button 
                onClick={() => this.handleClick()}    
            >
            送信
            </button>
            
          
            </div>

                

            <div className="displayarea">       
                { this.state.value.map((value) => (
                    <div >
                        <li css={{
                        color: 'hotpink'
                      }}>{value.id}</li>
                        <LiTitle>{value.title}</LiTitle>
                        <li>{value.date}</li>
                        <li>{value.text}</li>
                    </div>
                ))}
            </div>    
        </div>
     );
 }
}
 const LiTitle = styled.li
 　`color: turquoise;`

 export default Display;