// export const ColorMessages = () => {
export const ColorMessages = (props) => {//propsを引数にして親コンポ入力情報によって文字や色を動的に変更
    console.log(props);
    const contentStyle = {
        color: props.color,
        fontSize: "20px" //jsのプロパティ名にハイフン「-」は使えない
    };
    // return <p style={contentStyle}>{props.message}</p> messageをプロパティとして文字を渡すバージョン
    return <p style={contentStyle}>{props.children}</p>
}
// ※つまり親コンポでここで作った変数→プロパティを登録すれば動的に変更できる