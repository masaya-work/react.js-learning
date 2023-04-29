import { useState, memo, useCallback } from "react";
import { useEffect } from "react";
import { CssModules } from "./components/CssModules";//名前に.jsxをつけてもいい
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";
import { TailwindCss } from "./components/TailwindCss";
import { ColorMessages } from "./components/colorMessage";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";



export const App = memo(() => {
    // State定義
    const [num, setNum] = useState(0); //numは状態を持った変数、setNumはそれを更新する関数
    console.log("APPレンダリング")
    const onClickButton = () => {
        // alert(1 + 1);
        // setNum(num + 1); state表示
        // setNum((prev) => num + 1); 関数setNumを実行し、変数numに+1して返す
        // setNum((prev) => { prev + 1 });setNumの中にアロー関数（単一なので括弧は省略可能）バージョン
        setNum(prev => { //setNumの中にアロー関数（省略可能しない）バージョン（正しい書き方）。引数「prev」にはstateが更新される前の値（0）が送られる仕組みになっている。
            return prev + 1;
        });
    }
    // const contentStyle = {  ColorMessages.jsxに移動し動的に作る
    //     color: "blue",
    //     fontSize: "20px" //jsのプロパティ名にハイフン「-」は使えない
    // }

    // ↓ある値が変わったら、ある処理を行う
    useEffect(() => { //useEffectの中に無名関数
        alert("useEffect"); //処理はアロー関数で第一引数に入れる
    }, [num]);//条件は第二引数に配列で入れる

    const contentPinkStyle = {
        color: "pink",
        fontSize: "20px"
    }

    // ↓後にpropsを使ってchild1.jsxに渡す関数
    const onClickReset = useCallback(() => {//useCallback(),[]で関数をメモ化
        setNum(0);
    }, []);
    // return <h1>こんにちは！</h1>;
    return (
        <>
            {/* この中ではjavascriptの記述も可能 */}
            {console.log("aaa")}
            <h1 style={{ color: "red" }}> こんにちは！</h1>
            {/* <ColorMessages />colorMessage.jsxの内容表示するだけならこれだけでもOK */}
            {/* <ColorMessages color="aqua" message="お元気？" />//messageで動的に変更パターン */}
            <ColorMessages color="aqua">元気ですか？{/* //childrenで動的に変更パターン（タグも入れられる） */}
                <div>
                    <p>テスト</p>
                </div>
            </ColorMessages>
            <p style={contentPinkStyle}> 元気です！</p>
            <button onClick={onClickButton}>ボタン</button>
            <p>
                {num}{/*state処理済みの状態を持っている変数numを表示*/}
            </p>

            <CssModules />
            <StyledJsx />
            <StyledComponents />
            <Emotion />
            <TailwindCss />
            {/* ↓propsとして関数設定 */}
            {/* propsは親から子にのみ渡すことができる */}
            <Child1 onClickReset={onClickReset} />
            <Child4 />
        </>
    );
});


