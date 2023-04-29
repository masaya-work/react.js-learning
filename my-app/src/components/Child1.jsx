import { Child2 } from "./Child2";
import { Child3 } from "./Child3";
import { memo } from "react"; //mome化するためのインポート

const style = {
    height: "200px",
    backgroundColor: "lightblue",
    padding: "8px"
}

export const Child1 = memo((props) => {//コンポーネント関数をmome()で囲み、app（親）が再レンダリングされてもchild1（子）はされなくする。（前回の処理を保存しておき、必要な時に再計算）。propsに変更ない限りは再レンダリングされない、
    const { onClickReset } = props;// ↓propsから関数を展開
    console.log("child1レンダリング");
    return (
        <div style={style}>
            <p>Child1</p>
            {/* // ↓propsの関数を展開 */}
            <button onClick={onClickReset}>リセット</button>
            <Child2 />
            <Child3 />
        </div>
    );
});

